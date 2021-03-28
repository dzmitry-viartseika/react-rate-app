import React, { useContext } from 'react';
import classes from './sidebar.module.scss';
import { RateContext } from '../../context/RateContext';

const SideBar = () => {

    const { state } = useContext(RateContext);
    console.log('state', state)

    return (
        <div className={classes.appSideBar}>
            <div className={classes['appSideBar-header']}>
                <h2 className={classes['appSideBar-header__title']}>Список валют</h2>
                <ul className={classes['appSideBar-header__list']}>
                    {
                        Object.keys(state).map(item => (
                            <li key={item}
                                className={classes['appSideBar-header__item']}
                            >
                                <p className={classes['appSideBar-header__text']}>
                                    <span>
                                        <img
                                            className={classes['appSideBar-header__img']}
                                            src={state[item].flag}
                                            alt={state[item].name}/>
                                    </span>
                                    { state[item].name }
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default SideBar;
