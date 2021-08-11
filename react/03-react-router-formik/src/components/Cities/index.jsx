import { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { MODE } from '../../constants';
import CitiesTable from './CityTable';
import CityForm from './CityForm';

function Cities() {
  const { path } = useRouteMatch();
  const [cities, setCities] = useState([]);

  return (
    <div className='App'>
      <Switch>
        <Route exact path={path}>
          <CitiesTable cities={cities} setCities={setCities} />
        </Route>

        <Route exact
               path={`${path}/city/:mode(${MODE.VIEW}|${MODE.CREATE}|${MODE.EDIT}|${MODE.CLONE}|${MODE.DELETE})/:id?`}>
          <CityForm cities={cities} setCities={setCities} />
        </Route>
      </Switch>
    </div>
  );
}

export default Cities;
