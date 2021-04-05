import MuiAlert from "@material-ui/lab/Alert";
import React, {useEffect, useState} from "react";
import Snackbar from "@material-ui/core/Snackbar";
import {useDispatch} from "react-redux";
import {removeShowMessageAction} from "../../../Redux/actions/action";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function ShowMessage({showMessage,
                            text = 'This is a success message!',
                            severity = 'success'}) {

    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(showMessage)
    }, [showMessage])

    const close = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false)
        dispatch(removeShowMessageAction())

    };
    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={close}>
            <Alert onClose={close} severity={severity}>
                {text}
            </Alert>
        </Snackbar>
    )
}
