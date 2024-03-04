import { Box, Stack, Text } from "@chakra-ui/react"

export const Navbar = () => {
  return (
    <Stack
      as="header"
      width="100%"
      minH="70%"
      px={{ base: "2", md: "4" }}
      justifyContent="center"
      borderWidth="1px"
      borderColor="cyan"
      py="1"
    >
      <Stack>
        <Box
          maxW={{ base: "140px", md: "300px" }}
        >
          <Text
            as="h1"
            fontWeight="bold"
          >
            Iglesia Cristiana en <Box as="span" color="blueChurch">Barrio Nuevo</Box>
          </Text>
        </Box>
      </Stack>

    </Stack>
  )
}
