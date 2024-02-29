"use client";

import { Skeleton } from "@/app/components";
import Link from "next/link";

import React from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

import { useSession } from "next-auth/react";

import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
  TextField,
} from "@radix-ui/themes";

const NavBar = () => {
  
  return (
    <div>
    <nav className=" mb-5 px-5 py-3 shadow-sm ">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">
              <div className="flex-1 ">
                <TextField.Root >
                  <TextField.Slot>
                    <MagnifyingGlassIcon height="16" width="16" />
                  </TextField.Slot>
                  <TextField.Input radius="large" placeholder="Search For Tickets…" width={"full"}/>
                </TextField.Root>
              </div>
            </Link>
          </Flex>
          <div className="relative -right-[20rem]">
          <AuthStatus/>
          </div>
        </Flex>
      </Container>
    </nav>
  </div>
  );
};


const AuthStatus = () => {
  const { status, data: session } = useSession();

  if (status === "loading") return <Skeleton width="3rem" />;

  if (status === "unauthenticated")
    return (
      <Link className="nav-link" href="/api/auth/signin">
        Login
      </Link>
    );

  return (
    <Box>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Avatar
            src={session!.user!.image!}
            fallback="?"
            size="2"
            radius="full"
            className="cursor-pointer"
            referrerPolicy="no-referrer"
          />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>
            <Text size="2">{session!.user!.email}</Text>
          </DropdownMenu.Label>
          <DropdownMenu.Item>
            <Link href="/api/auth/signout">Log out</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box>
  );
};

export default NavBar;
