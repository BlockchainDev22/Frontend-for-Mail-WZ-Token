import Board from "../Board";

const Payouts = () => {

    return (
        <Board title="Payouts" headBg="bg-teal-400">
            <div className="flex flex-col">
                <div className="sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Status</th>
                                        <th scope="col" className="px-6 py-4">Sum</th>
                                        <th scope="col" className="px-6 py-4">Wallet</th>
                                        <th scope="col" className="px-6 py-4">Date</th>
                                        <th scope="col" className="px-6 py-4">Network</th>
                                        <th scope="col" className="px-6 py-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Board>
    )
}

export default Payouts;