"use client";
import { Input } from "@nextui-org/input";
import React, { useEffect, useState } from "react";
import { SearchIcon } from "../../icons";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useDebounce from "@/src/hooks/useDebounce";
import { useSearchItem } from "@/src/hooks/useSearchHook";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Landing = () => {
  const { register, handleSubmit, watch } = useForm();
  const {
    mutate: handlesearchItem,
    data: searchData,
    isSuccess,
    isError,
    isPending,
  } = useSearchItem();
  const [searchResult, setSearchResult] = useState<any>([]);

  const searchterm = useDebounce(watch("searchItem"));
const router=useRouter()
  useEffect(() => {
    if (searchterm) {
      handlesearchItem(searchterm);
    }
  }, [searchterm]);

  // console.log(searchData);
  // console.log(watch("searchItem"));
  const handleSearch: SubmitHandler<FieldValues> = (data) => {
    // console.log(data);
    handleSeeAll(data?.searchItem)
  };

const handleSeeAll=(query:string)=>{
  const queryString=query?.trim().split(' ').join("+")

  router?.push(`/found-items?query=${queryString}`)

}


  useEffect(() => {
    if (!searchterm) {
      setSearchResult([]);
    }
    if (!isPending && !isError && isSuccess) {
      setSearchResult(searchData?.hits ?? []);
    }
  }, [isPending, isError, isSuccess]);
  console.log(searchResult);
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

        {searchResult.length>0 && (
          <div className="bg-[#2a2a2a] z-30 p-5 rounded-md">
            {
              searchResult?.map((item: any) => {
                return (
                  <Link href={`/found-items/${item?.id}`}>
                  
                  <div
                    key={item?.id}
                    className="bg-slate-50/10 z-50 flex gap-2 m-2 p-2  items-center"
                  >
                    <div>
                      <Image
                        src={item?.thumbnail}
                        width={10}
                        height={10}
                        className="size-10 object-cover"
                        alt="image"
                      />
                    </div>
                    <div>
                      <h1>{item?.title}</h1>
                      <h1 className="text-sm">{item?.description}</h1>
                    </div>
                  </div>
                  </Link>
                );
              })}
              <Button className="w-full" onClick={()=>handleSeeAll(searchResult)}>See more</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Landing;
