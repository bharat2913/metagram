/* eslint-disable prettier/prettier */
import { useState, useEffect, useContext } from 'react';
import FirebaseContext from '../context/firebase';

export default function useAuthListener() {
  const [user, SetUser] = useState(
    JSON.parse(localStorage.getItem('authUser'))
  );
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // we have a user, That's wh we can store the user in local storage
        localStorage.setItem('authUser', JSON.stringify(authUser));
        SetUser(authUser);
      } else {
        // we Don't have an authUser, therefore clear the localstorage
        localStorage.removeItem('authUser');
        SetUser(null);
      }
    });

    return () => listener();
  }, [firebase]);

  return { user };
}
