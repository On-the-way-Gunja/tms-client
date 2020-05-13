import React from "react";
import {
  theme,
  ThemeProvider,
  CSSReset,
  DefaultTheme,
  Flex,
} from "@chakra-ui/core";

type LayoutProps = {
  children: React.ReactNode;
};

// You can custom theme here. e.g. breakpoints
const customTheme: DefaultTheme = {
  ...theme,
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Flex
        className="contents"
        backgroundColor="#b6b6b6"
        flexDirection="column"
        minHeight="100vh"
      >
        {children}
      </Flex>
    </ThemeProvider>
  );
};

export default Layout;
