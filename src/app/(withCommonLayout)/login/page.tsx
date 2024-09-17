"use client";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import loginvalidation from "@/src/validation/LoginValidation";
import { Button } from "@nextui-org/button";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useAuthLogin } from "@/src/hooks/useAuthRegister";

import Loading from "@/src/components/UI/Loading";

const Login = () => {
  const { mutate: loginUser, isPending } = useAuthLogin();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    loginUser(data);
  };
  return (
    <>
      {
        isPending && <Loading/>
      }
      <div className=" mt-20 bg-white/10 w-[35%] mx-auto p-5 rounded-lg">
        <div className="text-center ">
          <h1 className="text-2xl">Login With FoundX</h1>
          <h3>Welcome Back! Let's Get Started</h3>
        </div>
        <div className="  pt-5">
          <FXForm onSubmit={onSubmit} resolver={zodResolver(loginvalidation)}>
            <div className="mb-2">
              <FXInput
                label="Email"
                type="email"
                name="email"
                required={true}
              ></FXInput>
            </div>
            <div className="mb-2">
              <FXInput
                label="Password"
                type="password"
                required={true}
                name="password"
              ></FXInput>
            </div>
            <Button
              type="submit"
              className="w-full bg-white text-black"
              size="lg"
              variant="bordered"
            >
              Login
            </Button>
            <h1 className="text-center pt-1">
              Don't have an account .!{" "}
              <Link
                href={"/register"}
                className="text-blue-500 hover:text-blue-700"
              >
                Registation
              </Link>
            </h1>
          </FXForm>
        </div>
      </div>
    </>
  );
};

export default Login;
