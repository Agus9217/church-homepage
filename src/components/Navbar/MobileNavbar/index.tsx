import { HamburgerIcon } from "@chakra-ui/icons"
import { IconButton, Menu, MenuButton } from "@chakra-ui/react"

export const MobileNavbar = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<HamburgerIcon />}

      >
      </MenuButton>
    </Menu>
  )
}

