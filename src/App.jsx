import React, { useEffect, useState} from 'react';
import Laoyut from "./components/Layouts/Laoyut";
import './assets/scss/style.scss';
import { RateContext } from './context/RateContext';
import currencyApi from './api/currencyApi/api';
import firebaseApi from './api/firebaseApi/api';
import currencyList from "./constants/currency/currencyList";

function App() {

    const [currencyDatas, setСurrencyDatas] = useState({ currencyDatas: currencyList });

    const [defaultSetting, setDefaultSetting] = useState({
        inputValue: 100,
        currencyValue: 'USD',
        result: null
    });

    const [sampleValue, setSampleValue] = useState({
        sample: {
            base: 'USD',
            base2: 'RUB',
            date: '',
            course: '',
        },
        sampleList: ''
    })

    const createSample = async (sample) => {
        try {
            const response = await currencyApi.getDateCourse(sample.date, sample.base);
            setSampleValue(prev => {
                const objSample = prev.sample;
                return {
                    ...prev,
                    sample: {
                        ...objSample,
                        course: response.data.rates[objSample.base2]
                    }
                }
            })
            await firebaseApi.createSample(sample);
            const { data } = await firebaseApi.getAllSamples();
            console.log(data);
            setSampleValue(prev => {
                return {
                    ...prev,
                    sampleList: data,
                }
            })
        } catch (err) {
            console.error(err);
        }
    }

    const inputValueHandler = event => {
        setDefaultSetting(prev => {
            return {
                ...prev,
                inputValue: event.target.value,
                result: null
            }
        })
    };

    const selectValueHandler = event => {
        setDefaultSetting(prev => {
            return {
                ...prev,
                currencyValue: event.target.value,
                result: null
            }
        })
    };

    const calculateHandler = async (value) => {
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

    const baseHandle = event => {
        setSampleValue(prev => {
            const objSample = prev.sample;
            return {
                ...prev,
                sample: {
                    ...objSample,
                    base: event.target.value
                }
            }
        })
    }

    const base2Handle = event => {
        setSampleValue(prev => {
            const objSample = prev.sample;
            return {
                ...prev,
                sample: {
                    ...objSample,
                    base2: event.target.value
                }
            }
        })
    }


    const sampleDateHandle = event => {
        console.log('event.target.value', event.target.value)
        setSampleValue(prev => {
            const objSample = prev.sample;
            return {
                ...prev,
                sample: {
                    ...objSample,
                    date: event.target.value
                }
            }
        })
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
            sampleValue,
            inputValueHandler,
            createSample,
            selectValueHandler,
            calculateHandler,
            sampleDateHandle,
            base2Handle,
            baseHandle,
        }}>
            <Laoyut />
        </RateContext.Provider>
    </div>
  );
}

export default App;
