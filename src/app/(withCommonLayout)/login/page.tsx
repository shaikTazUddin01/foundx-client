"use client";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import { Button } from "@nextui-org/button";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Login = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div className="text-center pt-20">
        <h1 className="text-2xl">Login With FoundX</h1>
        <h3>Welcome Back! Let's Get Started</h3>
      <div className="w-[35%] mx-auto  pt-5">
        <FXForm onSubmit={onSubmit}>
          <div className="mb-2">
            <FXInput label="Email" type="email" name="email"></FXInput>
          </div>
          <div className="mb-2">
            <FXInput label="Password" type="password" name="password"></FXInput>
          </div>
          <Button color="default" type="submit" className="w-full" size="lg">
            Login
          </Button>
        </FXForm>
      </div>
    </div>
  );
};

export default Login;
