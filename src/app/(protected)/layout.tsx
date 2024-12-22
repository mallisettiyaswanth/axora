import AppLayout from "@/components/Layout/AppLayout";
import { prefetchUserProfile } from "@/react-query/prefetch";
import { QueryClient } from "@tanstack/react-query";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = new QueryClient();
  const data = await prefetchUserProfile(client);
  console.log(data);
  return <AppLayout>{children}</AppLayout>;
}
