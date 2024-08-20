"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";

const queryClient = new QueryClient();

export default function ClientLayout({
  children,
  inter,
}: {
  children: ReactNode;
  inter: any;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={inter.className}>{children}</div>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
