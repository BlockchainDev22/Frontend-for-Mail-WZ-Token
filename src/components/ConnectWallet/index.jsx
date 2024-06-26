import { createWeb3Modal, defaultConfig, useDisconnect, useWeb3ModalAccount } from '@web3modal/ethers5/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateWallet, updateWalletConnected } from '../../app/reducers/auth.reducer'
import { NotificationManager } from 'react-notifications'
import axios from 'axios'

const projectId = '6d74644ff5318617e2b90c49de5ac19d'

const bsc = {
  chainId: 56, //mainnet: 56,
  name: "Binance Smart Chain",
  currency: "BNB",
  explorerUrl: "https://bscscan.com",
  rpcUrl: "https://bsc-dataseed1.binance.org/"
}

const metadata = {
  name: 'MailWZ',
  description: 'Mail WZ',
  url: 'https://mailwz.tk', // origin must match your domain & subdomain
  icons: []
}

createWeb3Modal({
  ethersConfig: defaultConfig({
    metadata,
    defaultChainId: 56,
    rpcUrl: 'https://bsc-dataseed1.binance.org/'
  }),
  chains: [bsc],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  defaultChain: bsc
})


const ConnectWallet = () => {

  const dispatch = useDispatch();
  const { address, isConnected } = useWeb3ModalAccount();
  const { disconnect } = useDisconnect();
  const { wallet } = useSelector(({ auth }) => auth);

  useEffect(() => {
    dispatch(updateWallet(address));
    if (!isConnected) {
      dispatch(updateWalletConnected(false));
    }
  }, [address, isConnected]);

  useEffect(() => {
    if (wallet) {
      const api = process.env.REACT_APP_API + "/update-wallet";
      const yourJWTToken = window.localStorage.getItem("token");
      axios.post(api,
        { wallet: address },
        {
          headers: {
            Authorization: "Bearer " + yourJWTToken
          }
        }
      ).then(res => {
        const { status, message } = res.data;
        if (!status) {
          NotificationManager.error(message);
          disconnect();
        }
        dispatch(updateWalletConnected(status));
      }).catch(err => {
        if (disconnect) disconnect();
      });
    }
  }, [wallet]);

  return (
    <w3m-button />
  )
}

export default ConnectWallet;