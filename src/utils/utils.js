import axios from "axios"
import { hands, payout } from "./config";

export const getProfile = async () => {

    const api = process.env.REACT_APP_API + "/profile";
    const yourJWTToken = window.localStorage.getItem("token");
    const headers = {
        headers: {
            Authorization: "Bearer " + yourJWTToken
        }
    };

    return await axios.post(api, {}, headers).then(res => {
        return res.data.data;
    }).catch(err => {
        return {};
    })

}

export const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const rankPokerHand = (cs, ss) => {
    let v, i, o, s = 1 << cs[0] | 1 << cs[1] | 1 << cs[2] | 1 << cs[3] | 1 << cs[4];

    for (i = -1, v = o = 0; i < 5; i++, o = Math.pow(2, cs[i] * 4)) {
      v += o * ((v / o & 15) + 1);
    }

    v = v % 15 - ((s / (s & -s) == 31) || (s == 0x403c) ? 3 : 1);
    v -= (ss[0] == (ss[1] | ss[2] | ss[3] | ss[4])) * ((s == 0x7c00) ? -5 : 1);

    let evaluatedHand = hands[v];
    
    return {
      evaluatedHand: evaluatedHand,
      evaluatedValue: v,
      payout: payout[v]
    }
}