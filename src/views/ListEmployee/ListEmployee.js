import React from 'react';
import EmployeeTable from "./components/EmployeeTable";
import {useGetPersonelsQuery} from "../../redux/features/personel/personelSlice";
import SearchData from "./components/SearchData";
import {Badge, IconButton} from "@mui/material";
import {SyncLoader} from "react-spinners";
import {Person} from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";


const ListEmployee = () => {
    const {data, error, isLoading} = useGetPersonelsQuery();
    const addedData = useSelector(state => state.data.addedData);
    const [search, setSearch] = React.useState([]);
    if (isLoading) return <Grid container display="flex" justifyContent="center" alignItems="center"><SyncLoader
        color={"#3f51b5"} loading={isLoading} size={75}/></Grid>
    if (error) return <div>Something went wrong</div>
    return (
        <Grid container spacing={2}>
            <Grid item display="flex" justifyContent="space-between" alignItems="center" width="100%" marginX={4}>
                <SearchData setSearch={setSearch} data={data}/>
                <IconButton>
                    <Link to="/admin/sendemployee">
                    <Badge badgeContent={addedData.length} color="error" max={50}>
                        <Person color="action"/>
                    </Badge>
                    </Link>
                </IconButton>
            </Grid>
            <Grid item width="100%">
                {data && <EmployeeTable data={search.length > 0 ? search : data}/>}
            </Grid>
        </Grid>
    );
};

export default ListEmployee;