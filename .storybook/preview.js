import React from "react";
import { addParameters } from "@storybook/react";
import { ThemeProvider, theme, CSSReset, Box } from "@chakra-ui/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Box m="4">
        <Story/>
      </Box>
    </ThemeProvider>
  )
]

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  }
})