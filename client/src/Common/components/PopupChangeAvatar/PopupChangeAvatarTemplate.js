import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import './PopupChangeAvatar.scss'
import {ShowMessage} from "../ShowMessage/ShowMessage";
import {Loading} from "../Loading/Loading";




export default function PopupChangeAvatarTemplate({fileUploadHandler,
                                                      handleClose,
                                                      deleteFile,
                                                      sendAvatar,
                                                      loading,
                                                      showMessage,
                                                      maxWidth,
                                                      open,
                                                      fullWidth,
                                                      previewImg}) {
    const classes = useStyles();


    console.log(loading)

    return (
        <React.Fragment>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
            >
                <DialogTitle id="max-width-dialog-title">Optional sizes</DialogTitle>
                <DialogContent>
                    {loading
                        ? <Loading colorLoading={'#000'}/>
                        : <DialogContentText>
                            {!previewImg
                                ? <div className={`${classes.root} button-load-image`}>
                                    <input
                                        accept="image/*"
                                        className={classes.input}
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                        onChange={(event) => fileUploadHandler(event)}
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button variant="contained" color="primary" component="span">
                                            Upload
                                        </Button>
                                    </label>
                                    <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                                    <label htmlFor="icon-button-file">
                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                            <PhotoCamera />
                                        </IconButton>
                                    </label>
                                </div>
                                : <div className='preview-img-wrapper'>
                                    <img src={previewImg} className='preview-img'/>
                                    <div className='preview-buttons'>
                                        <Button onClick={sendAvatar} color="primary">Оправить</Button>
                                        <Button onClick={deleteFile} color="secondary">Отмена</Button>
                                    </div>
                                </div>}

                            <ShowMessage showMessage={showMessage}/>

                        </DialogContentText>}


                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content',
    },
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 120,
    },
    formControlLabel: {
        marginTop: theme.spacing(1),
    },
    root: {
        margin: 'auto',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));