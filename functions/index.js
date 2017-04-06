var functions = require('firebase-functions');
var admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.afterOauth = functions.auth.user().onCreate(event => {
    const user = event.data;
    console.log(user);
    admin.database().ref(`users/${user.uid}`).set({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL
    });
});
