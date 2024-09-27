"use client";
import { useUser } from "@/src/context/user.provider";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import Link from "next/link";
import SidebarOptions from "./SidebarOptions";
import { adminLinks, userLinks } from "./constants";
import userImage from "@/src/assets/download.png";

const Sidebar = () => {
  const { user, isLoading } = useUser();
  // console.log(user);
  if (isLoading) {
    return <p>loading..</p>;
  }
  return (
    <div className="">
      <div className="bg-slate-200/20 p-5 rounded-xl text-center">
        <div className="h-[200px]">
          <Image src="https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg" height={200}  width={200} alt="user image" />
        </div>
        <p className="text-xl font-medium">{user?.name}</p>
        <p>email:{user?.email}</p>
        <Link href={"/profile/create-post"}>
          <Button className="w-full">create a post</Button>
        </Link>
      </div>
      <div className="mt-5">
        <SidebarOptions
          Links={user?.role == "USER" ? userLinks : adminLinks}
        ></SidebarOptions>
      </div>
    </div>
  );
};

export default Sidebar;
