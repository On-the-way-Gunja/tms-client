import React from "react";
import { Box, Flex } from "@chakra-ui/core";

export type ApiFormTemplateProps = {
  children: React.ReactNode;
};

export const ApiFormTemplate = ({ children }: ApiFormTemplateProps) => {
  return (
    <Box
      width="512px"
      marginLeft="auto"
      marginRight="auto"
      marginTop="6rem"
      marginBottom="6rem"
      borderRadius="5px"
      overflow="hidden"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        background="#258c91"
        color="white"
        height="4rem"
        fontSize="1.5rem"
      >
        API Form
      </Flex>
      <Box backgroundColor="white">{children}</Box>
    </Box>
  );
};
