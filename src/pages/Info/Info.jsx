import React from 'react';
import classes from './info.module.scss';

const Info = () => {

    return (
        <div className={classes.appInfo}>
            <h3 className={classes['appInfo__title']}>Currency conversion application</h3>
            <p className={classes['appInfo__text']}>Author: </p>
        </div>
    )
};

export default Info;
