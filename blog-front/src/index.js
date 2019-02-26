import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


import './index.css';
import matchConfig from './matchConfig'
import reducers from './reducers';
import NavigationBar from './components/NavigationBar/NavigationBar.jsx';


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <div className='page'>
                <NavigationBar/>
                <div className='page_body'>
                    <Switch>
                        {
                            matchConfig.map((route, index) => <Route key={`route${index}`} {...route} />)
                        }
                    </Switch>
                </div>
            </div>
        </Router>
    </Provider>
), document.getElementById('root'));

