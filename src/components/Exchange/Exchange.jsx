import React, { useContext }  from 'react';
import classes from './exchange.module.scss';
import { RateContext } from "../../context/RateContext";

const Exchange = () => {

    const { state } = useContext(RateContext);


    return (
        <div className={classes.appExchange}>
            <div className={classes['appExchange__container']}>
                <div className={classes['appExchange__content']}>
                    <div>
                        <h3>Базовая валюта / Дата</h3>
                    </div>
                    <ul className={classes['appExchange__list']}>
                        {
                            Object.keys(state).map(item => {
                                return(
                                    <li key= {state[item].flag}
                                        className={classes['appExchange__item']}
                                    >
                                        <span>
                                            <img
                                                className={classes['appExchange__flag']}
                                                src={state[item].flag}
                                                alt={state[item].name}/>
                                            {item.name}
                                        </span>
                                        <span>
                                            { `1 USD = ${state[item].course} ${state[item].name}` }
                                        </span>

                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Exchange;
