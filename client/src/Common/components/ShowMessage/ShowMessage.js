import MuiAlert from "@material-ui/lab/Alert";
import React, {useEffect, useState} from "react";
import Snackbar from "@material-ui/core/Snackbar";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function ShowMessage({showMessage}) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(showMessage)
    }, [showMessage])

    const close = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={close}>
            <Alert onClose={close} severity="success">
                This is a success message!
            </Alert>
        </Snackbar>
    )
}