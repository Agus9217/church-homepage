import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export const Navbar = () => {
  const display = useBreakpointValue({
    base: "flex",
    md: "none",
  });

  return (
    <Box as="header">
      <Flex
        borderWidth={"2px"}
        borderColor={"teal"}
        minH={"50px"}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={4}
      >
        <Flex>
          <Text>Logo</Text>
        </Flex>
        <DesktopNav display={display} />
        <MobileNav display={display} />
      </Flex>
    </Box>
  );
};
