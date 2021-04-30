/* eslint-disable prettier/prettier */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  updateLoggedInUserFollowing,
  updateFollowedUserFollowers,
} from '../../services/firebase';

export default function SuggestedProfile({
  ProfileDocId,
  username,
  ProfileId,
  userId,
  loggedInUserDocId,
}) {
  const [followed, setFollowed] = useState(false);

  async function handleFollowUser() {
    setFollowed(true);

    // updating following of LoggedIn user
    await updateLoggedInUserFollowing(loggedInUserDocId, ProfileId, false);

    // updating followers of the user who has been followed

    await updateFollowedUserFollowers(ProfileDocId, userId, false);
  }

  //   console.log('username', username);
  //   console.log('ProfileId', ProfileId);
  //   console.log('ProfileDocId', ProfileDocId);
  //   console.log('userId', userId);
  //   console.log('loggedInUserDocId', loggedInUserDocId);

  return !followed ? (
    <div className='flex flex-row items-center align-items justify-between'>
      <div className='flex items-center justify-between'>
        <img
          className='rounded-full w-8 h-8 flex mr-3'
          src={`/images/avatars/${username}.jpg`}
          alt={username}
        />
        <Link to={`/p/${username}`}>
          <p className='font-bold text-sm'>{username}</p>
        </Link>
      </div>
      <button
        className='text-xs font-bold text-blue-medium'
        type='button'
        onClick={() => {
          handleFollowUser();
        }}
      >
        Follow
      </button>
    </div>
  ) : null;
}

console.log();

SuggestedProfile.propTypes = {
  ProfileDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  ProfileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  loggedInUserDocId: PropTypes.string.isRequired,
};
