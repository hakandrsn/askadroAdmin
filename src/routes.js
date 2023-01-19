/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "./views/Dashboard.js";
import AddCompany from "./views/AddCompany.js";
import AddEmployee from "./views/Employee/AddEmployee.js";
import ListEmployee from "./views/ListEmployee/ListEmployee.js";
import SendEmployee from "./views/sendEmployee/SendEmployee.js";
import ListWorks from "./views/ListWorks.js";

import {
    Home,
    AddBusiness,
    Engineering,
    Badge,
    ScheduleSend,
    ClearAll
} from "@mui/icons-material"

export const dashboardRoutes = [
    {
        upgrade: true,
        path: "/dashboard",
        name: "Anasayfa",
        icon: <Home />,
        component: Dashboard,
        layout: "/admin"
    },
    {
        path: "/newcompany",
        name: "Şirket Ekle",
        icon: <AddBusiness />,
        component: AddCompany,
        layout: "/admin"
    },
    {
        path: "/newemployee",
        name: "Personel Ekle",
        icon: <Engineering />,
        component: AddEmployee,
        layout: "/admin"
    },
    {
        path: "/listemployee",
        name: "Personel Listesi",
        icon: <Badge />,
        component: ListEmployee,
        layout: "/admin"
    },
    {
        path: "/sendemployee",
        name: "Personel Gönder",
        icon: <ScheduleSend/>,
        component: SendEmployee,
        layout: "/admin"
    },
    {
        path: "/works",
        name: "İş Listesi",
        icon: <ClearAll />,
        component: ListWorks,
        layout: "/admin"
    }
];

