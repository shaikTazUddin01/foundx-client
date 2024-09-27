'use client'
import ReceivedClaimCard from "@/src/components/UI/ReceivedClaimCard";
import { useReceivedClaimRequist } from "@/src/hooks/useClaimRequest";
import React from "react";

const page = () => {
  const { data } = useReceivedClaimRequist();
  console.log(data);
  return (
    <div>
{
    data?.data?.map((item:any)=><ReceivedClaimCard key={item?._id} post={item}/>)
}
    </div>
  );
};

export default page;
