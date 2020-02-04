const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require('./service-account.json');
const express = require('express');
const cors = require('cors')({origin: '*'});

const app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tiagoit.firebaseio.com"
});

app.use(cors);

app.post('/contact', (req, res) => {
  console.log('ok')
  const doc = {
    to: ['tiferreira12@gmail.com'],
    message: {
      subject: 'Contact | tiagoit.web.app',
      text: `Email: ${req.body.email} 
      Message: ${req.body.message}`,
      html: `Email: ${req.body.email} <br>Message: ${req.body.message}`    
    }
  }
  admin.firestore().collection('contacts').add(doc).then(onfulfilled => {
    res.sendStatus(200);
  });
});

exports.app = functions.https.onRequest(app);

// exports.app = functions.https.onRequest((req, res) => {
//   console.log({params: req.params});
//   console.log({body: req.body});
//   const doc = {
//     to: ['tiferreira12@gmail.com'],
//     message: {
//       subject: 'Contact | tiagoit.web.app',
//       text: `Email: ${req.body.email} 
//       Message: ${req.body.message}`,
//       html: `Email: ${req.body.email} <br>Message: ${req.body.message}`    
//     }
//   }
//   admin.firestore().collection('contacts').add(doc).then(onfulfilled => {
//     res.sendStatus(200);
//   });
// });
