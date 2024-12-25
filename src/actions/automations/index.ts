"use server";

import { createAutomation, getAutomations } from "@/queries/automations";
import { getUser } from "@/actions/lib";

export const getUserAutomations = async () => {
  const user = await getUser();
  try {
    const userAutomations = await getAutomations(user?.id ?? "");
    return {
      status: 200,
      data: userAutomations,
    };
  } catch {
    return {
      status: "failed",
      data: {
        automations: [],
      },
    };
  }
};

export const createUserAutomation = async () => {
  const user = await getUser();
  try {
    const automation = await createAutomation(user?.id ?? "");
    return {
      status: 201,
      data: "Automation created",
    };
  } catch {
    return {
      status: 404,
      data: "Automation not created!",
    };
  }
};
