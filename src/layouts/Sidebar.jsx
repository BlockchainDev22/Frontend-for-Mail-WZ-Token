import React, { useEffect } from "react";
import {
    Sidenav,
    Dropdown,
    Ripple,
    initTE,
} from "tw-elements";

const navs = [
    {
        path: "", label: "Home"
    },
    {
        path: "", label: "Payments"
    },
    {
        path: "", label: "Approve Payout"
    },
];

const Sidebar = () => {

    useEffect(() => {
        initTE({ Sidenav, Dropdown, Ripple });
    }, []);

    return (
        <header>
            <nav
                id="sidenav-1"
                className="fixed left-0 top-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] dark:bg-zinc-800 xl:data-[te-sidenav-hidden='false']:translate-x-0"
                data-te-sidenav-init
                data-te-sidenav-hidden="false"
                data-te-sidenav-mode-breakpoint-over="0"
                data-te-sidenav-mode-breakpoint-side="xl"
                data-te-sidenav-content="#content"
                data-te-sidenav-accordion="true">
                <a
                    className="mb-3 flex items-center justify-center py-6 outline-none"
                    href="#!"
                    data-te-ripple-init
                    data-te-ripple-color="primary">
                    <img
                        id="te-logo"
                        className="mr-2 w-8"
                        src="https://tw-elements.com/img/logo.png"
                        alt="TE Logo"
                        draggable="false" />
                    <span>Coin On Top</span>
                </a>

                <ul
                    className="relative m-0 list-none px-[0.2rem]"
                    data-te-sidenav-menu-ref>
                    {
                        navs.map((nav, index) => (
                            <li className="relative" key={index}>
                                <a
                                    className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-primary-600 hover:outline-none focus:bg-primary-400/10 focus:text-primary-600 focus:outline-none active:bg-primary-400/10 active:text-primary-600 active:outline-none data-[te-sidenav-state-active]:text-primary-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                    href="#!"
                                    data-te-sidenav-link-ref>
                                    <span
                                        className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600 motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512">
                                            <path
                                                d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm96 288H448c17.7 0 32-14.3 32-32V251.8c0-7.6-2.7-15-7.7-20.8l-65.8-76.8c-12.1-14.2-33.7-15-46.9-1.8l-21 21c-10 10-26.4 9.2-35.4-1.6l-39.2-47c-12.6-15.1-35.7-15.4-48.7-.6L135.9 215c-5.1 5.8-7.9 13.3-7.9 21.1v84c0 17.7 14.3 32 32 32z" />
                                        </svg>
                                    </span>
                                    <span>{nav.label}</span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>

            <nav
                id="main-navbar"
                className="fixed left-0 right-0 top-0 flex w-full h-12 flex-nowrap items-center justify-between bg-white py-[0.6rem] text-gray-500 shadow-lg hover:text-gray-700 focus:text-gray-700 dark:bg-zinc-700 lg:flex-wrap lg:justify-start xl:pl-60"
                data-te-navbar-ref>
                <div
                    className="flex w-full flex-wrap items-center justify-end px-4">
                    
                    <ul className="relative flex items-center">
                        <li className="relative" data-te-dropdown-ref>
                            <a
                                className="mr-4 flex items-center text-gray-500 hover:text-gray-700 focus:text-gray-700"
                                href="#"
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
                                        href="#"
                                        data-te-dropdown-item-ref
                                    >Some news</a
                                    >
                                </li>
                                <li>
                                    <a
                                        className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                                        href="#"
                                        data-te-dropdown-item-ref
                                    >Another news</a
                                    >
                                </li>
                                <li>
                                    <a
                                        className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                                        href="#"
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