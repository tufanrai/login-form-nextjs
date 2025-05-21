"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CiMail, CiUser, CiLock } from "react-icons/ci";

const Signin = () => {
  const [Data, setData] = useState({});

  const updatetForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
    setData({ ...Data, [e.target.name]: e.target.value });
    console.log(Data);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center p-10">
      <div className="w-100 border-2 rounded-lg border-sky-400 px-10 py-5">
        {/* title */}
        <h1 className="text-center text-slate-700 font-black text-2xl">
          Sign in
        </h1>
        <div className="flex flex-col-reverse my-10 gap-4">
          {/* fullname */}

          <input
            onChange={updatetForm}
            className="w-full px-5 py-2 font-medium border-b-1 text-sm text-start focus:outline-1 outline-none "
            type="text"
            placeholder="David Jhonson"
            name="Name"
            id="Name"
          />
          <label className="text-sm flex font-medium items" htmlFor="">
            <CiUser />
            Full name
          </label>
        </div>
        <div className="flex flex-col-reverse my-10 gap-4">
          {/* email */}
          <input
            onChange={updatetForm}
            className="w-full px-5 py-2 text-base font-medium border-b-1 text-start focus:outline-1 outline-none "
            type="email"
            placeholder="demomail@gmail.com"
            name="email"
            id="email"
          />
          <label className="w-full text-sm flex items-center " htmlFor="">
            <CiMail className="text-lg" /> Email
          </label>
        </div>
        {/* password */}
        <div className="flex flex-col-reverse my-10 gap-4">
          <input
            onChange={updatetForm}
            className="w-full px-5 py-2 text-base font-medium border-b-1 text-start focus:outline-1 outline-none "
            type="password"
            placeholder="password"
            name="password"
            id="password"
          />
          <label className="text-sm flex items-center" htmlFor="">
            <CiLock />
            Password
          </label>
        </div>
        {/* confirm password */}
        <div className="flex flex-col-reverse my-10 gap-4">
          <input
            onChange={updatetForm}
            className="w-full px-5 py-2 text-base font-medium border-b-1 text-start focus:outline-1 outline-none "
            type="password"
            placeholder="Confirm password"
            name="Confirm_password"
            id="Confirm-password"
          />
          <label className="text-sm flex items-center" htmlFor="">
            <CiLock />
            Confirm password
          </label>
        </div>
        {/* Button */}
        <div className="w-full">
          <input
            className="text-neutral-50 bg-sky-400 w-full px-20 py-3 font-bold cursor-pointer hover:bg-sky-500 duration-200 ease rounded-sm"
            type="submit"
            value="Sign in"
          />
        </div>
        {/* don't have password */}
        <p className="my-5 text-center">
          Already have an account?{" "}
          <span>
            <Link href="/auth/login" className="underline text-sky-400">
              Log in
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
