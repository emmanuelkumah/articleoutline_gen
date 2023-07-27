import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//form validation
const validationSchema = yup.object({
  fullName: yup.string().required("Please enter your fullname"),
  email: yup.string().required("Please enter your email"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be at least 5 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/,
      "Password should have at least  1 special char, 1 number, 1 letter."
    ),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Password must match"),
});

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(validationSchema) });

  const [toggleSignUp, setToggleSignUp] = useState(true);
  const handleToggle = () => {
    setToggleSignUp(!toggleSignUp);
  };

  const onSignUpSubmit = (data) => {
    console.log(data);
  };

  const onSignInSubmit = (data) => {
    console.log(data);
    reset({
      email: "",
      password: "",
    });
  };

  const signUpForm = (
    <section className="px-[10%]">
      <h2 className="formHeading_gradient">Hi there, Welcome!</h2>
      <p className="text-xl py-7">
        Begin here, and let's empower your creative writings 😀
      </p>
      <form onSubmit={handleSubmit(onSignUpSubmit)}>
        <div className="flex flex-col">
          <label htmlFor="name" className="py-[3%]">
            Full Name
          </label>
          <input
            {...register("fullName")}
            name="fullName"
            className="input_text"
          />
          <small className=" text-red-600 py-3">
            {errors.fullName?.message}
          </small>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="py-[3%]">
            Email
          </label>
          <input {...register("email")} name="email" className="input_text" />
          <small className=" text-red-600 py-3">{errors.email?.message}</small>
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="py-[3%]">
            Password
          </label>
          <input
            type="password"
            name="password"
            {...register("password")}
            className="input_text"
          />
          <small className=" text-red-600 py-3">
            {errors.password?.message}
          </small>
        </div>
        <div className="flex flex-col">
          <label htmlFor="confirmPassword" className="py-[3%]">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            {...register("confirmPassword")}
            className="input_text"
          />
          <small className=" text-red-600 py-3">
            {errors.confirmPassword?.message}
          </small>
        </div>
        {/* <input type="submit" value="Create Account" className="button_cta" /> */}
        <button>Register</button>
      </form>
      <div className="grid place-items-center">
        <button className="p-4 mx-auto mt-8 border border-green-200 rounded-full">
          <div className="flex justify-center gap-4">
            <FcGoogle />
            <span>Sign In With Google</span>
          </div>
        </button>
        <div className="py-[5%]">
          <p>
            Already have an account?{" "}
            <span
              className="hover:text-cyan-500 cursor-pointer"
              onClick={handleToggle}
            >
              Sign In
            </span>
          </p>
        </div>
      </div>
    </section>
  );

  const signInForm = (
    <section className="px-[10%]">
      <h2 className="formHeading_gradient">Welcome, Login to your account! </h2>
      <p className="text-xl py-7">
        Begin here, and let's empower your creative writings 😀
      </p>
      <form onSubmit={handleSubmit(onSignInSubmit)}>
        <div className="flex flex-col">
          <label htmlFor="email" className="py-[3%]">
            Email
          </label>
          <input {...register("email")} name="email" className="input_text" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="py-[3%]">
            Password
          </label>
          <input {...register("password")} className="input_text" />
        </div>
        <input type="submit" value="Login" className="button_cta" />
      </form>
      <div className="py-[5%]">
        <p>
          Don't have an account?{" "}
          <span
            className="hover:text-cyan-500 cursor-pointer"
            onClick={handleToggle}
          >
            Sign Up
          </span>
        </p>
      </div>
    </section>
  );
  return (
    <>
      <div className="flex flex-col md:grid grid-cols-2">
        {toggleSignUp ? signUpForm : signInForm}
        <section className="hidden md:block">
          <img
            className=" rounded-xl"
            src="https://source.unsplash.com/j9JoYpaJH3A/900x1000"
            alt="Cover image"
          />
        </section>
      </div>
    </>
  );
};

export default SignUp;
