/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';
import { getUserByUserId } from '../services/firebase';

export default function useUser(userId) {
  const [activeUser, setActiveUser] = useState({});

  useEffect(() => {
    async function getUserObjBYUserId(userId) {
      // Function that can call firebase service that get the user data based on the id
      const [user] = await getUserByUserId(userId);
      setActiveUser(user || {});
    }
    if (userId) {
      getUserObjBYUserId(userId);
    }
  }, [userId]);

  return { user: activeUser };
}
