const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.contact = functions.https.onRequest((request, response) => {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
  });
  admin.firestore().collection('contact').add({test: 123});
 response.send("Hello from Firebase!");
});
