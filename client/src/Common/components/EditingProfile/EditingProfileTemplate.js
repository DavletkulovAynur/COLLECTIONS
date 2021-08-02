import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import './EditingProfile.scss'
import {Loading} from '../Loading/Loading'
import Input from '../Input/Input'

import { Container } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'





export default function EditingProfileTemplate({fileUploadHandler,
                                                    handleClose,
                                                    deleteFile,
                                                    sendAvatar,
                                                    sendUserInformation,
                                                    loading,
                                                    open,
                                                    previewImg,
                                                    avatarUrl,
                                                    nameInput,
                                                    aboutUserInput,
                                                    placeInput,
                                                    nameInputError,}) {

  const classes = useStyles();

  return (
  <div className='Edit-user-information'>
    <Dialog
        className='Edit-user-information-dialog'
        fullScreen={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title">

        <Container maxWidth='sm' disableGutters={true}>
          <Header handleClose={handleClose}/>
          <DialogContent>
            <AvatarChange avatarUrl={avatarUrl} fileUploadHandler={fileUploadHandler} classes={classes}/>

            {loading
            ? <Loading colorLoading={'#000'}/>
            : <div>
                {!previewImg
                  ? <UserInformation
                      nameInputError={nameInputError}
                      nameInput={nameInput}
                      aboutUserInput={aboutUserInput}
                      placeInput={placeInput}
                      sendUserInformation={sendUserInformation}/>
                  : <PreviewImg previewImg={previewImg} deleteFile={deleteFile} sendAvatar={sendAvatar}/>
                }
              </div>
            }
          </DialogContent>
        </Container>
      </Dialog>
  </div>
    );
}

const Header = ({handleClose}) => {
  return (
    <div className='header'>
      <DialogTitle  id="max-width-dialog-title">
        Изменение профиля
      </DialogTitle>
      <DialogActions>
        <div onClick={handleClose}>
          <IconButton style={{color: '#fff', padding: 0}}>
            <CloseIcon/>
          </IconButton>
        </div>
      </DialogActions>
    </div>
  )
}

const AvatarChange = ({fileUploadHandler, avatarUrl, classes}) => {
  return (
    <div className='avatar-wrapper'>
      <div className='title'>
        Фотография
      </div>
      <div className='content'>
        <img className='avatar' src={avatarUrl}/>
        <div>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            onChange={(event) => fileUploadHandler(event)}
          />
          <label htmlFor="contained-button-file">
            <Button style={{color: '#fff'}} component="span">
              Изменить
            </Button>
          </label>
          <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
        </div>
      </div>
    </div>
  )
}

const UserInformation = ({nameInput, placeInput, aboutUserInput, nameInputError, sendUserInformation}) => {
  return (
    <section>
      <div className='Test2'>
        <Input error={nameInputError} binding={nameInput} label='Имя пользователя'/>
      </div>
      <div className='Test2'>
        <Input binding={placeInput} label='Расположение'/>
      </div>
      <div className='Test2'>
        <Input multiline={true}  rows={4} binding={aboutUserInput} label='Расскажите немного о себе'/>
      </div>
      <Button onClick={sendUserInformation} variant="contained" color="primary">
        Сохранить
      </Button>
    </section>
  )
}

const PreviewImg = ({previewImg, deleteFile, sendAvatar}) => {
  return (
    <div className='preview-img-wrapper'>
      <img src={previewImg} className='preview-img'/>
      <div className='preview-buttons'>
        <Button style={{marginRight: '8px'}} onClick={deleteFile} color="secondary">Отмена</Button>
        <Button style={{color: '#fff'}} onClick={sendAvatar} color="primary">Загрузить</Button>
      </div>
    </div>
  )
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