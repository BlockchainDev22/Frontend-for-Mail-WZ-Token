import { createWeb3Modal, defaultConfig, useWeb3ModalAccount } from '@web3modal/ethers5/react'
import axios from 'axios'
import { useEffect } from 'react'
import { updateColor, updateOpened, updateText } from '../../app/reducers/alert.reducer'
import { useDispatch, useSelector } from 'react-redux'
import { updateAuth } from '../../app/reducers/auth.reducer'

const projectId = '6d74644ff5318617e2b90c49de5ac19d'

const eth = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

const bsc = {
  chainId: 97, //mainnet: 56,
  name: "Binance Smart Chain",
  currency: "BNB",
  explorerUrl: "https://testnet.bscscan.com",
  rpcUrl: "https://bsc-testnet.public.blastapi.io"
}

// const metadata = {
//   name: 'My Website',

//   description: 'My Website description',
//   url: 'https://mywebsite.com', // origin must match your domain & subdomain
//   icons: ['https://avatars.mywebsite.com/']
// }

createWeb3Modal({
  ethersConfig: defaultConfig({}),
  chains: [eth, bsc],
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})


const ConnectWallet = () => {

    const dispatch = useDispatch();
    const { address, chainId, isConnected } = useWeb3ModalAccount();
    const { wallet } = useSelector(({ auth }) => auth);

    useEffect(() => {

      if (address && isConnected) {
        if (wallet != address) dispatch(updateAuth({ wallet: address }));
      }

    }, [address, isConnected]);

    useEffect(() => {
      if (wallet) {
        const api = process.env.REACT_APP_API + "/check-wallet";
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
          dispatch(updateText(message));
          dispatch(updateColor(status ? "bg-success-400 text-success-700" : "bg-danger-400 text-danger-700"));
          dispatch(updateOpened(true));
        }).catch(err => {
          console.log(err);
        });
      }
    }, [wallet]);

    return (
        <w3m-button />
    )
}

export default ConnectWallet;