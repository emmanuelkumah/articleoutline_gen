import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="grid grid-cols-2">
        <section className="p-[10%]">
          <h2 className="heading_gradient">Hi There! </h2>
          <p className="text-xl py-7">
            Begin here, and let's empower your creative writings 😀
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <label htmlFor="name" className="py-[3%]">
                Full Name
              </label>
              <input {...register("name")} name="name" className="input_text" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="py-[3%]">
                Email
              </label>
              <input
                {...register("email")}
                name="email"
                className="input_text"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="py-[3%]">
                Password
              </label>
              <input {...register("password")} className="input_text" />
            </div>
            <input
              type="submit"
              value="Create Account"
              className="button_cta"
            />
          </form>
          <div className="grid place-items-center">
            <button className="p-4 mx-auto mt-8 border border-green-200 rounded-full">
              <div className="flex justify-center gap-4">
                <FcGoogle />
                <span>Sign In With Google</span>
              </div>
            </button>
            <div className="py-4">
              <p>
                Already have an account? <span>Sign In</span>
              </p>
            </div>
          </div>
        </section>
        <section>
          <img
            className=" rounded-xl"
            src="https://source.unsplash.com/j9JoYpaJH3A/900x900"
            alt="Cover image"
          />
        </section>
      </div>
    </>
  );
};

export default SignUp;
