import React, {Component, Fragment} from "react";
import ReactDOM from 'react-dom'
import Header from "./layout/header";
import Dashboard from "./leads/Dashboard";
import {Provider} from 'react-redux';
import Store from "../store";
import store from "../store";

class App extends Component {
        render() {
            return (
                <Provider store={store}>
                <Fragment>
                     <Header/>
                    <div className="container">
                         <Dashboard/>
                    </div>
                </Fragment>
                    </Provider>

            )
        }
}

ReactDOM.render(<App/>, document.getElementById('app'))