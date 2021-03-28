import React, {useContext, useState} from 'react';
import classes from './calc.module.scss';
import { RateContext } from '../../context/RateContext';

const Calc = () => {

    const { state, inputValueHandler, selectValueHandler, defaultSetting, calculateHandler} = useContext(RateContext);
    console.log('state', state)
    return (
        <div className={classes.appCalc}>
            <h2>Я хочу обменять:</h2>
            <input type="number"
                   value={defaultSetting.inputValue}
                   onChange={inputValueHandler}
            /> Рублей
            <select onChange={selectValueHandler}>
                {
                    Object.keys(state).map(item => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))
                }
            </select>

            <p>{ JSON.stringify(defaultSetting.result) }</p>

            <button onClick={() => calculateHandler(defaultSetting.currencyValue)}>Посчитать</button>
        </div>
    )
};

export default Calc;
