import { TERipple } from "tw-elements-react";
import { useEffect, useState } from "react";
import axios from "axios";
import classNames from "classnames";
import { bets, gameCards } from "../../../utils/config";
import { getRandomNumber, rankPokerHand } from "../../../utils/utils";
import Board from "../../Board";
import GameWin from "./GameOver/GameWin";
import "./index.css";

const tempCard = [
  { card: "diamonds_2", value: 2, color: 8 },
  { card: "diamonds_3", value: 3, color: 8 },
  { card: "diamonds_4", value: 4, color: 8 },
  { card: "diamonds_5", value: 5, color: 8 },
  { card: "diamonds_6", value: 6, color: 8 },
];

const FlipCards = () => {
  const [isFliped, setIsFliped] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [won, setWon] = useState({
    status: false,
    coins: 0,
    text: "",
  });
  const [remaining, setRemaining] = useState(tempCard);
  const [bet, setBet] = useState(0);

  useEffect(() => {
    if (isFinished) {
      setTimeout(() => {
        setIsFinished(false);
      }, 3000);
    }
  }, [isFinished]);

  const flipCards = () => {
    let cards = [...gameCards];
    let deckCards = [];

    for (let i = 0; i < 5; i++) {
      const cardIndex = getRandomNumber(0, cards.length - 1);

      const item = cards[cardIndex];

      deckCards.push(item);

      cards = cards.filter((r) => r.card !== item.card);
    }

    setRemaining(deckCards);

    setIsFliped(true);
  };

  const discardCards = () => {
    let _remaining = [...remaining];
    let cards = [...gameCards];

    _remaining = _remaining.map((d) => {
      if (d.isSelected) {
        const cardIndex = getRandomNumber(0, cards.length - 1);

        const item = cards[cardIndex];

        cards = cards.filter((r) => r.card !== item.card);

        return item;
      } else return d;
    });

    processResult(_remaining);
  };

  const selectCard = (index) => {
    let _remaining = [...remaining];
    _remaining[index].isSelected = _remaining[index].isSelected ? false : true;
    setRemaining(_remaining);
  };

  const processResult = async (deckCards) => {
    setRemaining(deckCards);
    let arraySuits = [];
    let arrayValues = [];

    for (let i = 0; i < deckCards.length; i++) {
      arraySuits.push(deckCards[i].color);
      arrayValues.push(deckCards[i].value);
    }

    let myHand = rankPokerHand(arrayValues, arraySuits);

    if (myHand.evaluatedValue === 5) {
      let jacksOrBetter = arrayValues.filter((value) => {
        return value > 10;
      }).length;
      if (jacksOrBetter < 1) {
        myHand.payout = 0;
      }
    }

    let coinsSum = myHand.payout * bet;

    if (myHand.payout === 0) {
      coinsSum = -1 * bet;
    }

    setWon({
      status: coinsSum > 0,
      coins: coinsSum,
      text: `${myHand.evaluatedHand}  ${coinsSum} $ TOP`,
    });

    const api = process.env.REACT_APP_API + "/game/win";
    const yourJWTToken = localStorage.getItem("token");
    const headers = {
      headers: {
        Authorization: "Bearer " + yourJWTToken,
      },
    };

    await axios
      .post(
        api,
        {
          coins: coinsSum,
        },
        headers
      )
      .then(() => {})
      .catch(() => {});

    setIsFliped(false);
    setIsFinished(true);
    setBet(0);
  };

  return (
    <>
      <Board title="Flip Cards" headBg="bg-teal-400">
        <div
          className={classNames("flex justify-center flex-wrap", {
            flipped: isFliped,
          })}
        >
          {remaining.map((card, index) => (
            <div
              id={`card${index}`}
              className={classNames("game-card", {
                selected: isFliped && card.isSelected,
              })}
              key={index}
              onClick={() => (isFliped ? selectCard(index) : null)}
            >
              <div className="game-card-front"></div>
              <div
                className="game-card-back"
                style={{
                  backgroundImage: `url('assets/images/cards/${card.card}.svg')`,
                }}
              ></div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-12 mb-3 gap-3">
          <label className="font-bold text-green-600">Place Bet: </label>
          <div className="inline-flex" role="group">
            {bets.map((_bet, index) => (
              <TERipple rippleColor="light" key={index}>
                <button
                  type="button"
                  className={classNames(
                    "inline-block border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-primary-700 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10",
                    {
                      "rounded-l": !index,
                      "rounded-r": index > 3,
                      "bg-primary-700 !text-white": _bet === bet,
                    }
                  )}
                  onClick={() => setBet(_bet)}
                >
                  {_bet}
                </button>
              </TERipple>
            ))}
          </div>
          <div>
            <button
              type="button"
              className="inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
              onClick={isFliped ? discardCards : flipCards}
              disabled={!bet}
            >
              {isFliped ? "Discard" : "Deal"}
            </button>
          </div>
        </div>
      </Board>
      {isFinished && <GameWin text={won.text} />}
    </>
  );
};

export default FlipCards;
