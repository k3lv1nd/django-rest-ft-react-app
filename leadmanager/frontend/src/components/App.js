import React, {Component, Fragment} from "react";
import ReactDOM from 'react-dom'
import Header from "./layout/header";
import Dashboard from "./leads/Dashboard";
import {Provider} from 'react-redux';
import {Provider as AlertProvider} from 'react-alert'
import AlertTemplate from "react-alert-template-basic";
import Store from "../store";
import store from "../store";
import Alerts from "./layout/Alerts";
import { HashRouter as Router, Route, Routes } from
        "react-router-dom"
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PrivateRoute from "./common/PrivateRoute";
import {loadUser} from "../actions/auth";

const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser())
    }

    render() {
            return (
                <Provider store={store}>
                    <AlertProvider template={AlertTemplate} {...alertOptions}>
                        <Router>
                            <Fragment>
                                <Header/>
                                <Alerts />
                                <div className="container">
                                    <Routes>
                                       <Route exact path='/' element={<PrivateRoute/>}>
                                            <Route exact path='/' element={<Dashboard/>}/>
                                        </Route>
                                        <Route exact path="/login" Component={Login} />
                                        <Route exact path="/register" Component={Register} />
                                    </Routes>

                                </div>
                            </Fragment>
                        </Router>
                    </AlertProvider>
                </Provider>

            )
        }
}

ReactDOM.render(<App/>, document.getElementById('app'))