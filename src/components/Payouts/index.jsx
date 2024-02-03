import { useEffect, useMemo, useState } from "react";
import Board from "../Board";
import axios from "axios";
import moment from "moment";

const Payouts = () => {

    const [histories, setHistories] = useState([]);

    useEffect(() => {

        async function get() {
            const api = process.env.REACT_APP_API + "/payment/get-history";
            const yourJWTToken = window.localStorage.getItem("token");
    
            const headers = {
                Authorization: "Bearer " + yourJWTToken
            };
            await axios.post(api, {}, { headers })
                .then(res => {
                    setHistories(res.data);
                }).catch(err => {
    
                });
        }

        get();
    }, []);

    return (
        <Board title="Payouts" headBg="bg-teal-400">
            <div className="flex flex-col overflow-auto payout-container">
                <div className="sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-auto">
                            {
                                useMemo(() => {
                                    return (
                                        <table className="min-w-full text-left text-sm font-light">
                                            <thead className="border-b font-medium dark:border-neutral-500">
                                                <tr>
                                                    <th scope="col" className="px-6 py-4">No</th>
                                                    <th scope="col" className="px-6 py-4">Amount</th>
                                                    <th scope="col" className="px-6 py-4">Wallet</th>
                                                    <th scope="col" className="px-6 py-4">Tx</th>
                                                    <th scope="col" className="px-6 py-4">Network</th>
                                                    <th scope="col" className="px-6 py-4">Actions</th>
                                                    <th scope="col" className="px-6 py-4">Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    histories.map((history, index) => (
                                                        <tr className="border-b dark:border-neutral-500" key={index}>
                                                            <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                                                            <td className="whitespace-nowrap px-6 py-4">{history.amount}</td>
                                                            <td className="whitespace-nowrap px-6 py-4">{history.to}</td>
                                                            <td className="whitespace-nowrap px-6 py-4">{history.txHash}</td>
                                                            <td className="whitespace-nowrap px-6 py-4"><img src={`/assets/images/icons/${history.chain}.svg`} alt={history.chain}/></td>
                                                            <td className="whitespace-nowrap px-6 py-4">{history.type}</td>
                                                            <td className="whitespace-nowrap px-6 py-4">{moment(history.updated_at).calendar()}</td>
                                                        </tr>
                                                    ))
                                                }

                                                {
                                                    !histories.length && <tr><td colSpan={6} className="px-6 py-4 text-center">No history to display.</td></tr>
                                                }
                                            </tbody>
                                        </table>
                                    )
                                }, [histories])
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Board>
    )
}

export default Payouts;