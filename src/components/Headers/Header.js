import React from 'react';
import {IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {AppBar} from "../../Styleds/adminLayoutStyled";
import {useDispatch, useSelector} from "react-redux";
import {setSidebarOpen} from "../../redux/features/layout/layoutSlice";

const Header = () => {
    const {isSidebarOpen} = useSelector(state => state.layout)
    const dispactch = useDispatch();
    const handleDrawerOpen = () => {
        dispactch(setSidebarOpen(true))
    };
    return (
        <AppBar position="fixed" open={isSidebarOpen}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        marginRight: 5,
                        ...(isSidebarOpen && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Header
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;