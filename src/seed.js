/* eslint-disable prettier/prettier */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
export function seedDatabase(firebase) {
    const users = [
      {
        userId: 'NvPY9M9MzFTARQ6M816YAzDJxZ72',
        username: 'bharat',
        fullName: 'Bharat Sharma',
        emailAddress: 'bs987143@gmail.com',
        following: ['2'],
        followers: ['2', '3', '4'],
        dateCreated: Date.now()
      },
      {
        userId: '2',
        username: 'lakshay',
        fullName: 'Lakshay Goyal',
        emailAddress: 'goyallakshay01@gmail.com',
        following: [],
        followers: ['NvPY9M9MzFTARQ6M816YAzDJxZ72'],
        dateCreated: Date.now()
      },
      {
        userId: '3',
        username: 'vaibhav',
        fullName: 'Vaibhav Mishra',
        emailAddress: 'gokuvaibhav@gmail.com',
        following: [],
        followers: ['NvPY9M9MzFTARQ6M816YAzDJxZ72'],
        dateCreated: Date.now()
      },
      {
        userId: '4',
        username: 'mohit',
        fullName: 'Mohit Sharma',
        emailAddress: 'mohit@gmail.com',
        following: [],
        followers: ['NvPY9M9MzFTARQ6M816YAzDJxZ72'],
        dateCreated: Date.now()
      }
    ];
  
    // eslint-disable-next-line prefer-const
    for (let k = 0; k < users.length; k++) {
      firebase.firestore().collection('users').add(users[k]);
    }
  
    // eslint-disable-next-line prefer-const
    for (let i = 1; i <= 5; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: '2',
          imageSrc: `/images/users/raphael/${i}.jpg`,
          caption: 'Saint George and the Dragon',
          likes: [],
          comments: [
            {
              displayName: 'vaibhav',
              comment: 'Great Place, Would like to visit here'
            },
            {
              displayName: 'mohit',
              comment: 'Nice Photo, Man'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        });
    }
  }