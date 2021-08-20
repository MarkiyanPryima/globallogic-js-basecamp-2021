import {StrictMode} from 'react';
import {Provider} from "react-redux";
import ReactDOM from 'react-dom';

import App from './components/App';
import Root from './components/Root';
import './styles.css';
import store from "./Store/store";

const rootElement = document.getElementById('root');
ReactDOM.render(
    <StrictMode>
        <Root>
            <Provider store={store}>
                <App/>
            </Provider>
        </Root>
    </StrictMode>,
    rootElement
);
