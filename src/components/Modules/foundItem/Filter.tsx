"use client";
import { useGetCategory } from "@/src/hooks/useCategory";
import { ICategory } from "@/src/types";
import { Button } from "@nextui-org/button";
import { useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const { data: categoriesData } = useGetCategory();
  const router = useRouter();
  const searchParams = useSearchParams();
//   console.log(searchParams.toString());
  //   console.log(categoriesData);
  const handleCategoryParams = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const [key, value] = category.split("=");
    console.log(key,value);
    params.set(key, value);
    router.push(`/found-items?${params.toString()}`);
  };
  return (
    <div className="flex justify-end gap-2">
      {categoriesData?.data?.map((category: ICategory) => (
        <Button size="sm" onClick={() => handleCategoryParams(`category=${category?.name}`)}>
          {category?.name}
        </Button>
      ))}
    </div>
  );
};

export default Filter;
