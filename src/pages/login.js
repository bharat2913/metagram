/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';

export default function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddreaa, setEmailAddreaa] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddreaa === '';

  const handleLogin = () => {};

  useEffect(() => {
    document.title = 'Login - Instagram';
  });

  return (
    <div className='container flex mx-auto max-w-screen-md items-center h-screen'>
      <div className='flex w-3/5'></div>
    </div>
  );
}
