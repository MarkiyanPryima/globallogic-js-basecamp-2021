import { Switch, Redirect, Route, Link } from 'react-router-dom';

import Users from '../Users';
import NotFound from '../Not found/notFound';
import './app.css';
import Cities from '../Cities';

function App() {
  return (
    <div className='App'>
      <div className={'bar'}>

        <ul>
          <li><Link to='/users'>Users</Link></li>
          <li><Link to='/cities'>Cities</Link></li>
        </ul>
      </div>

      <Switch>
        <Redirect exact from='/' to='/users' />

        <Route path='/users'>
          <Users />
        </Route>

        <Route path='/cities'>
          <Cities />
        </Route>

        <NotFound />
      </Switch>
    </div>
  );
}

export default App;
