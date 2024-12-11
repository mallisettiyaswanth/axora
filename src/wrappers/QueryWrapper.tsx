"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {} from "react-query";

type Props = {
  children: React.ReactNode;
};
const queryClient = new QueryClient();

const QueryClientWrapper = async ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryClientWrapper;