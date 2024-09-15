"use client";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavbarDropdown = () => {
  const router = useRouter();

  const handleRouterChange = (path: string) => {
    router.push(path);
  };
  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Avatar name="JOE" className="cursor-pointer"></Avatar>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem
            onClick={() => {
              handleRouterChange("/profile");
            }}
          >
            Profile
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              handleRouterChange("/profile/create-post");
            }}
          >
            Create Post
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              handleRouterChange("/profile/claim-request");
            }}
          >
           Claim Request
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              handleRouterChange("/profile/settings");
            }}
          >
           Setting
          </DropdownItem>

          
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default NavbarDropdown;
