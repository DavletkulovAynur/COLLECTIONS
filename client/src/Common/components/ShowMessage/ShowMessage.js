import MuiAlert from "@material-ui/lab/Alert";
import React, {useState} from "react";
import Snackbar from "@material-ui/core/Snackbar";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function ShowMessage({showMessage}) {


    const close = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        // setOpenTest(false);
    };
    return (
        <Snackbar open={showMessage} autoHideDuration={6000} onClose={close}>
            <Alert onClose={close} severity="success">
                This is a success message!
            </Alert>
        </Snackbar>
    )
}