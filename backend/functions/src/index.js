// backend/functions/src/index.js
const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.createUserProfile = functions.auth.user().onCreate((user) => {
  const userRef = admin.firestore().collection('users').doc(user.uid);
  return userRef.set({
    email: user.email,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });
});
