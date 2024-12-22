"use server";

import { auth } from "@/auth";
import { getUserWithId } from "@/queries/user";

export const getUserData = async () => {
  const userObj = await auth();
  if (!userObj || !userObj?.user) return;
  const { user } = userObj;
  try {
    const userData = await getUserWithId(user?.id ?? "");
    return userData;
  } catch {
    return {
      status: "failed",
    };
  }
};
