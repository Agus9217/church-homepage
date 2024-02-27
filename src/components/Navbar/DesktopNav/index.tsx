import { Box, ListItem, Stack, UnorderedList } from "@chakra-ui/react";
import { NAV_ITEM } from "../NavItem";
import { DesktopAndMobileMenu } from "../interface";

export const DesktopNav = ({ display }: DesktopAndMobileMenu) => {
  return (
    <Stack as={"nav"}>
      <UnorderedList
        styleType={"none"}
        display={display === "none" ? "flex" : "none"}
        gap={10}
      >
        {NAV_ITEM.map((item) => (
          <ListItem key={item.label}>
            <Box as="a">{item.label}</Box>
          </ListItem>
        ))}
      </UnorderedList>
    </Stack>
  );
};
