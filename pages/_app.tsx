"use client";

import '../styles/global.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function MyApp({ Component, pageProps }) {
  // Create Query Client on the client only
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
