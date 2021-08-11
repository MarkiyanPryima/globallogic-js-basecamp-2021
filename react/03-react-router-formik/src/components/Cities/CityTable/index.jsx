import { useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import cityApi from '../../../api/cityApi';
import { MODE } from '../../../constants';
import { ID, NAME, STATUS, TIMESTAMP, AGE } from '../constants';
import Actions from './Actions';
import './index.scss';

function CitiesTable({ cities, setCities }) {
  const { url } = useRouteMatch();

  useEffect(() => {
    cityApi.getCities().then(setCities);
  }, [setCities]);

  return (
    <div className='CitiesTable'>
      <Link to={`${url}/city/${MODE.CREATE}`}>Create City </Link>
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
          <th>Age</th>
          <th>Last Updated At</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {cities.map(user => (
          <tr key={user[ID]}>
            <td>{user[ID]}</td>
            <td>{user[NAME]}</td>
            <td>{user[STATUS]}</td>
            <td>{user[AGE]}</td>
            <td>{user[TIMESTAMP]}</td>
            <td>
              <Actions id={user[ID]} />
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default CitiesTable;
