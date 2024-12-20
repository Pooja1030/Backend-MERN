const Firebase = require('firebase-admin');

const serviceAccount = require('../')

const firebase = Firebase.initializeApp({
    credential: Firebase.credential.cert(serviceAccount),
    storageBucket : ''
})



module.exports = Firebase