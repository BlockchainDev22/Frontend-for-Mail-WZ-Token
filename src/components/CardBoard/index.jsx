import { useEffect, useState } from "react";
import StatusCard from "../Cards/StatusCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateShare, updateTotal, updateWon } from "../../app/reducers/balance.reducer";

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

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const balance = useSelector((reducer) => reducer.balance);
    const [cards, setCards] = useState(cardDefault);

    useEffect(() => {

        const api = process.env.REACT_APP_API + "/game/get-balance";
        const yourJWTToken = window.localStorage.getItem("token");
        
        axios.post(api,
            {},
            {
                headers: {
                    Authorization: "Bearer " + yourJWTToken
                }
            }
        ).then(res => {
            const { total, won, share } = res.data;
            dispatch(updateTotal(total));
            dispatch(updateWon(won));
            dispatch(updateShare(share));
        }).catch(err => {
            localStorage.removeItem("token");
            navigate("/");
        });

    }, []);

    useEffect(() => {
        let _cards = [...cards];
        _cards[0].qty = balance.won;
        _cards[2].qty = balance.share;
        _cards[3].qty = balance.total;

        setCards(_cards);
    }, [balance]);

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