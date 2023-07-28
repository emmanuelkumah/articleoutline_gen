import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const getSignUpDetails = (data) => {
  console.log(data);
  return {
    email: data.email,
    password: data.password,
  };
};

const AuthSignUp = () => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      //signed in
      const user = userCredentials.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  return <div>AuthSignUp</div>;
};

export default AuthSignUp;
