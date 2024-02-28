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
        minH={"50px"}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={4}
      >
        <Flex>
          <Text as={"h1"} pr={1} fontSize={"xl"} fontWeight={"black"}>
            Iglesia Cristiana en <Box as={"span"} color={'blueChurch'} >Barrio Nuevo</Box>
          </Text>
        </Flex>
        <DesktopNav display={display} />
        <MobileNav display={display} />
      </Flex>
    </Box>
  );
};
