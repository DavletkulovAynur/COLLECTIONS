import React from 'react';
import {CommonCard} from '../../../Common/components/CommonCard/CommonCard'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import './PersonalArea.scss'
import {API_URL} from "../../../config";
import PopupChangeAvatar from "../../../Common/components/PopupChangeAvatar/PopupChangeAvatar";
import PopupChangeUserInfo from "../../../Common/components/PopupChangeUserInfo/PopupChangeUserInfo";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

const PersonalAreaTemplate = ({avatar, myCollection, fileUploadHandler, userName}) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const avatarUrl = avatar ? `${API_URL + '/avatars/' + avatar}` : false

  return (
    <div className='Personal-area'>

        <section className='edit-information-block'>
            <div className='edit-user'>
                <div className='user'>
                    <img src={avatarUrl} className='avatar'/>
                    <div className='user-info'>
                        <div>{userName}</div>
                        <div className='publication'>
                            <div>
                                <span>101</span>
                                <span>публикаций</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='edit-button'>
                    <div className='item'>
                        <PopupChangeAvatar/>
                    </div>
                    <div className='item'>
                        <PopupChangeUserInfo/>
                    </div>
                    <div className='item'>
                        <Button variant="outlined" color="primary">
                            Выйти
                        </Button>
                    </div>
                </div>
            </div>

            <input onChange={(event) => fileUploadHandler(event)} type='file'/>
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="My Collection" />
                    <Tab label="My save" />
                </Tabs>
            </Paper>
        </section>


        <div className='Collections-list'>
            <div className='Com-main-grid'>
                {value == '0' ? <CommonCard data={myCollection}/> : null}
                {value == '1' ? 'сохраненных коллекций не найдено' : ''}
            </div>
        </div>
    </div>
  );
};

export default PersonalAreaTemplate;