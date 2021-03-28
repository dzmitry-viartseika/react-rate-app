import React from 'react';
import NavBar from "../NavBar/NavBar";
import classes from './headerTemplate.module.scss';

const HeaderTemplate = () => {
    return (
        <header className={classes.appHeader}>
            <div className={classes['appHeader__logo']}>
                <h2>RateApp</h2>
            </div>
            <div className={classes['appHeader__nav']}>
                <NavBar />
            </div>
            <div className={classes['appHeader__person']}>
                wertey
                <i className={'fa fa-user'}></i>
            </div>
        </header>
    )
}

export default HeaderTemplate;
