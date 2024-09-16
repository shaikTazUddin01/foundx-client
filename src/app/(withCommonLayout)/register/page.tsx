"use client";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import loginvalidation from "@/src/validation/LoginValidation";
import { Button } from "@nextui-org/button";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { registerUser } from "@/src/services/AuthService";

const Register = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userData = {
      ...data,
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    };
    console.log("inside form", userData);
    registerUser(userData);
  };
  return (
    <div className=" mt-20 bg-white/10 w-[35%] mx-auto p-5 rounded-lg">
      <div className="text-center ">
        <h1 className="text-2xl">Register With FoundX</h1>
        <h3>Welcome Back! Let's Get Started</h3>
      </div>
      <div className="pt-5">
        <FXForm
          onSubmit={onSubmit}
          defaultValues={{
            name: "taz uddin",
            email: "taz@gmail.com",
            password: "123456",
            mobileNumber: "1234567890",
          }}
        >
          <div className="mb-2">
            <FXInput label="Name" name="name" required={true}></FXInput>
          </div>
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
              label="Number"
              name="mobileNumber"
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
            Registation
          </Button>
          <h1 className="text-center pt-1">
            Already have an account .!{" "}
            <Link href={"/login"} className="text-blue-500 hover:text-blue-700">
              Login
            </Link>
          </h1>
        </FXForm>
      </div>
    </div>
  );
};

export default Register;
