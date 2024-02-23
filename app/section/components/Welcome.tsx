"use client";
import { Avatar, Box, DropdownMenu,Text } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Welcome = () => {
  const { status, data: session } = useSession();

  return (
    <div>
      <div className="absolute -top-4 font-semibold text-4xl text-[#333335]">
        Hi, Michael Lewis ✌️
      </div>
      <div className="absolute -top-0 font-semibold text-xl mt-6 text-[#73747c]">
        Welcome back{" "}
      </div>
      <Box className="absolute -right-[12rem] -top-[3rem]">
        {status === "authenticated" && (
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Avatar src={session.user!.image!} fallback="?" 
              size="4" 
              radius="full"  
              className="cursor-pointer opacity-100 hover:opacity-70 ease-in-out"
              />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Label>
                <Text size="2">
                  {session.user!.email}
                  </Text>
              </DropdownMenu.Label>
              <DropdownMenu.Item className="">
                <Link href="/api/auth/signout"> Log Out </Link>
              </DropdownMenu.Item>
              </DropdownMenu.Content>
          </DropdownMenu.Root>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin" className="text-[#56647b]">
            Log In{" "}
          </Link>
        )}
      </Box>
    </div>
  );
};

export default Welcome;
