import {
  Button,
  HStack,
  VStack,
  Heading,
  Flex,
  Container,
  Stack,
  Box,
  Center,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <Container minW={{ base: "100%", lg: "5xl" }} mt="10" alignItems="center">
      <Center>
        <Heading color={"custom.base"}>NFT Staking</Heading>
      </Center>
      <Stack
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "stretch" }}
        mt={"5rem"}
        mx={4}
        spacing={5}
        justifyContent="space-between"
      >
        <Box
          flex={1}
          maxW="34rem"
          border="2px"
          borderColor="white"
          rounded="1rem"
        >
          <Center py={10} px={6}>
            <VStack spacing={8}>
              <Heading>For Protocols</Heading>
              <Button
                onClick={() => router.push("/deploy")}
                bg="custom.base"
                color="white"
                size="lg"
              >
                DEPLOY your own NFT Staking
              </Button>
            </VStack>
          </Center>
        </Box>
        <Box
          flex={1}
          maxW="34rem"
          border="2px"
          borderColor="white"
          rounded="1rem"
        >
          <Center pt={10} px={6}>
            <VStack spacing={8}>
              <Heading>For End Users</Heading>
              <Button
                onClick={() => router.push("/farm")}
                bg="custom.base"
                color="white"
                size="lg"
              >
                STAKE tokens and farm NFTs
              </Button>
            </VStack>
          </Center>
        </Box>
      </Stack>
    </Container>
  );
}
