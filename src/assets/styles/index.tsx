import "@fontsource-variable/inter";
import { extendTheme } from "@chakra-ui/react";

export const themeApp = extendTheme({
  colors: {
    yellowChurch: "#ead743",
    blueChurch: "#0072bb",
    blackChurch: "#0d1925",
    greenChurch: "#6c7d47",
    redChurch: "#f05d5e",
  },

  styles: {
    global: {
      body: {
        color: "blackChurch",
      },
    },
  },

  fonts: {
    body: `'Inter Variable', sans-serif`,
  },
});
