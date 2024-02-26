import { Box, ListItem, UnorderedList, Text } from "@chakra-ui/react"
import { CustomLink } from "../CustomLink"

export const Navbar = () => {
  return (
    <Box
      as='header'
      display='flex'
      alignItems={'center'}
      w={'100%'}
      pos={'fixed'}
      backdropFilter={'blur(8px)'}
      zIndex={100}
      justifyContent={{ base: "center", md: "space-between" }}
      px={{ base: '0px', md: '20px' }}
      minH={'40px'}
    >
      <Text
        as={'h1'}
      >
        Iglesia Cristiana de Barrio Nuevo
      </Text>
      <Box
        as="nav"
      >
        <UnorderedList
          listStyleType='none'
          display={{ base: 'none', md: 'flex' }}
          gap={'10px'}
        >
          <ListItem>
            <CustomLink
              to="/"
            >
              Home
            </CustomLink>
          </ListItem>
          <ListItem>
            <CustomLink
              to="/nosotros"
            >
              Nosotros
            </CustomLink>
          </ListItem>
          <ListItem>
            <CustomLink
              to="/ministerios"
            >
              Ministerios
            </CustomLink>
          </ListItem>
          <ListItem>
            <CustomLink
              to="/contacto"
            >
              Contacto
            </CustomLink>
          </ListItem>
        </UnorderedList>
      </Box>
    </Box >
  )
}
