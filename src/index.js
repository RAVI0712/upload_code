import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import '../node_modules/jquery/src/jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  './component/css/style.css';



ReactDOM.render(
                <Router />, 
                document.getElementById('root')
            );
