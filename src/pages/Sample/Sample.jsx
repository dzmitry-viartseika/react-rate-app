import React, {useContext, useEffect} from 'react';
import { RateContext } from '../../context/RateContext';
import ButtonTemplate from "../../components/Elements/Button/ButtonTemplate";
import classes from './sample.module.scss';
import currencyApi from "../../api/currencyApi/api";
import currencyList from "../../constants/currency/currencyList";

const Sample = () => {

    const { state, sampleValue, createSample, base2Handle, baseHandle, sampleDateHandle } = useContext(RateContext);

    useEffect(() => {
        console.log('hook')
    }, []);

    return (
        <div className={classes.appSample}>
            <div className='sampleContainer'>
                <div>
                    <h3> Получить курс: &nbsp;
                        <select
                            onChange={baseHandle}
                            value={sampleValue.sample.base}
                        >
                            {Object.keys(state).map((item, i)=>{
                                return(
                                    <option key = {item}>{item}</option>
                                )
                            })}
                        </select>&nbsp;&nbsp; к &nbsp;&nbsp;
                        <select
                            onChange={base2Handle}
                            value={sampleValue.sample.base2}

                        >
                            {Object.keys(state).map((item, i)=>{
                                return(
                                    <option key = {item}>{item}</option>
                                )
                            })}
                        </select>
                    </h3>
                </div>
                <div className='sampleHead'>
                    <span>Дата:
                        <input
                            type='date'
                            onChange={sampleDateHandle}
                        />
                    </span>
                    <ButtonTemplate
                        buttonText='Получить курс'
                        clickEvent={createSample}
                        arg={sampleValue.sample}
                    />
                </div>
                <p>{JSON.stringify(sampleValue.sampleList)}</p>
                <div className = 'sampleResult'>
                </div>
            </div>
        </div>
    )
};

export default Sample;
