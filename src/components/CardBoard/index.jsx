import { useEffect, useState } from "react";
import StatusCard from "../Cards/StatusCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const cardDefault = [
    {
        label: "Won", bg: "bg-cyan-400", qty: 0, icon: "/assets/images/icons/spin.svg"
    },
    {
        label: "Sign Up Bonus", bg: "bg-green-400", qty: 100, icon: "/assets/images/icons/login.svg"
    },
    {
        label: "signed up from your link", bg: "bg-red-400", qty: 0, icon: "/assets/images/icons/users.svg"
    },
    {
        label: "Total earned", bg: "bg-amber-400", qty: 0, icon: "/assets/images/icons/dollar.svg"
    }
];

const CardBoard = () => {

    const navigate = useNavigate();
    const [cards, setCards] = useState(cardDefault);

    useEffect(() => {

        const api = process.env.REACT_APP_API + "/profile";
        const yourJWTToken = window.localStorage.getItem("token");
        
        axios.post(api,
            {},
            {
                headers: {
                    Authorization: "Bearer " + yourJWTToken
                }
            }
        ).then(res => {
            const { balance } = res.data.data
            let _cards = [...cards];
            _cards[3].qty = balance;
            setCards(_cards);
        }).catch(err => {
            localStorage.removeItem("token");
            navigate("/");
        });

    }, []);

    return (
        <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-4">
            {
                cards.map((card, index) => (
                    <StatusCard {...card} key={index} />
                ))
            }
        </div>
    )
}

export default CardBoard;