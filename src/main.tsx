import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
// {
//   defaultOptions: {
//     queries: {
//       retry: 3,
//       cacheTime: 300_000,
//       staleTime: 10 * 1000,
//       refetchOnWindowFocus: false,
//       refetchOnReconnect: true,
//       refetchOnMount: true
//     },
//   },
// }
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
