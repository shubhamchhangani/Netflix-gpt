import React from 'react'
import Header from './Header'
import { useState } from 'react';

function Login() {
    const [isSignInForm, setIsSignInForm] = useState(true);
    function toggleSignInForm() {
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div className="w-[100vw] h-[100vh]">
      <Header />
      <div className="absolute">
        <img
          className="h-[100vh] w-[120vw]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background image"
        />
      </div>
      <form className="w-[80vw] md:w-3/12 absolute p-12 bg-black mt-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80  mb-4">
        <h1 className="text-3xl font-bold mb-5">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
              {!isSignInForm && <input
                  className="w-full rounded-md bg-gray-700 p-3 mb-3"
                  type="text"
                  placeholder="Full Name"
              />}
        <input
          className="w-full rounded-md bg-gray-700 p-3 mb-3"
          type="text"
          placeholder="Email"
        />
        <input
          className="w-full rounded-md bg-slate-700 p-3 mb-6"
          type="password"
          placeholder="Password"
        />
        <button className="py-3 w-full bg-red-700 text-white rounded-md my-4 font-bold text-2xl">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="mt-3 cursor-pointer">
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
}

export default Login