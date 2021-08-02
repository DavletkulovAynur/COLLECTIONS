import React, {useState} from 'react'
import Paper from "@material-ui/core/Paper"
import Tab from "@material-ui/core/Tab"
import {makeStyles} from "@material-ui/core/styles"
import {Tabs} from "@material-ui/core"

import PhoneIcon from '@material-ui/icons/Phone';
import CollectionsIcon from '@material-ui/icons/Collections';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

import './Tabs.scss'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    }
});

const TabsComponent = ({changeTabs, tabValue}) => {
    const classes = useStyles();

    
    const handleChange = (event, newValue) => {

        changeTabs(newValue)
    };

    return (
        <Paper className={classes.root}>
            <Tabs
                value={tabValue}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
                variant="fullWidth"
            >
                <Tab icon={<CollectionsIcon />}/>
                <Tab icon={<BookmarksIcon />} />
                <Tab icon={<PeopleAltIcon />}/>
            </Tabs>
        </Paper>
    );
};

export default TabsComponent;