/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable react/self-closing-comp */
import { isWithinInterval } from 'date-fns';
import { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';
import { doesUserNameExist } from '../services/firebase';

export default function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [username, setUsername] = useState('');
  const [fullName, setFullname] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  const handleSignUp = async (event) => {
    event.preventDefault();

    const usernameExists = await doesUserNameExist(username);
    if (!usernameExists.length) {
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password);
        // Authentication
        await createdUserResult.user.updateProfile({
          displayName: username,
        });

        // firebase user Collection

        await firebase.firestore().collection('users').add({
          userId: createdUserResult.user.uid,
          username: username.toLowerCase(),
          fullName,
          emailAddress: emailAddress.toLowerCase(),
          following: [],
          dateCreated: Date.now(),
        });

        history.push(ROUTES.DASHBOARD);
      } catch (error) {
        setFullname('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      }
    } else {
      setError('Username is already taken, try another. ');
    }
  };

  useEffect(() => {
    document.title = 'Sign Up - Instagram';
  });

  return (
    <div className='container flex mx-auto max-w-screen-md items-center h-screen'>
      <div className='flex w-3/5 max-w-xs'>
        <img
          src='/images/iphone-with-profile.jpg'
          alt='iPhone with Instagram'
        />
      </div>
      <div className='flex flex-col w-2/5'>
        <div className='flex flex-col items-center bg-white p-4 border  border-gray-primary rounded mb-4'>
          <h1 className='flex justify-center w-full '>
            <img
              src='/images/logoInstagram.png'
              alt='Instagram'
              className='mt-2 w-6/12 mb-4'
            />
          </h1>
          {error && <p className='mb-4 text-xs text-red-primary'> {error} </p>}

          <form onSubmit={handleSignUp} method='POST'>
            <input
              aria-label='Enter your fullname'
              type='text'
              placeholder='Full Name'
              className='text-sm text-grey-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
              onChange={({ target }) => setFullname(target.value)}
              value={fullName || ''}
            />

            <input
              aria-label='Enter your username'
              type='text'
              placeholder='Username'
              className='text-sm text-grey-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
              onChange={({ target }) => setUsername(target.value)}
              value={username || ''}
            />

            <input
              aria-label='Enter your Email Address'
              type='text'
              placeholder='Email Address'
              className='text-sm text-grey-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress || ''}
            />

            <input
              aria-label='Enter your Password'
              type='password'
              placeholder=' Password '
              className='text-sm text-grey-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
              onChange={({ target }) => setPassword(target.value)}
              value={password || ''}
            />
            <button
              disabled={isInvalid}
              type='submit'
              className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${
                isInvalid && 'opacity-50'
              }`}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className='flex justify-center items-center flex-col w-full bg- white p-4 border border-gray-primary rounded'>
          <p className='text-sm'>
            Already have an account?{' '}
            <Link to={ROUTES.LOGIN} className='font-bold text-blue-medium'>
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}