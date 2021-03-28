import { CURRENT_SERVER_FIREBASE } from '../domain';
const axios = require('axios');

export default {
  createSample(sample) {
    const instCred = axios.create({
      baseURL: CURRENT_SERVER_FIREBASE,
    });
    return instCred.post('/sample.json', sample);
  },
  getAllSamples() {
    const instCred = axios.create({
      baseURL: CURRENT_SERVER_FIREBASE,
    });
    return instCred.get('/sample.json');
  }
};
