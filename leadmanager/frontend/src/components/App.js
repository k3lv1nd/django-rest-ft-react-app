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

const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

class App extends Component {
        render() {
            return (
                <Provider store={store}>
                    <AlertProvider template={AlertTemplate} {...alertOptions}>
                        <Fragment>
                            <Header/>
                            <Alerts />
                            <div className="container">
                                 <Dashboard/>
                            </div>
                        </Fragment>
                    </AlertProvider>
                </Provider>

            )
        }
}

ReactDOM.render(<App/>, document.getElementById('app'))