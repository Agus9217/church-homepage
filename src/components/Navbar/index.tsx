import { Flex } from "@chakra-ui/react"
import { DesktopNavbar } from "./DesktopNavbar"

export const Navbar = () => {
  return (
    <Flex
      as="header"
      borderWidth={'1px'}
      borderColor={'red'}
      minH={'60px'}
      width={'100%'}
    >
      <DesktopNavbar />
    </Flex>
  )
}

