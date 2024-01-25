import { Link, useMatch } from "react-router-dom";

const Nav = ({ to, label, icon }) => {

    const match = useMatch(to);

    return (
        <li className="relative">
            <Link
                className={`mt-1 group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary-400/80 hover:text-white hover:outline-none focus:bg-primary-400/80 focus:text-white focus:outline-none active:text-primary-600 active:outline-none data-[te-sidenav-state-active]:text-primary-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none ${match ? "bg-primary-400/80 text-white" : ""}`}
                to={to}
                data-te-sidenav-link-ref>
                <span
                    className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600 motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
                    <img src={`/assets/images/icons/${icon}.svg`} alt="icon" className="w-6 h-6" />
                </span>
                <span>{label}</span>
            </Link>
        </li>
    )
}

export default Nav;