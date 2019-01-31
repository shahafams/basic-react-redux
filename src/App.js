import React from 'react';
import './App.css';
import Header from "./components/Header";
import Todos from "./components/Todos";
import store from './Store';
import {Provider} from "react-redux";

const App = () => (
    <Provider store={store}>
        <div className="App">
            <Header/>
            <Todos/>
        </div>
    </Provider>
)

export default App;
