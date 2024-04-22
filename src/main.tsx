import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@gravity-ui/uikit/styles/fonts.css";
import "@gravity-ui/uikit/styles/styles.css";
import {
  ThemeProvider,
  ToasterComponent,
  ToasterProvider,
} from "@gravity-ui/uikit";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000,
    },
    mutations: {
      networkMode: "always",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme="light">
        <Provider store={store}>
          <ToasterProvider>
            <App />
            <ToasterComponent />
          </ToasterProvider>
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
