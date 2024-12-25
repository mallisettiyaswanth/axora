import { createUserAutomation } from "@/actions/automations";
import useMutationData from "@/hooks/use-mutation-data";

export const useCreateAutomation = () => {
  const { isPending, mutate } = useMutationData(
    () => createUserAutomation(),
    ["create-automation"],
    "user-automations"
  );

  return { isPending, mutate };
};
