// firebase
import firebase from './Firebase';
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendSignInLinkToEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';

// state
import State from './State';

class Auth {
  static emailAndPassword() {
    const { auth } = firebase;
    const { delay, password, username } = State.getState();

    State.onSignInStart();
    setTimeout(() => {
      signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        State.onSignInSuccess(userCredential);
      })
      .catch((error) => alert(error.message))
      .finally(() => State.onSignInStop());
    }, delay);
  }

  static facebook() {
    const { auth } = firebase;
    const { delay } = State.getState();
    const provider = new FacebookAuthProvider();

    State.onSignInStart();
    setTimeout(() => {
      signInWithPopup(auth, provider)
      .then((result) => {
        const userCredential = FacebookAuthProvider.credentialFromResult(result);
        State.onSignInSuccess(userCredential);
      })
      .catch((error) => alert(error.message))
      .finally(() => State.onSignInStop());
    }, delay);
  }

  static gitHub() {
    const { auth } = firebase;
    const { delay } = State.getState();
    const provider = new GithubAuthProvider();

    State.onSignInStart();
    setTimeout(() => {
      signInWithPopup(auth, provider)
      .then((result) => {
        const userCredential = GithubAuthProvider.credentialFromResult(result);
        State.onSignInSuccess(userCredential);
      })
      .catch((error) => alert(error.message))
      .finally(() => State.onSignInStop());
    }, delay);
  }

  static google() {
    const { auth } = firebase;
    const { delay } = State.getState();
    const provider = new GoogleAuthProvider();

    State.onSignInStart();
    setTimeout(() => {
      signInWithPopup(auth, provider)
      .then((result) => {
        const userCredential = GoogleAuthProvider.credentialFromResult(result);
        State.onSignInSuccess(userCredential);
      })
      .catch((error) => alert(error.message))
      .finally(() => State.onSignInStop());
    }, delay);
  }

  static passwordless() {
    const { auth } = firebase;
    const { delay, username } = State.getState();

    const actionCodeSettings = {
      url: 'https://auth.rsaauthdemo.firebaseapp.com',
      handleCodeInApp: true,
      iOS: { bundleId: 'com.example.ios' },
      android: {
        packageName: 'com.example.android',
        installApp: true,
        minimumVersion: '12'
      },
      dynamicLinkDomain: 'auth.rsaauthdemo.com'
    }

    State.onSignInStart();
    setTimeout(() => {
      sendSignInLinkToEmail(auth, username, actionCodeSettings)
      .then(() => {
        alert(`Email sent to ${username}.`);
        window.localStorage.setItem('emailForSignIn', username);
      })
      .catch((error) => alert(error.message))
      .finally(() => State.onSignInStop());
    }, delay);
  }
}
export default Auth;
