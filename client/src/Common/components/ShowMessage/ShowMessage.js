import MuiAlert from "@material-ui/lab/Alert";
import React, {useEffect, useState} from "react";
import Snackbar from "@material-ui/core/Snackbar";
import {useDispatch} from "react-redux";
import {removeShowMessageAction} from "../../../Redux/actions/action";

// function Alert(props) {
//     return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

import './ShowMessage.scss'

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
      <div className='Show-message_root Show-message'>
          <i className="Show-message_icons">email</i>
          <div className="Show-message_text"></div>
          <button className="Show-message__action">Got it</button>
      </div>
        // <Snackbar open={open} autoHideDuration={3000} onClose={close}>
        //     <Alert onClose={close} severity={severity}>
        //         {text}
        //     </Alert>
        // </Snackbar>
    )
}
