import React, {useState} from 'react';
import {CommonCard} from '../../../Common/components/CommonCard/CommonCard'

import { makeStyles } from '@material-ui/core/styles'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import './PersonalArea.scss'
import {API_URL} from "../../../config";
import PopupChangeAvatar from "../../../Common/components/PopupChangeAvatar/PopupChangeAvatar";
import PopupChangeUserInfo from "../../../Common/components/PopupChangeUserInfo/PopupChangeUserInfo";


import Paper from '@material-ui/core/Paper';

import MenuListComposition from "../../../Common/components/MenuListComposition/MenuListComposition";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    }
});

const PersonalAreaTemplate = ({avatar, myCollection, userName, bookmarkCollection}) => {
    const [openChangeAvatar, setOpenChangeAvatar] = useState(false)
    //
    const classes = useStyles();
    const [value, setValue] = useState(0);


    const changeStateAvatar = () => {
        setOpenChangeAvatar(true)
    }


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const avatarUrl = avatar ? `${API_URL + '/avatars/' + avatar}` : false

  return (
    <div className='Personal-area'>

        <section className='edit-information-block'>
            <div className='edit-user'>

                <div className='user'>
                    <div>
                        <img src={avatarUrl} className='avatar'/>
                        <section className='user-name'>{userName}</section>
                        <MenuListComposition changeStateAvatar={changeStateAvatar}/>
                    </div>

                    <div className='user-info'>
                        <section className='publication'>
                            <div className='item'>
                                <span>101</span>
                                <span>публикаций</span>
                            </div>
                            <div className='item'>
                                <span>1200</span>
                                <span>Подписчики</span>
                            </div>
                            <div className='item'>
                                <span>209</span>
                                <div>Подписки</div>
                            </div>
                        </section>
                        <section className='about-user'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus debitis dolores eligendi esse ex, excepturi facilis harum incidunt molestias mollitia nostrum obcaecati, officia quas sequi suscipit temporibus tenetur, ullam?</p>
                        </section>
                    </div>
                </div>

                <div className='edit-button'>
                    <div className='item'>
                        <PopupChangeAvatar openChangeAvatar={openChangeAvatar} changeStateAvatar={changeStateAvatar}/>
                    </div>
                    <div className='item'>
                        <PopupChangeUserInfo/>
                    </div>
                </div>
            </div>


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
                {value == '1' ? <CommonCard data={bookmarkCollection}/> : null}
            </div>
        </div>
    </div>
  );
};

export default PersonalAreaTemplate;