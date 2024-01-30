import { useDispatch, useSelector } from "react-redux";
import { TEAlert } from "tw-elements-react";
import { updateOpened } from "../../app/reducers/alert.reducer";

const Alert = () => {

    const dispatch = useDispatch();
    const { open, color, text} = useSelector(({ alert }) => alert);
    
    const closeAlert = () => {
        dispatch(updateOpened(false));
    }

    return (
        <TEAlert
            onClosed={closeAlert}
            delay={2500}
            color={color}
            open={open}
            dismiss
            autohide
            className="z-[1000]"
            >
            {text}
        </TEAlert>
    )
}

export default Alert;