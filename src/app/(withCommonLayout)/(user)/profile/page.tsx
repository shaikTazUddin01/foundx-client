"use client";
import Card from "@/src/components/UI/Card";
import { useMyClaimRequist } from "@/src/hooks/useClaimRequest";
// import { Card } from '@nextui-org/card';
import React from "react";

const Profile = () => {
  const { data } = useMyClaimRequist();
  console.log(data?.data[0]?.item);
  return (
    <div className="grid grid-cols-2 gap-5 ">
      {data?.data?.map((item: any) => <Card item={item?.item} />)}
    </div>
  );
};

export default Profile;
