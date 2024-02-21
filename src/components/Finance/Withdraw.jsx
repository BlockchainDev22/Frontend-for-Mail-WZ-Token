import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers5/react";
import { withdrawSign } from "../../utils/signData";
import { abi, contractAddress } from "../../utils/config";
import { ethers } from "ethers";
import { getProfile } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { updateLoading } from "../../app/reducers/auth.reducer";
import { NotificationManager } from "react-notifications";

const Withdraw = () => {

    const dispatch = useDispatch();
    const { address, isConnected } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    const withdraw = async () => {
        if (!isConnected) {
            NotificationManager.warning("Wallet is not connected", "Warning");
            return;
        };

        const profile = await getProfile();
        if (profile?.balance) {
            if (profile?.balance <= 0) {
                NotificationManager.warning("No balance in account", "Warning");
                return;
            }

            try {
                dispatch(updateLoading(true));
                const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
                const signer = ethersProvider.getSigner();
                
                const MailWZ = new ethers.Contract(contractAddress.bsc, abi, signer);
                const nonce = await MailWZ.nonce(address);
                const amount = ethers.utils.parseEther(profile.balance);
                
                const signature = await withdrawSign(ethers.BigNumber.from(nonce).toHexString(), address, amount.toHexString(), contractAddress.bsc, ethersProvider);

                const balance = await ethersProvider.getBalance(address);
                const _tax = await MailWZ.calculateTax();

                if (balance.lte(_tax)) {
                    NotificationManager.warning("Insufficient funds to pay tax", "Warning");
                    throw Error();
                }

                const options = { value: _tax };
                const tx = await MailWZ.withdraw(address, amount, signature, options);
                await tx.wait();
                
                NotificationManager.success(`You have withdrawn $${profile.balance} successfully`, "Success");
                dispatch(updateLoading(false));
                setTimeout(() => {
                    window.location.reload();
                }, 3000)

            } catch (err) {
                const err_result = JSON.parse(JSON.stringify(err));
                if (err_result?.reason === "transaction failed") {
                    NotificationManager.error("Withdraw is failed", "Error");
                }

                dispatch(updateLoading(false));
            }
        }
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