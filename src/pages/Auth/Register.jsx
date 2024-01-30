import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TEInput } from "tw-elements-react";
import Alert from "../../components/Alert";

const Register = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('user@gmail.com');
    const [password, setPassword] = useState('123123');
    const [password_confirmation, setPasswordConfirmation] = useState('123123');
    const [openAlert, setOpenAlert] = useState(false);
    const [alertText, setAlertText] = useState('');
    const [alertColor, setAlertColor] = useState('bg-success-100 text-success-800');

    const onRegister = async () => {
        const url = process.env.REACT_APP_API + '/register';
        await axios.post(url, {
            name,
            email,
            password,
            password_confirmation
        }).then(res => {
            const { message } = res.data;
            setAlertText(message);
            setOpenAlert("true");
            setAlertColor("bg-success-100 text-success-800");
            navigate("/auth/login");
        }).catch(err => {
            const { message } = err.response.data;
            setAlertText(message);
            setOpenAlert(true);
            setAlertColor("bg-danger-100 text-danger-800");
        })
    }

    return (
        <section className="gradient-form h-full bg-auth">
            <Alert
                text={alertText}
                color={alertColor}
                open={openAlert}
                setOpen={setOpenAlert}
            />
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

                                        <div className="mb-6">
                                            <div
                                                className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                                                id="pills-home"
                                                role="tabpanel"
                                                aria-labelledby="pills-home-tab"
                                                data-te-tab-active>
                                                <form>
                                                    <p className="mb-4">To check if your email in the winning list fill correct Email and click Proceed to the next step.</p>
                                                    <TEInput
                                                        type="text"
                                                        placeholder="Full Name"
                                                        label="Full Name"
                                                        className="mb-4"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                    />

                                                    <TEInput
                                                        type="email"
                                                        placeholder="Email"
                                                        label="Email"
                                                        className="mb-4"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />

                                                    <TEInput
                                                        type="password"
                                                        placeholder="Password"
                                                        label="Password"
                                                        className="mb-4"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />

                                                    <TEInput
                                                        type="password"
                                                        placeholder="Confrim Password"
                                                        label="Confirm Password"
                                                        className="mb-4"
                                                        value={password_confirmation}
                                                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                                                    />

                                                    <div className="mb-12 pb-1 pt-1 text-center">
                                                        <button
                                                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                                            type="button"
                                                            data-te-ripple-init
                                                            data-te-ripple-color="light"
                                                            style={{ background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)' }}
                                                            onClick={onRegister}
                                                            >
                                                            Click to Next Step
                                                        </button>

                                                        <div>
                                                            <span>Do you have account? <Link to={"/auth/login"} className="text-teal-400 underline">Login</Link></span>
                                                        </div>

                                                    </div>
                                                </form>
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

export default Register;