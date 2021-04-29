/* eslint-disable prettier/prettier */
import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';
import { getUserByUserId } from '../services/firebase';

export default function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUserObjBYUserId() {
      // Function that can call firebase service that get the user data based on the id
      const [response] = await getUserByUserId(user.uid);
      setActiveUser(response);
    }
    if (user?.uid) {
      getUserObjBYUserId();
    }
  }, [user]);

  return { user: activeUser };
}
