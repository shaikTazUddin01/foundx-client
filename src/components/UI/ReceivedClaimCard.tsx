"use client";
// import { Button } from "@nextui-org/Button";
import { Button, Divider } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import userImg from "@/src/assets/download.png";
import { IPost } from "@/src/types";
import ImageGallery from "./Post/ImageGallery";
import ClaimRequestModal from "../modals/ClaimRequestModal";
import { useUser } from "@/src/context/user.provider";
import AuthenticationModal from "../modals/AuthenticationModal";
import Link from "next/link";
import { IoEyeOutline } from "react-icons/io5";


const ReceivedClaimCard = ({ post }: { post: any }) => {
  const { user } = useUser();
  // console.log(post);
  // console.log(post?.claimRequests[0]?.claimant?.name);
  // console.log(user);
  //    console.log(post);
  return (
    <div className="bg-slate-200/10 p-5 mt-5 rounded-lg">
      {/* header */}
      <div className="flex gap-2">
        <Image src={userImg} alt="user" className="size-10 rounded-sm" />
        <div>
          <h1>{user?.name}</h1>
          <p className="text-sm font-thin">{user?.email}</p>
        </div>
      </div>
      <Divider className="my-3"></Divider>
      {/* body */}
      <div className="flex justify-between items-start">
        <div>
          <Link href={`/found-items/${post?._id}`}>
            <h1 className="text-xl">{post?.title}</h1>
          </Link>
          <p className="text-sm flex gap-1 items-center">
            Found on : <CiCalendar /> 15 sept, 2024
          </p>
          <p className="mt-5">{post?.description}</p>
        </div>
        <div className="flex items-center gap-1">
          <CiLocationOn />
          <span>
            {post?.location} , {post?.city}
          </span>
        </div>
      </div>
      <ImageGallery images={post?.images} />
      <Divider className="my-3"></Divider>
      <footer className="mt-4 flex gap-2">
        {
          post?.claimRequests?.map((request:any)=>{
            console.log(request);
            return(
              <div className="flex gap-5 items-center w-full" key={request?._id}>
              <Image src={userImg} className="size-10 rounded-md" alt="user"></Image>
              <div className="bg-slate-50/10 rounded-lg w-full p-2 flex justify-between items-center">
                <div className="">
                  <h1 className="capitalize">{request?.claimant?.name}</h1>
                  <h1 className="text-sm capitalize">{request?.description}</h1>
                </div>
                <div>
                  <Button className="text-2xl">
                  <IoEyeOutline />
                  </Button>
                </div>
              </div>
            </div>
    
            )
          })
        }
              </footer>
    </div>
  );
};

export default ReceivedClaimCard;
