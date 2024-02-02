import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'

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

    return (
        <w3m-button />
    )
}

export default ConnectWallet;