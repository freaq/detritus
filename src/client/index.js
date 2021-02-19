import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import App from './app/App.jsx';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render((
    <Auth0Provider
        domain="dev-xm3wcxnc.us.auth0.com"
        clientId="VTQyY3yQqHXmF9Ll9AUxR8q0YgcNRmsF"
        redirectUri={window.location.origin}>
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    </Auth0Provider>
), document.getElementById('root'));
