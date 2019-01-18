import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux'
import App from 'view/app';
// import Store from 'store';
import 'common/css/bootstrap.min.css'
import 'common/css/style.css';

// ReactDOM.render(
//     <Provider store={Store}>
//        <App /> 
//     </Provider>        
//     , document.getElementById('root'));


ReactDOM.render(
    <App />       
    , document.getElementById('root'));
