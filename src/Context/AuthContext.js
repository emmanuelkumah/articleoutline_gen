import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const userDetails = {};
export function signUp(email, password) {
  userDetails.email = email;
  userDetails.password = password;
}

const auth = getAuth();
createUserWithEmailAndPassword(auth, userDetails.email, userDetails.password)
  .then((userCredentials) => {
    const user = userCredentials.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.errorMessage;

    console.log(errorMessage);
  });
// console.log(userDetails);
