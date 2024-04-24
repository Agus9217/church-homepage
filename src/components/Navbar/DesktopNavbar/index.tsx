import { Button, Flex, ListItem, Menu, MenuButton, MenuItem, MenuList, Stack, Text, UnorderedList } from "@chakra-ui/react"
import { NAV_ITEM } from "../NavItem"
import { IoMdContact } from "react-icons/io"
import { ChevronDownIcon } from "@chakra-ui/icons"

interface Prop {
  displayDimension: string | undefined
}

export const DesktopNavbar = ({ displayDimension }: Prop) => {
  return (
    <Flex
      direction={'row'}
      alignItems={'center'}
      width={'100%'}
      display={displayDimension === 'none' ? 'none' : 'flex'}
    >
      <Flex
        flexGrow={1}
        maxW={'250px'}
        borderWidth={'1px'}
        borderColor={'blue'}
        justifyContent={'center'}
      >
        <Text>
          Iglesia Barrio Nuevo
        </Text>
      </Flex>
      <Flex
        flexGrow={2}
        borderWidth={'1px'}
        borderColor={'gray'}
        justifyContent={{ base: 'flex-end', md: 'center' }}
      >
        <UnorderedList
          listStyleType={'none'}
          display={'flex'}
          gap={'10px'}
          justifyContent={'center'}
        >
          {
            NAV_ITEM.map(({ label }) => (
              <ListItem key={label}>
                {label}
              </ListItem>
            ))
          }
        </UnorderedList>
      </Flex>
      <Flex
        flexGrow={1}
        maxW={'250px'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Button
          variant={'outline'}
          colorScheme={"blue"}
          rightIcon={<IoMdContact fontSize={'20px'} />}
        >
          Sign Up
        </Button>
      </Flex>
      

    </Flex>

  )
}

