import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

firebase.initializeApp({
  apiKey: 'AIzaSyBB5HNS9Hdcou5sIJzlHzDm8OhpoVbcnkg',
  authDomain: 'meals-869ff.firebaseapp.com',
  databaseURL: 'https://meals-869ff.firebaseio.com',
  projectId: 'meals-869ff',
  storageBucket: 'meals-869ff.appspot.com',
  messagingSenderId: '991687041664',
  appId: '1:991687041664:web:785c3f9b43c04e2e0c3c65',
})

export const database = (path = '') => firebase.database().ref(path)

export const update = (changes = {}) =>
  firebase
    .database()
    .ref()
    .update(changes)
