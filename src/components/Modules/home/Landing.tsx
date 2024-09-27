"use client";
import { Input } from "@nextui-org/input";
import React from "react";
import { SearchIcon } from "../../icons";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useDebounce from "@/src/hooks/useDebounce";

const Landing = () => {
  const { register, handleSubmit, watch } = useForm();

  console.log(useDebounce(watch("searchItem")));
  // console.log(watch("searchItem"));
  const handleSearch: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div className="h-[calc(100vh-64px)] w-full bg-[url('/glass.jpg')] bg-cover bg-center">
      <div className="pt-32 max-w-xl flex-1 mx-auto">
        <form action="" onSubmit={handleSubmit(handleSearch)}>
          <Input
            classNames={{
              innerWrapper: "bg-default-100",
              input: "text-sm",
            }}
            {...register("searchItem")}
            placeholder="Search..."
            size="lg"
            startContent={
              <SearchIcon className="pointer-events-none flex-shrink-0 text-default" />
            }
            type="text"
          />
        </form>
      </div>
    </div>
  );
};

export default Landing;
