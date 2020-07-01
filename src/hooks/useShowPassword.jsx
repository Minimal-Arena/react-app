import { useState } from "react";

export const useShowPassword = () => {
    const [type, setType] = useState("password");
    const [confirmType, setConfirmType] = useState("password");
    const [hidden, setHidden] = useState(true);
    const [confirmHidden, setConfirmHidden] = useState(true);

    const onClickHandler = e => {
        e.preventDefault();

        if(type === "text") {
            setType("password");
            setHidden(true)
        } else {
            setType("text");
            setHidden(false);
        }
    }
    const onClickConfirmHandle = e => {
        e.preventDefault()
        if(confirmType === 'text') {
            setConfirmType('password')
            setConfirmHidden(true)
        }else {
            setConfirmType('text')
            setConfirmHidden(false)
        }
    }

    return [type, hidden, onClickHandler, confirmType, confirmHidden, onClickConfirmHandle];
}
