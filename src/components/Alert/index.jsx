import { TEAlert } from "tw-elements-react";

const Alert = ({ text, color, open, setOpen }) => {
    return (
        <TEAlert onClosed={() => setOpen(false) } autohide delay={2500} open={open} dismiss color={color}>
            {text}
        </TEAlert>
    )
}

export default Alert;