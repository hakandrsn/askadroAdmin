import React from 'react';
import {Drawer, DrawerHeader} from "../../Styleds/adminLayoutStyled";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import {dashboardRoutes} from "../../routes";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import {Link} from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {useDispatch, useSelector} from "react-redux";
import {useTheme} from "@mui/material/styles";
import {setSidebarOpen} from "../../redux/features/layout/layoutSlice";

const Sidebar = ({routes}) => {
    const theme = useTheme();
    const {isSidebarOpen} = useSelector(state => state.layout)
    const dispactch = useDispatch();
    const handleDrawerClose = () => {
        dispactch(setSidebarOpen(false))
    };
    return (
        <Drawer variant="permanent" open={isSidebarOpen}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {routes.map((e, index) => (
                    <ListItem key={e.path} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: isSidebarOpen ? 'initial' : 'center',
                                px: 2.5,
                            }}
                            component={Link} to={e.layout + e.path}>
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: isSidebarOpen ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {e.icon}
                            </ListItemIcon>
                            <ListItemText primary={e.name} sx={{ opacity: isSidebarOpen ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: isSidebarOpen ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: isSidebarOpen ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} sx={{ opacity: isSidebarOpen ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;