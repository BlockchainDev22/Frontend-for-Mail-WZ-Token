const StatusCard = ({ bg, label, qty, icon }) => {
    return (
        <div
            className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-full">
            <div className="p-6 flex justify-between h-32">
                <h5
                    className="mb-2 text-2xl font-bold leading-tight text-neutral-800 dark:text-neutral-50 text-left">
                    {qty} $
                </h5>
                <img src={icon} alt={label} className="w-12"/>
            </div>
            <div
                className={`border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 text-white rounded-b-lg ${bg}`}>
                {label}
            </div>
        </div>
    )
}

export default StatusCard;