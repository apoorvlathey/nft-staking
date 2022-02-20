import { useColorModeValue, Flex, Heading, Box, Link } from "@chakra-ui/react";
import ConnectWallet from "./ConnectWallet";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  return (
    <Flex
      py="4"
      px={["2", "4", "10", "10"]}
      borderBottom="2px"
      borderBottomColor={useColorModeValue("gray.500", "gray.400")}
    >
      <Heading
        maxW={["302px", "4xl", "4xl", "4xl"]}
        my="auto"
        fontSize="xl"
        color="custom.base"
        fontFamily="Poppins"
        fontWeight="600"
      >
        <Link onClick={() => router.push("/")}>nft-staking</Link>
      </Heading>
      <Flex flex="1" justifyContent="flex-end">
        <Box mr="1rem">
          <ConnectWallet />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Navbar;
