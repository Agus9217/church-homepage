import { Box, ListItem, Stack, UnorderedList } from "@chakra-ui/react";
import { NAV_ITEM } from "../NavItem";
import { DesktopAndMobileMenu } from "../interface";
import { NavLink, useLocation } from "react-router-dom";

export const DesktopNav = ({ display }: DesktopAndMobileMenu) => {
  const active = useLocation();

  return (
    <Stack as={"nav"}>
      <UnorderedList
        styleType={"none"}
        display={display === "none" ? "flex" : "none"}
        gap={3}
      >
        {NAV_ITEM.map((item) => (
          <ListItem key={item.label}>
            <Box
              as={NavLink}
              to={item.to}
              fontWeight={active.pathname === item.to ? "bold" : undefined}
              p={2}
              _hover={
                active.pathname === item.to
                  ? { bg: "redChurch", color: "blackChurch" }
                  : { bg: "blueChurch", color: "white" }
              }
              borderRadius={4}
            >
              {item.label}
            </Box>
          </ListItem>
        ))}
      </UnorderedList>
    </Stack>
  );
};
