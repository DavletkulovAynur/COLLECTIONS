import React from 'react';
import {CommonCard} from '../../../Common/components/CommonCard/CommonCard'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import './PersonalArea.scss'
import {API_URL} from "../../../config";
import PopupChangeAvatar from "../../../Common/components/PopupChangeAvatar/PopupChangeAvatar";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

const PersonalAreaTemplate = ({avatar, myCollection, fileUploadHandler}) => {
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
                <img src={avatarUrl} className='avatar'/>
                <div>
                    <PopupChangeAvatar/>
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