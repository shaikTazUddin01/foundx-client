import { Input } from "@nextui-org/input";
import React from "react";
import { SearchIcon } from "../../icons";

const Landing = () => {
  return (
    <div>
      <div className="h-[calc(100vh-64px)] w-full bg-[url('/glass.jpg')] bg-cover bg-center">
        <div className="pt-32 max-w-xl flex-1 mx-auto">
          <form action="">
          <Input
            classNames={{
              innerWrapper: "bg-default-100",
              input: "text-sm",
            }}
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
    </div>
  );
};

export default Landing;
