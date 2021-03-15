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
                        <section className='user-name'>{userName}</section>
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, laboriosam velit! Ab accusamus aperiam, architecto at atque blanditiis deleniti dignissimos dolores dolorum eius error expedita harum iure libero magnam necessitatibus nihil, nostrum perferendis perspiciatis praesentium quo ratione recusandae reiciendis rem rerum tempore velit vero! Ad alias animi at cumque et, eveniet, expedita fuga, hic iste labore laudantium quae quidem rem sunt voluptates. A ab atque commodi cumque distinctio earum eius eveniet explicabo illo maiores molestiae mollitia natus nihil nisi obcaecati perferendis praesentium, provident quam quidem quisquam quo rem rerum suscipit tempora, voluptas? Aspernatur beatae ea, eligendi eos excepturi, fugit illum ipsum iste laboriosam magni minus mollitia nam, nihil non nostrum pariatur quisquam sint soluta sunt tenetur totam vel vero voluptatum.</p>
                        </section>
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