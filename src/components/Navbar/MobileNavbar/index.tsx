import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from "@chakra-ui/react"
import { NAV_ITEM } from "../NavItem"

interface Prop {
  displayDimension: string | undefined
}

export const MobileNavbar = ({ displayDimension }: Prop) => {
  return (
    <>
    
    <Stack
      direction={'row'}
      alignItems={'center'}
      width={'90%'}
      display={displayDimension === 'none' ? 'flex' : 'none'}
      justifyContent={'space-between'}
      mx={'auto'}
    >
      <Flex
        borderWidth={'1px'}
        borderColor={'blue'}
      >
        <Text>
          Iglesia Barrio Nuevo mobile
        </Text>
      </Flex>

     
      <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
</Stack>  
          </>    
    
  )
}

