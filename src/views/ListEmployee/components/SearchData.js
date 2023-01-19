import React from 'react';
import {TextField} from "@mui/material";

const SearchData = ({setSearch,data}) => {
    const changeSearchText = (e) => {

    }
    return (
            <TextField
                onChange={(e)=>setSearch(data.filter(item => item.firstName.includes(e.target.value)))}
                label="Ara (Ad ile)"
                size="medium"
                type="search"
                variant="standard"
            sx={{
                width:"100%",
                marginBottom:"40px",
                minWidth:"200px",
                maxWidth:"400px"
            }}
            />
    );
};

export default SearchData;