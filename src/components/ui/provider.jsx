"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { ColorModeProvider } from "./color-mode";

export function Provider(props) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider />
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
