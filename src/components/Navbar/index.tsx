import { Flex, useBreakpointValue } from "@chakra-ui/react"
import { DesktopNavbar } from "./DesktopNavbar"

export const Navbar = () => {

  const variantDisplay = useBreakpointValue({
    base: 'none',
    md: 'block'
  })

  return (
    <Flex
      as="header"
      borderWidth={'1px'}
      borderColor={'red'}
      minH={'60px'}
      width={'100%'}
    >
      <DesktopNavbar displayDimension={variantDisplay} />
    </Flex>
  )
}

