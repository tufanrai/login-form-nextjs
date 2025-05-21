"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import backgroundImg from "@/img/goGreen.jpg";
import { FaRegCircleUser, FaRegEnvelope } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpData } from "@/interfaces/auth";
import { GoArrowLeft } from "react-icons/go";

const SignUP = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpData),
  });

  const onSubmit = (data: Object) => {
    console.log(data);
  };

  return (
    <div
      className="w-full bg-black text-white h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "fill",
      }}
    >
      <div className="w-100 border-2 border-sky-400 backdrop-blur-[10px] rounded-ss-2xl relative shadow-lg shadow-sky-300 rounded-ee-2xl px-5 py-2">
        <Link href={"/"}>
          <GoArrowLeft className="absolute top-10 left-5 text-2xl" />
        </Link>
        <h1 className="text-center text-xl py-5 font-semibold">Sing Up</h1>
        <div className="my-5 p-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* full name div */}
            <div className="flex flex-col mb-5 relative">
              <FaRegCircleUser className="absolute top-8 left-0" />
              <label className="text-sm font-light">Full name</label>
              <input
                className={`pl-5 pr-2 py-2 text-white focus:outline-0  ${
                  errors.email
                    ? "border-b-1 border-red-400"
                    : "border-b-1 border-sky-400"
                }`}
                placeholder="Jhon doe"
                {...register("full_name")}
                type="text"
              />
              {errors.full_name && (
                <p className="text-xs p-3 text-red-400 font-thin">
                  {errors.full_name.message}
                </p>
              )}
            </div>
            {/* email div */}
            <div className="flex flex-col mb-5 relative">
              <FaRegEnvelope className="absolute top-8 left-0" />
              <label className="text-sm font-light">Email</label>
              <input
                className={`pl-5 pr-2 py-2 text-white focus:outline-0  ${
                  errors.email
                    ? "border-b-1 border-red-400"
                    : "border-b-1 border-sky-400"
                }`}
                placeholder="doejhon@gmail.com"
                {...register("email")}
                type="text"
              />
              {errors.email && (
                <p className="text-xs p-3 text-red-400 font-thin">
                  {errors.email.message}
                </p>
              )}
            </div>
            {/* Password div */}
            <div className="flex flex-col mb-5 relative">
              <IoIosLock className="absolute left-0 top-8" />
              <label className="text-sm font-light">Password</label>
              <input
                className={`pl-5 pr-2 py-2 text-white focus:outline-0  ${
                  errors.email
                    ? "border-b-1 border-red-400"
                    : "border-b-1 border-sky-400"
                }`}
                placeholder="Password"
                {...register("password")}
                type="password"
              />
              {errors.password && (
                <p className="text-xs p-3 text-red-400 font-thin">
                  {errors.password.message}
                </p>
              )}
            </div>
            {/* Confirm passowrd */}
            <div className="flex flex-col mb-5 relative">
              <IoIosLock className="absolute top-8 left-0" />
              <label className="text-sm font-light">Confirm password</label>
              <input
                className={`pl-5 pr-2 py-2 text-white focus:outline-0  ${
                  errors.email
                    ? "border-b-1 border-red-400"
                    : "border-b-1 border-sky-400"
                }`}
                placeholder="Password"
                {...register("Confirm_password")}
                type="password"
              />
              {errors.Confirm_password && (
                <p className="text-xs p-3 text-red-400 font-thin">
                  {errors.Confirm_password.message}
                </p>
              )}
            </div>
            {/* button */}
            <div className="flex flex-col mb-5">
              <button
                className="rounded-md cursor-pointer py-3 text-center text-md font-semibold text-sky-400 border ease duration-200 border-sky-400 hover:bg-sky-500 hover:text-white"
                type="submit"
              >
                Sign up
              </button>
              <p className="mt-5">
                Already have an account?{" "}
                <span>
                  <Link
                    className="text-sky-300 text-sm font-thin underline"
                    href="/auth/login"
                  >
                    Log in
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
