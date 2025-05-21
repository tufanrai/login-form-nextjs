"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import backgroundImg from "@/img/goGreen.jpg";
import { useForm, SubmitHandler } from "react-hook-form";
import { ILogin } from "@/interfaces/auth";
import { CiLock, CiMail } from "react-icons/ci";
import { GoArrowLeft } from "react-icons/go";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submit: SubmitHandler<ILogin> = (data) => console.log(data);

  return (
    // body div
    <div
      className="w-full h-screen flex items-center justify-center p-5"
      style={{
        backgroundImage: `url(${backgroundImg.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* wrapper div */}
      <div className="w-100 box backdrop-blur-[5px] border border-white h-auto p-5 rounded-ss-xl relative rounded-ee-xl">
        <Link href={"/"}>
          <GoArrowLeft className="absolute top-10 text-white left-5 text-2xl" />
        </Link>
        {/* login header */}
        <h1 className="text-center text-white text-2xl font-black p-2 mb-3">
          Log in
        </h1>
        <div className="p-2 flex flex-col">
          <form onSubmit={handleSubmit(submit)}>
            {/* email div */}
            <div className="flex flex-col relative">
              <CiMail className="text-white absolute top-1 left-11" />
              <label className="text-base  text-white font-light">Email</label>
              <input
                className={`text-sm text-white border-b-1 focus:outline-0 border-sky-300 px-3 py-2 ${
                  errors.email ? "focus:outline-1 focus:outline-red-400" : ""
                }`}
                type="text"
                {...register("email", { required: "Enter valid email" })}
                placeholder="demomail@gmail.com*"
              />
              {errors.email && (
                <p className="text-red-400 text-xs p-1 font-thin">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* password div */}
            <div className="flex flex-col mt-9 relative">
              <CiLock className="text-white absolute top-1 left-18" />
              <label className="text-base text-white font-light">
                Password
              </label>
              <input
                className={`text-sm text-white border-b-1 
                  focus:outline-0 border-sky-300 px-3 py-2 
                  ${
                    errors.password
                      ? "focus:outline-1 focus:outline-red-400"
                      : ""
                  }`}
                placeholder="password"
                {...register("password", {
                  required: "Enter valid password",
                  minLength: 6,
                })}
                type="password"
              />
              {errors.password && (
                <p className="text-red-400 text-xs p-1 font-thin">
                  {errors.password.message
                    ? errors.password.message
                    : "your password must be of at least 6 characters"}
                </p>
              )}
            </div>

            {/* button div */}
            <div>
              <button
                type="submit"
                className={`border-1 w-full text-center py-3
                   border-sky-400 rounded-lg font-thin mt-11
                    text-sky-400 cursor-pointer ease duration-200 
                    hover:bg-sky-300 hover:text-white`}
              >
                Log in
              </button>
            </div>

            {/* sing up div */}
            <div className="mt-5">
              <p className="text-center text-white">
                Don't have an account?{" "}
                <Link
                  className="text-sky-300 underline font-light cursor-pointer"
                  href="/auth/signin"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
