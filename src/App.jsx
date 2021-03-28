import React, { useEffect, useState} from 'react';
import Laoyut from "./components/Layouts/Laoyut";
import './assets/scss/style.scss';
import { RateContext } from './context/RateContext';
import currencyApi from './api/currencyApi/api'
import currencyList from "./constants/currency/currencyList";

function App() {

    const [currencyDatas, setСurrencyDatas] = useState({ currencyDatas: currencyList });

    const [defaultSetting, setDefaultSetting] = useState({
        inputValue: 100,
        currencyValue: 'USD',
        result: null
    })

    console.log('defaultSetting', defaultSetting)

    const inputValueHandler = event => {
        setDefaultSetting(prev => {
            return {
                ...prev,
                inputValue: event.target.value
            }
        })
    };

    const selectValueHandler = event => {
        setDefaultSetting(prev => {
            return {
                ...prev,
                currencyValue: event.target.value
            }
        })
    };

    const calculateHandler = async (value) => {
        console.log('value', value)
        let result;
        try {
            const { data } = await currencyApi.getRubConvert();
            result = data.rates[value] * defaultSetting.inputValue;
            setDefaultSetting(prev => {
                return {
                    ...prev,
                    result,
                }
            })
        } catch (err) {
            console.error(err);
        }
    }

     useEffect(() => {
         const fetchData = async () => {
             try {
                const { data } = await currencyApi.getCurrencyDatas();
                 const rateArr = ['USD', 'CNY', 'EUR', 'GBP', 'JPY', 'RUB', 'CHF'];
                 const currency = {...currencyList};
                 for (let i = 0; i < rateArr.length; i++) {
                     currency[rateArr[i]].course = data.rates[rateArr[i]]
                  }
                  setСurrencyDatas(currency);
             } catch (err) {
                 console.error(err);
             }
         };

         fetchData();
     }, []);

  return (
    <div>
        <RateContext.Provider value={{
            state: currencyDatas,
            defaultSetting,
            inputValueHandler,
            selectValueHandler,
            calculateHandler,
        }}>
            <Laoyut />
        </RateContext.Provider>
    </div>
  );
}

export default App;
