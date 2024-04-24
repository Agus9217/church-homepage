import { Flex, Stack, useBreakpointValue } from "@chakra-ui/react"
import { DesktopNavbar } from "./DesktopNavbar"
import { MobileNavbar } from "./MobileNavbar"

export const Navbar = () => {

  const variantDisplay = useBreakpointValue({
    base: 'none',
    md: 'block'
  })

  return (
    <Stack
      as="header"
      borderWidth={'1px'}
      borderColor={'red'}
      minH={'60px'}
      width={'100%'}
    >
      <DesktopNavbar displayDimension={variantDisplay} />
      <MobileNavbar displayDimension={variantDisplay} />
    </Stack>
  )
}

