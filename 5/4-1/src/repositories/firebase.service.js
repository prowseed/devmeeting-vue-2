//1/ 1. This import loads the firebase namespace along with all its type information.
import firebase from 'firebase/app';

//1/ 2. Since we gonna use firestore, these import loads firestore services into the firebase namespace.
import 'firebase/firestore';

//4/ 3. Let's define our firebase config
const config = {
  projectId: 'test2-206614',
  databaseURL: 'https://test2-206614.firebaseio.com',
};

//3/ 4. And initial firebase connection
firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

//1/ 5. At the end, we will export firebase DB
export default db;
