"use client";
import { useUser } from "@/src/context/user.provider";
import { logout } from "@/src/services/AuthService";
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
  const {setIsLoading}=useUser()

  const handleRouterChange = (path: string) => {
    router.push(path);
  };
  const handleLogout=()=>{
    logout()
setIsLoading(true)
  }
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
          <DropdownItem
            key="delete"
            color="danger"
            className="text-danger"
            onClick={() => handleLogout()}
          >
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default NavbarDropdown;
