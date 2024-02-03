import axios from "axios"

export const getProfile = async() => {

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

