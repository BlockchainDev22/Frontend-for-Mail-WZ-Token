/* eslint-disable jsx-a11y/anchor-is-valid */
import ConnectWallet from "../components/ConnectWallet";
import Nav from "../components/Nav";

const navs = [
    {
        to: "/home", label: "Home", icon: "home"
    },
    {
        to: "/payments", label: "Payments", icon: "dollar"
    },
    {
        to: "/approve-payout", label: "Approve Payout", icon: "check"
    },
];

const Sidebar = () => {

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
                            <Nav {...nav} key={index}/>
                        ))
                    }
                </ul>
            </nav>

            <nav
                id="main-navbar"
                className="fixed left-0 right-0 top-0 flex w-full h-16 flex-nowrap items-center justify-between bg-white py-[0.6rem] text-gray-500 shadow-lg hover:text-gray-700 focus:text-gray-700 dark:bg-zinc-700 lg:flex-wrap lg:justify-start xl:pl-60"
                data-te-navbar-ref>
                <div
                    className="flex w-full flex-wrap items-center justify-end px-4">
                    <ConnectWallet/>
                    <ul className="relative flex items-center ml-4">
                        <li className="relative" data-te-dropdown-ref>
                            <a
                                className="mr-4 flex items-center text-gray-500 hover:text-gray-700 focus:text-gray-700"
                               
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-te-dropdown-toggle-ref
                                aria-expanded="false">
                                <span className="dark:text-gray-200 [&>svg]:w-3.5">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="bell"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512">
                                        <path
                                            fill="currentColor"
                                            d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path>
                                    </svg>
                                </span>
                                <span
                                    className="absolute -mt-2.5 ml-2 rounded-full bg-red-600 px-1.5 py-[1px] text-[0.6rem] text-white"
                                >1</span
                                >
                            </a>
                            <ul
                                className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-[10rem] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-zinc-700 [&[data-te-dropdown-show]]:block"
                                aria-labelledby="navbarDropdownMenuLink"
                                data-te-dropdown-menu-ref>
                                <li>
                                    <a
                                        className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                                       
                                        data-te-dropdown-item-ref
                                    >Some news</a
                                    >
                                </li>
                                <li>
                                    <a
                                        className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                                       
                                        data-te-dropdown-item-ref
                                    >Another news</a
                                    >
                                </li>
                                <li>
                                    <a
                                        className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                                       
                                        data-te-dropdown-item-ref
                                    >Something else here</a
                                    >
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Sidebar;