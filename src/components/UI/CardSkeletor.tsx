"use client";

import {
  Card as NextUiCard,
  CardHeader,
  CardFooter,
  Image,
  Button,
  Skeleton,
} from "@nextui-org/react";

const CardSkeletor = () => {
  return (
    <div>
      <NextUiCard
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
      
        <Skeleton>
          <div className="h-60 rounded-lg bg-default-300"></div>
        </Skeleton>
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <Skeleton className="my-2 rounded-md w-2/3">
              <div className="h-5 rounded-sm "></div>
            </Skeleton>
            <Skeleton className="my-2 rounded-md w-32">
            <div className="h-5 rounded-sm "></div>
            </Skeleton>
          </div>
          <Skeleton className=" rounded-full w-28">
            <Button
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              Details
            </Button>
          </Skeleton>
        </CardFooter>
      </NextUiCard>
    </div>
  );
};

export default CardSkeletor;
