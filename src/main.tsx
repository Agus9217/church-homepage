import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routerApp } from "./router";
import { themeApp } from "./assets/styles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={themeApp}>
      <RouterProvider router={routerApp} />
    </ChakraProvider>
  </React.StrictMode>,
);
