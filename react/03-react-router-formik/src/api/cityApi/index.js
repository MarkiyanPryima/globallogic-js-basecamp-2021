import { wait, createGetId, getTimestamp, throwError } from '../utisl';
import data from './db';

const getId = createGetId(data.length);

const cityApi = {
  async getCities() {
    await wait(1000);

    console.log('GET /cities', data);
    return data;
  },
  async getCity(id) {
    await wait();

    const city = data.find(c => c.id === id);

    if (city) {
      console.log(`GET /cities/${city.id}`, city);
      return city;
    } else {
      throwError(id);
    }
  },
  async createCity(city) {
    await wait();

    const newCity = {
      ...city,
      id: getId(),
      timestamp: getTimestamp()
    };

    data.push(newCity);

    console.log('POST /cities', newCity);
    return newCity;
  },
  async editCity(city) {
    await wait();

    const index = data.findIndex(c => c.id === city.id);

    if (~index) {
      data[index] = {
        ...city,
        timestamp: getTimestamp()
      };

      console.log('PUT /cities', data[index]);
      return data[index];
    } else {
      throwError(city.id);
    }
  },

  async deleteCity(city) {
    await wait();

    const index = data.findIndex(c => c.id === city.id);

    if (~index) {
      console.log('DELETE /cities', city);
      return data.splice(index, 1);
    } else {
      throwError(city.id);
    }
  },

  async getStatuses() {
    await wait();
    const STATUSES = ['city', 'capital', 'village'];

    console.log('GET /statuses', STATUSES);
    return STATUSES;
  }
};

export default cityApi;
