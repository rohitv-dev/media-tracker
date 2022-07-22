import { Box, Button, Flex, Input, Stack, Text } from "@chakra-ui/react";

function Register() {
  return (
    <Flex
      height="100vh"
      width="100%"
      justifyContent="center"
      alignItems="center"
      background="gray.100"
    >
      <Box
        height="fit-content"
        rounded="lg"
        p="4"
        width="25%"
        boxShadow="md"
        background="white"
      >
        <Stack spacing="4">
          <Text mb="2" fontWeight="bold" fontSize="1.5rem" color="gray.500">
            Register
          </Text>
          <Input placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Repeat Password" />
          <Button variant="solid" mb="2">
            Register
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}

export default Register;
