"use client";

import CreateAutomation from "@/components/global/create-automation";
import { Skeleton } from "@/components/shadcn/skeleton";
import useMutationDataState from "@/hooks/use-mutation-data-state";
import { useQueryAutomations } from "@/react-query/queries";
import React from "react";

type Props = {};

const Page = (_props: Props) => {
  const { data, isLoading } = useQueryAutomations();

  const { latestVariable } = useMutationDataState(["create-automation"]);

  console.log(latestVariable);

  if (isLoading) {
    return (
      <div className="flex gap-5 flex-col">
        {[1, 2, 3].map(() => {
          return <Skeleton className="h-10 w-full" />;
        })}
      </div>
    );
  }

  if (
    data?.status == 200 ||
    (data?.data?.automations && data?.data?.automations?.length === 0)
  ) {
    return (
      <div className="flex justify-center items-center flex-col flex-1 h-[70vh] gap-3">
        <h3 className="text-lg text-gray-400">No automations found</h3>
        <CreateAutomation />
      </div>
    );
  }

  return (
    <div className="flex-1 flex justify-between items-center">
      These are the Automations
    </div>
  );
};

export default Page;
