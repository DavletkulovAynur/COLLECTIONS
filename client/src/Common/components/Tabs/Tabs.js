import React, {useState} from 'react';
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import {makeStyles} from "@material-ui/core/styles";
import {Tabs} from "@material-ui/core";

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
            >
                <Tab label="My Collection" />
                <Tab label="My save" />
            </Tabs>
        </Paper>
    );
};

export default TabsComponent;