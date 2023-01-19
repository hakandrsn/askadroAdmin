import React from 'react';
import {Route} from "react-router-dom";
import {Box} from "@mui/material";
import {DrawerHeader} from "../../Styleds/adminLayoutStyled";

const Content = ({routes}) => {
    const getRoutes =(routes)=>{
        return routes.map((e,i)=>{
            if(e.layout==="/admin"){
                return(
                    <Route
                        path={e.layout + e.path}
                        render={(t)=><e.component {...t} />}
                        key={e.path}
                    />
                )
            }else {
                return null;
            }
        })
    }

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            {getRoutes(routes)}
        </Box>
    );
};

export default Content;