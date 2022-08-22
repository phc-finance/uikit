import React from "react";
import styled from "styled-components";
import Button from "../../../components/Button/Button";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";

const StyledButton = styled(Button)`  

  ${({ theme }) => theme.mediaQueries.md} {
    border-radius: 40px;
    border-width: 0;
    height: 35px;
    box-shadow: unset;
  }
`;

interface Props {
  account?: string;
  chainId?: number;
  login: Login;
  logout: () => void;
}

const UserBlock: React.FC<Props> = ({ account, chainId, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account, chainId);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div>
      {account ? (
        <StyledButton
          scale="sm"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </StyledButton>
      ) : (
        <StyledButton
          scale="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect Wallet
        </StyledButton>
      )}
    </div>
  );
};

export default React.memo(UserBlock, (prevProps, nextProps) => prevProps.account === nextProps.account);
