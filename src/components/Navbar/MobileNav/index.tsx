import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { NAV_ITEM } from "../NavItem";
import { DesktopAndMobileMenu } from "../interface";

export const MobileNav = ({ display }: DesktopAndMobileMenu) => {
  return (
    <Box display={display}>
      <Menu>
        <MenuButton variant={"ghost"} as={IconButton} icon={<HamburgerIcon />}>
          <HamburgerIcon />
        </MenuButton>
        <MenuList>
          {NAV_ITEM.map((item) => (
            <MenuItem key={item.label}>{item.label}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};
