import { Container, Stack, Box, Center, Heading } from "@chakra-ui/react";
import { useWeb3 } from "../contexts/Web3Context";
import Navbar from "./Navbar";

function Layout({ children }: any) {
  const { signerAddress } = useWeb3();

  return (
    <>
      <Navbar />
      <Box minH="30rem" pb="3rem">
        {!signerAddress ? (
          <Center pt="12rem">
            <Heading fontFamily="Poppins">
              Connect your wallet to continue.
            </Heading>
          </Center>
        ) : (
          <Container pt="2rem" maxW="60rem">
            {children}
          </Container>
        )}
      </Box>
    </>
  );
}

export default Layout;
