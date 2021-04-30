/* eslint-disable prettier/prettier */
import { firebase, FieldValue } from '../lib/firebase';

export async function doesUserNameExist(username) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();

  return result.docs.map((user) => user.data().length > 0);
}

export async function getUserByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('userId', '==', userId)
    .get();

  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return user;
}

export async function getSuggestedProfiles(userId, following) {
  const result = await firebase.firestore().collection('users').limit(10).get();

  return result.docs
    .map((user) => ({ ...user.data(), docId: user.id }))
    .filter(
      (profile) =>
        profile.userId !== userId && !following.includes(profile.userId)
    );
}

// updateLoggedInUserFollowing, updateFollowedUserFollowers

export async function updateLoggedInUserFollowing(
  loggedInUserDocId, // currently LoggedIn user Document Id
  ProfileId, // user that is requested to follow
  isFollowingProfile // true/false (is currently LoggedIn user following this profile)
) {
  return firebase
    .firestore()
    .collection('users')
    .doc(loggedInUserDocId)
    .update({
      following: isFollowingProfile
        ? FieldValue.arrayRemove(ProfileId)
        : FieldValue.arrayUnion(ProfileId),
    });
}

export async function updateFollowedUserFollowers(
  ProfileDocId, // user that is requested to follow Document Id
  userId, // currently LoggedIn user user Id
  isFollowingProfile // true/false (is currently LoggedIn user following this profile)
) {
  return firebase
    .firestore()
    .collection('users')
    .doc(ProfileDocId)
    .update({
      followers: isFollowingProfile
        ? FieldValue.arrayRemove(userId)
        : FieldValue.arrayUnion(userId),
    });
}
