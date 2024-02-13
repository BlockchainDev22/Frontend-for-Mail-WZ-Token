/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import ConnectWallet from "../components/ConnectWallet";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import { useDispatch } from "react-redux";
import { updateEmail, updateId, updateName } from "../app/reducers/auth.reducer";
import { getProfile } from "../utils/utils";

const navs = [
    {
        to: "/home", label: "Home", icon: "home"
    },
    {
        to: "/payments", label: "Payments", icon: "dollar"
    },
    // {
    //     to: "/approve-payout", label: "Approve Payout", icon: "check"
    // },
];

const Sidebar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        async function run() {
            const profile = await getProfile();
            const { name, email, id } = profile;
            dispatch(updateEmail(email));
            dispatch(updateName(name));
            dispatch(updateId(id));
        }

        run();
    }, [])

    const logout = async () => {
        const api = process.env.REACT_APP_API + "/logout";
        const yourJWTToken = window.localStorage.getItem("token");
        const headers = {
            headers: {
                Authorization: "Bearer " + yourJWTToken
            }
        };

        localStorage.removeItem("token");

        await axios.get(api, headers).then(res => {
            const { message, status } = res.data;

            if (status) {
                NotificationManager.success(message);
            }

            else {
                NotificationManager.error(message);
            }
        }).catch(err => {

        });

        navigate("/");
    }

    return (
        <header>
            <nav
                id="sidenav-1"
                className="fixed left-0 top-0 z-[99] h-screen w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] dark:bg-zinc-800 xl:data-[te-sidenav-hidden='false']:translate-x-0"
                data-te-sidenav-init
                data-te-sidenav-hidden="false"
                data-te-sidenav-mode-breakpoint-over="0"
                data-te-sidenav-mode-breakpoint-side="xl"
                data-te-sidenav-content="#content"
                data-te-sidenav-accordion="true"
            >
                <div
                    className="mb-3 flex items-center justify-center py-6 outline-none"
                >
                    <img
                        id="te-logo"
                        className="mr-2 w-8"
                        src="https://tw-elements.com/img/logo.png"
                        alt="TE Logo"
                        draggable="false" />
                    <span>Coin On Top</span>
                </div>

                <ul
                    className="relative m-0 list-none px-[0.2rem]"
                    data-te-sidenav-menu-ref>
                    {
                        navs.map((nav, index) => (
                            <Nav {...nav} key={index} />
                        ))
                    }
                </ul>
            </nav>

            <nav
                id="main-navbar"
                className="fixed left-0 right-0 top-0 flex w-full h-16 flex-nowrap items-center justify-between bg-white py-[0.6rem] text-gray-500 shadow-lg hover:text-gray-700 focus:text-gray-700 dark:bg-zinc-700 lg:flex-wrap lg:justify-start xl:pl-60 z-[98]"
                data-te-navbar-ref>
                <div
                    className="flex w-full flex-wrap items-center justify-end px-4">
                    <ConnectWallet />
                    {/* <w3m-network-button /> */}


                    <ul className="relative flex items-center ml-4">

                        <li>
                            <button
                                type="button"
                                className="inline-block rounded-full bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
                                onClick={logout}
                            >
                                Log out
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Sidebar;