import { CURRENT_SERVER } from '../domain';
const axios = require('axios');

export default {
  getCurrencyDatas() {
    const instCred = axios.create({
      baseURL: CURRENT_SERVER,
    });
    return instCred.get('latest?base=USD');
  },
  getRubConvert() {
    const instCred = axios.create({
      baseURL: CURRENT_SERVER,
    });
    return instCred.get('latest?base=RUB');
  }
};
