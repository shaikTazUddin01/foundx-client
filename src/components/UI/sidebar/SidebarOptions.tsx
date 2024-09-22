import { useUser } from "@/src/context/user.provider";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";

interface LinkItem {
  href: string;
  label: string;
}

const SidebarOptions = ({ Links }: { Links: LinkItem[] }) => {
    
  return (
    <div className="flex flex-col bg-slate-300/20 rounded-xl gap-1 p-5">
      {Links?.map((link,idx) => (
        <Link key={idx} href={link?.href}>
          <Button className="w-full">{link?.label}</Button>
        </Link>
      ))}
    </div>
  );
};

export default SidebarOptions;
