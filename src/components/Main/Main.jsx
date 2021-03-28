import React from 'react';
import Home from '../../pages/Home/Home';
import classes from './main.module.scss';

const Main = () => {
    return (
        <div className={classes.appMain}>
            <Home />
        </div>
    )
}

export default Main;
