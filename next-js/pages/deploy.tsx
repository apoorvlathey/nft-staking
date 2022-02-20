import { useState, useEffect } from "react";
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
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Contract, ethers } from "ethers";
import { useWeb3 } from "../contexts/Web3Context";

import factoryABI from "../abi/factory.json";
const factoryAddress = "0x0000000000000000000000000000000000000000";

export default function Deploy() {
  const router = useRouter();
  const { provider, signer } = useWeb3();

  const [factoryContract, setFactoryContract] = useState<Contract>();
  const [metadata, setMetadata] = useState({
    bronze: "",
    silver: "",
    gold: "",
  });
  const [maxSupply, setMaxSupply] = useState({
    bronze: 0,
    silver: 0,
    gold: 0,
  });
  const [points, setPoints] = useState({
    bronze: 0,
    silver: 0,
    gold: 0,
  });

  useEffect(() => {
    if (provider) {
      setFactoryContract(
        new ethers.Contract(factoryAddress, factoryABI, provider)
      );
    }
  }, [provider]);

  return (
    <Container minW={{ base: "100%", lg: "5xl" }} mt="10" alignItems="center">
      <Center>
        <Heading color={"custom.base"}>Deploy</Heading>
      </Center>
      <Center
        flexDir={"column"}
        mt="3rem"
        p="2rem"
        border={"1px solid"}
        borderColor="white"
        rounded="lg"
      >
        <FormControl>
          <Box>
            <FormLabel>1. Enter metadata for each NFT tier</FormLabel>
            <HStack>
              <Input
                placeholder="Bronze"
                onChange={(e) =>
                  setMetadata((m) => ({
                    ...m,
                    bronze: e.target.value,
                  }))
                }
              />
              <Input
                placeholder="Silver"
                onChange={(e) =>
                  setMetadata((m) => ({
                    ...m,
                    silver: e.target.value,
                  }))
                }
              />
              <Input
                placeholder="Gold"
                onChange={(e) =>
                  setMetadata((m) => ({
                    ...m,
                    gold: e.target.value,
                  }))
                }
              />
            </HStack>
          </Box>
          <Box mt="1rem">
            <FormLabel>2. Enter Max Supply for each NFT tier</FormLabel>
            <HStack>
              <Input
                placeholder="Bronze"
                type="number"
                onChange={(e) =>
                  setMaxSupply((m) => ({
                    ...m,
                    bronze: Number(e.target.value),
                  }))
                }
              />
              <Input
                placeholder="Silver"
                type="number"
                onChange={(e) =>
                  setMaxSupply((m) => ({
                    ...m,
                    silver: Number(e.target.value),
                  }))
                }
              />
              <Input
                placeholder="Gold"
                type="number"
                onChange={(e) =>
                  setMaxSupply((m) => ({
                    ...m,
                    gold: Number(e.target.value),
                  }))
                }
              />
            </HStack>
          </Box>
          <Box mt="1rem">
            <FormLabel>
              3. Enter Points required to claim each NFT tier (@ 1 point / hr /
              1 ERC20 token staked)
            </FormLabel>
            <HStack>
              <Input
                placeholder="Bronze"
                type="number"
                onChange={(e) =>
                  setPoints((m) => ({
                    ...m,
                    bronze: Number(e.target.value),
                  }))
                }
              />
              <Input
                placeholder="Silver"
                type="number"
                onChange={(e) =>
                  setPoints((m) => ({
                    ...m,
                    silver: Number(e.target.value),
                  }))
                }
              />
              <Input
                placeholder="Gold"
                type="number"
                onChange={(e) =>
                  setPoints((m) => ({
                    ...m,
                    gold: Number(e.target.value),
                  }))
                }
              />
            </HStack>
          </Box>
          <Center mt="2rem">
            <Button
              onClick={async () => {
                await factoryContract!
                  .connect(signer)
                  .deploy(
                    [metadata.bronze, metadata.silver, metadata.gold],
                    [maxSupply.bronze, maxSupply.silver, maxSupply.gold],
                    [points.bronze, points.silver, points.gold]
                  );
              }}
              bg="custom.base"
              color="white"
              size="lg"
            >
              DEPLOY!
            </Button>
          </Center>
        </FormControl>
      </Center>
    </Container>
  );
}
