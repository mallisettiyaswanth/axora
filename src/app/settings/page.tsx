"use client";

import { logout } from "@/actions/auth/logout";
import { Button } from "@/components/shadcn/button";
import useUser from "@/hooks/useUser";

import React from "react";
type Props = {};

const Page = (props: Props) => {
  const session = useUser();

  return <div>settings</div>;
};

export default Page;