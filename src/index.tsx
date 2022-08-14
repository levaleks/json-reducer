import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { App } from './components/App';

if (process.env.NODE_ENV === 'production' && process.env.REACT_APP_GA_TRACKING_ID) {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('app'),
);
