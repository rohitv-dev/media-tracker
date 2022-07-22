import { Box, Button, Flex, Input, Stack, Text } from "@chakra-ui/react";

function Login() {
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
            Login
          </Text>
          <Input placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button variant="solid" mb="2">
            Login
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}

export default Login;
