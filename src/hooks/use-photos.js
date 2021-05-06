/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';
import { getPhotos } from '../services/firebase';

export default function usePhotos(user) {
  // eslint-disable-next-line no-unused-vars
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    async function getTimelinePhotos() {
      if (user?.following?.length >= 1) {
        const followedUserPhotos = await getPhotos(user.userId, user.following);

        // rearranging array to sort newest photos first by dateCreated
        followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
        setPhotos(followedUserPhotos);
      }
    }

    getTimelinePhotos();
  }, [user?.userId]);

  return { photos };
}
