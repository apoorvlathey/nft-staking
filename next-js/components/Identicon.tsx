import { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import Jazzicon from "@metamask/jazzicon";

const StyledIdenticon = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 1.125rem;
  background-color: black;
`;

const Identicon = ({ signerAddress }: { signerAddress: string }) => {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    if (signerAddress && ref.current) {
      ref.current.innerHTML = "";
      ref.current.appendChild(
        Jazzicon(16, parseInt(signerAddress.slice(2, 10), 16))
      );
    }
  }, [signerAddress]);

  return <StyledIdenticon ref={ref as any} />;
};

export default Identicon;
