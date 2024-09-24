'use client'
import { IPost } from "@/src/types";
import {
  Card as NextUiCard,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { format } from "date-fns";

const Card = ({item}:{item:IPost}) => {
    console.log(item);
  return (
    <div>
      <NextUiCard
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex justify-between items-start">
          <p className="text-xl text-white/60 bg-black/60 p-1 rounded-xl uppercase font-bold">{item?.title}</p>
          <h4 className="text-tiny text-white/60 uppercase font-bold bg-black p-1 rounded-xl">{item?.category?.name}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={item?.images[0]}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Date</p>
            <p className="text-black text-tiny">{format(new Date(item?.dateFound),"dd MMMM yyyy")}</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
           Details
          </Button>
        </CardFooter>
      </NextUiCard>
    </div>
  );
};

export default Card;
