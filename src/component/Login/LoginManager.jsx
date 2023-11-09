import firebase from 'firebase/compat/app'; //v9
import 'firebase/compat/auth'; //v9
import firebaseConfig from "../../firebaseBaseConfig";

// import userImg from '../../Assets/user.svg';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const setToken = () => {
  firebase.auth().currentUser.getIdToken(true)
    .then(function (idToken) {
      localStorage.setItem('token', idToken);
    })
}

export const loginWithProvider = (provider) => {
  return firebase.auth().signInWithPopup(provider)
    .then(res => {
      setToken();
      return handleResponse(res);
    }).catch(error => {
      const message = {
        error: error.message
      }
      return message;
    });
};

export const createAccount = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
      setToken();
      return handleResponse(res);
    })
    .catch(error => {
      const message = {
        error: error.message
      }
      return message;
    });
}

export const loginWithEmail = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
      setToken();
      return handleResponse(res);
    })
    .catch(error => {
      const message = {
        error: error.message
      }
      return message;
    });
}

const defaultName = (str) => {
  let myStr = str
  let firstWord = myStr.substring(0, 4)
  return firstWord;
}

const handleResponse = (res) => {
  const { displayName, email } = res.user;
  const userInfo = {
    isSignedIn: true,
    name: displayName || defaultName(email),
    email: email,
    // img: photoURL || userImg,
  }
  return userInfo;
}

export const getDecodedUser = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return {};
  }
  // Extract user information from the token manually, assuming it's a JSON web token.
  const tokenData = token.split('.')[1];
  const decodedToken = JSON.parse(atob(tokenData));
  const decodedUser = {
    isSignedIn: true,
    name: decodedToken.name || defaultName(decodedToken.email),
    email: decodedToken.email,
    // img: decodedToken.picture || userImg,
  }
  return decodedUser;
}

export const handleSignOut = () => {
  return firebase.auth().signOut()
    .then(() => {
      localStorage.removeItem('token');
      const signedOutUser = {
        isSignedIn: false,
        name: '',
        email: '',
        img: ''
      }
      return signedOutUser;
    })
}
