import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
//layouts
import AdminLayout from "./layouts/Admin.js"
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {CssBaseline} from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ToastContainer/>
        <CssBaseline/>
        <BrowserRouter>
            <Switch>
                <Route path="/admin" render={(props)=> <AdminLayout {...props} />} />
                <Redirect from="/" to="/admin/dashboard" />
            </Switch>
        </BrowserRouter>
    </Provider>
);