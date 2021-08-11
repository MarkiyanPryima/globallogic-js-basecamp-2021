import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import cityApi from '../../../api/cityApi';
import { MODE } from '../../../constants';
import { ID } from '../constants';
import FormContainer from './FormContainer';
import { getInitialValues, getRequestPayload } from './converter';

function CityForm({ cities, setCities }) {
  const { mode, id } = useParams();
  const history = useHistory();

  const city = cities.find(city => city.id === Number(id));

  useEffect(() => {
    if (mode === MODE.VIEW || mode === MODE.EDIT) {
      if (!city) {
        cityApi
          .getCity(Number(id))
          .then(city => setCities(prevCities => [...prevCities, city]))
          .catch(err => window.alert(err.message));
      }
    }
  }, [id, mode, city, setCities]);

  const [statuses, setStatuses] = useState([]);
  useEffect(() => {
    cityApi.getStatuses().then(setStatuses);
  }, [setStatuses]);

  const handleSubmit = async values => {
    try {
      const payload = getRequestPayload(values);

      switch (mode) {
        case MODE.CREATE:
          await cityApi.createCity(payload);
          break;
        case MODE.EDIT:
          await cityApi.editCity(payload);
          break;
        case MODE.CLONE:
          await cityApi.createCity(payload);
          break;
        case MODE.DELETE:
          await cityApi.deleteCity(payload);
          break;
        default:
          console.error(`Failed to execute this request for ${mode} mode`);
      }
    } catch (err) {
      window.alert(err.message);
    }

    history.push('/cities');
  };

  const initialValues = getInitialValues(city);

  return (

    <FormContainer
      key={`${mode}:${initialValues[ID]}`}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      mode={mode}
      statuses={statuses}
    />
  );
}

export default CityForm;
