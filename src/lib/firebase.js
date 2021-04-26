/* eslint-disable prettier/prettier */
import Firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: 'AIzaSyDbNyLhRNz0ClecBd7ZVQvh3Iqd0yCx4o4',
    authDomain: 'metagram-e03e9.firebaseapp.com',
    projectId: 'metagram-e03e9',
    storageBucket: 'metagram-e03e9.appspot.com',
    messagingSenderId: '230681870029',
    appId: '1:230681870029:web:03c4ce04c63c8dba38f384'
};


const firebase = Firebase.initializeApp(config);
const { FeildValue } = Firebase.firestore;


export { firebase, FeildValue }
