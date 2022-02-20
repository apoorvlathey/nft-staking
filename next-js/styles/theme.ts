import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const colors = {
  custom: {
    base: "#e84142",
  },
  bg: {
    900: "#222",
    100: "white",
  },
};

const fonts = {
  custom: "Poppins",
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("bg.100", "bg.900")(props),
      },
    }),
  },
  config,
  colors,
  fonts,
});

export default theme;
