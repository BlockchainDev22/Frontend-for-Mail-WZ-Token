import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers5/react";
import { withdrawSign } from "../../utils/signData";
import { abi, contractAddress } from "../../utils/config";
import { ethers } from "ethers";

const Withdraw = () => {

    const { address, chainId, isConnected } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    const withdraw = async() => {
        if (!isConnected) throw Error('User disconnected')

        const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
        const signer = await ethersProvider.getSigner();

        const MailWZ = new ethers.Contract(contractAddress.bsc, abi, signer);
        const nonce = await MailWZ.nonces(address);

        const signature = await withdrawSign(ethers.BigNumber.from(nonce).toNumber(), address, 1000, contractAddress.bsc, ethersProvider);

        console.log(signature);
    }

    return (
        <button
            onClick={withdraw}
            type="button"
            className="inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]">
            Withdraw
        </button>
    )
}

export default Withdraw;