"use client";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/react";
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

const PostCard = ({ post }: { post: IPost }) => {
  const { user } = useUser();
  // console.log(user);
  //    console.log(post);
  return (
    <div className="bg-slate-200/10 p-5 mt-5 rounded-lg">
      {/* header */}
      <div className="flex gap-2">
        <Image src={userImg} alt="user" className="size-10 rounded-sm" />
        <div>
          <h1>{post?.user?.name}</h1>
          <p className="text-sm font-thin">{post?.user?.email}</p>
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
      <footer className="mt-4 flex gap-5">
        {user ? (
          <ClaimRequestModal
            id={post?._id}
            questions={post?.questions}
          ></ClaimRequestModal>
        ) : (
         <AuthenticationModal id={post?._id}/>
        )}

        <div className="w-[1px] bg-default-200"></div>
        <Button variant="light" className="flex-1">
          Share
        </Button>
      </footer>
    </div>
  );
};

export default PostCard;
