import React, {useEffect} from 'react';
import Form from "./components/Form";
import {useGetAccountQuery, useGetAccountsQuery} from "../../redux/features/account/accountSlice";

const AddEmployee = () => {
    const {data,error,isLoading} = useGetAccountsQuery();
    useEffect(() => {
        document.title = "Personel Ekle"
        console.log(error,isLoading)
    }, [])
    return (
        <div>
            {Form([])}
        </div>
    );
};

export default AddEmployee;