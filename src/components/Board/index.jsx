const Board = ({ title, children, headBg = '', className = '' }) => {

    return (
        <div
            className="block rounded-lg border border-primary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:border-primary-300 dark:bg-neutral-600 mt-4">
            <div
                className={`border-b-2 border-[#0000002d] px-6 py-3 text-white rounded-t-lg bg-teal-400 ${headBg}`}>
                {title}
            </div>
            <div className={`p-6 min-h-24 ${className}`}>
                {children}
            </div>
        </div>
    )
}

export default Board;