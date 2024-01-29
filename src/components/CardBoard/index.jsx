import StatusCard from "../Cards/StatusCard";

const cards = [
    {
        label: "Won", bg: "bg-cyan-400", qty: 0, icon: "/assets/images/icons/spin.svg"
    },
    {
        label: "Sign Up Bonus", bg: "bg-green-400", qty: 120, icon: "/assets/images/icons/login.svg"
    },
    {
        label: "signed up from your link", bg: "bg-red-400", qty: 130, icon: "/assets/images/icons/users.svg"
    },
    {
        label: "Total earned", bg: "bg-amber-400", qty: 0, icon: "/assets/images/icons/dollar.svg"
    }
];

const CardBoard = () => {
    return (
        <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            {
                cards.map((card, index) => (
                    <StatusCard {...card} key={index} />
                ))
            }
        </div>
    )
}

export default CardBoard;