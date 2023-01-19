import React from 'react';
import {dashboardRoutes} from "../routes";
import Sidebar from "../components/Sidebars/Sidebar";
import {Box} from "@mui/material";
import Header from "../components/Headers/Header";
import Content from "../components/Contents/Content";

const Admin = () => {
    return (
        <>
            <Box sx={{display: 'flex'}}>
                <Header/>
                <Sidebar routes={dashboardRoutes}/>
                <Content routes={dashboardRoutes}/>
            </Box>
        </>
    );
};

export default Admin;