const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.contact = functions.https.onRequest((request, response) => {
  const serviceAccount = require('./service-account.json');

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://tiagoit.firebaseio.com"
  });

  admin.firestore().collection('contact').add({test: 123});
 response.send("Hello from Firebase!");
});
