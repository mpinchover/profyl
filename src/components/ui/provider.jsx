"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";
import { createSystem, defaultConfig } from "@chakra-ui/react";

const system = createSystem(defaultConfig, {
  globalCss: {
    "html, body": {
      // The app is designed against the dark gray surfaces, so keep the page
      // background and base text colour in one place instead of per page.
      bgColor: "gray.800",
      color: "gray.300",
    },
    body: {
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      textRendering: "optimizeLegibility",
    },
    "::selection": {
      bgColor: "gray.600",
      color: "white",
    },
    "*:focus-visible": {
      outline: "2px solid",
      outlineColor: "gray.500",
      outlineOffset: "2px",
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: "var(--font-montserrat)" },
        body: { value: "var(--font-montserrat)" },
      },
    },
  },
});

export function Provider(props) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider
        defaultTheme="dark"
        enableSystem={false}
        {...props}
      />
    </ChakraProvider>
  );
}
