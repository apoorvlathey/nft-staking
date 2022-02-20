import { Button, Box, Text, HStack, useColorModeValue } from "@chakra-ui/react";
import Identicon from "./Identicon";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";
import { setProvider, setSignerAddress } from "../types";

import { useWeb3 } from "../contexts/Web3Context";
import { useEffect, useState } from "react";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: process.env.REACT_APP_INFURA_ID, // required
    },
  },
};

const ConnectWallet = () => {
  const {
    provider,
    signer,
    signerAddress,
    setProvider,
    setSigner,
    setSignerAddress,
  } = useWeb3();

  const [web3Modal, setWeb3Modal] = useState<Web3Modal>();

  useEffect(() => {
    setWeb3Modal(
      new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: false, // optional
        providerOptions, // required
      })
    );
  }, []);

  useEffect(() => {
    if (provider) {
      setSigner(provider.getSigner(0));
    }
  }, [provider]);

  // Get signer address
  useEffect(() => {
    const getSignerAddress = async () => {
      if (signer) {
        setSignerAddress(await signer.getAddress());
      }
    };

    getSignerAddress();
  }, [signer]);

  const connectWallet = async () => {
    const _provider = new ethers.providers.Web3Provider(
      await web3Modal.connect()
    );

    setProvider(_provider);
  };

  const addrBgColor = useColorModeValue("bg.100", "bg.900");
  const addrBorderColor = useColorModeValue("bg.900", "bg.100");
  const addrFontColor = useColorModeValue("bg.900", "bg.100");

  return !signerAddress ? (
    <Button onClick={() => connectWallet()} bg="custom.base" color="white">
      Connect Wallet
    </Button>
  ) : (
    <Box display="flex" alignItems="center" borderRadius="xl" py="0">
      <HStack
        bg={addrBgColor}
        border="1px solid"
        borderColor={addrBorderColor}
        borderRadius="xl"
        m="1px"
        px={3}
        h="38px"
      >
        <Text color={addrFontColor} fontSize="md" fontWeight="medium" mr="2">
          {signerAddress &&
            `${signerAddress.slice(0, 6)}...${signerAddress.slice(
              signerAddress.length - 4,
              signerAddress.length
            )}`}
        </Text>
        <Identicon signerAddress={signerAddress} />
      </HStack>
    </Box>
  );
};

export default ConnectWallet;
