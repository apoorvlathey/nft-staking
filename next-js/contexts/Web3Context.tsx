import { createContext, useContext, useState } from "react";
import { Signer, Web3Provider as Web3ProviderAlias } from "../types";

type Web3ContextType = {
  provider: Web3ProviderAlias | undefined;
  signer: Signer | undefined;
  signerAddress: string;
  setProvider: Function;
  setSigner: Function;
  setSignerAddress: Function;
};

export const Web3Context = createContext<Web3ContextType>({
  provider: undefined,
  signer: undefined,
  signerAddress: "",
  setProvider: () => {},
  setSigner: () => {},
  setSignerAddress: () => {},
});

export const Web3Provider: React.FunctionComponent = ({ children }) => {
  const [provider, setProvider] = useState<Web3ProviderAlias>();
  const [signer, setSigner] = useState<Signer>();
  const [signerAddress, setSignerAddress] = useState("");

  return (
    <Web3Context.Provider
      value={{
        provider,
        signer,
        signerAddress,
        setProvider,
        setSigner,
        setSignerAddress,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context);
