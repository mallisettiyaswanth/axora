import { getUserData } from "@/actions/user";
import { QueryClient, QueryFunction } from "@tanstack/react-query";

const prefetch = async (
  client: QueryClient,
  action: QueryFunction,
  key: string
) => {
  return await client.fetchQuery({
    queryKey: [key],
    queryFn: action,
    staleTime: 60000,
  });
};

export const prefetchUserProfile = async (client: QueryClient) => {
  return await prefetch(client, getUserData, "user-profile");
};
