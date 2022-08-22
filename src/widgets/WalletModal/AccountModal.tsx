import React from "react";
import { ChainId } from "@phcfinance/sdk"
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Box/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { connectorLocalStorageKey } from "./config";

interface Props {
  account: string;
  chainId: ChainId;
  logout: () => void;
  onDismiss?: () => void;
}
type scanList = {
  readonly [chainId in ChainId]: string
}

const SCAN_URL: scanList = {
  [ChainId.MAINNET]: 'https://bscscan.com/address/',
  [ChainId.BSCTESTNET]: 'https://bscscan.com/address/',
  [ChainId.FANTOMNET]: 'https://ftmscan.com/address/',
  [ChainId.FANTOMTESTNET]: 'https://ftmscan.com/address/',
  [ChainId.HARMONYNET]: 'https://explorer.harmony.one/address/',
  [ChainId.HARMONYTESTNET]: 'https://explorer.harmony.one/address/'
}
const SCAN_NAME: scanList = {
  [ChainId.MAINNET]: 'BscScan',
  [ChainId.BSCTESTNET]: 'BscScan',
  [ChainId.FANTOMNET]: 'FtmScan',
  [ChainId.FANTOMTESTNET]: 'FtmScan',
  [ChainId.HARMONYNET]: 'Harmony Explorer',
  [ChainId.HARMONYTESTNET]: 'Harmony Explorer'
}

const AccountModal: React.FC<Props> = ({ account, chainId, logout, onDismiss = () => null }) => (  
  <Modal title="Your wallet" onDismiss={onDismiss}>
    <Text
      fontSize="20px"
      bold
      style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
    >
      {account} {chainId}
    </Text>
    <Flex mb="32px">
      <LinkExternal small href={`${SCAN_URL[chainId]}${account}`} mr="16px">
        View on {SCAN_NAME[chainId]}
      </LinkExternal>
      <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
    </Flex>
    <Flex justifyContent="center">
      <Button
        scale="sm"
        variant="secondary"
        onClick={() => {
          logout();
          window.localStorage.removeItem(connectorLocalStorageKey);
          onDismiss();
        }}
      >
        Logout
      </Button>
    </Flex>
  </Modal>
);

export default AccountModal;
