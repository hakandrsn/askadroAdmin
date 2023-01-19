import React, {useEffect} from 'react';
import {
    Autocomplete, Box,
    Fab,
    FormControl,
    FormGroup, FormHelperText, Input, InputAdornment, InputLabel,
    MenuItem,
    Select,
    TextField
} from '@mui/material';
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as PropTypes from "prop-types";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {cities} from "../../../utils/cities";
import {Navigation} from "@mui/icons-material"
import {useCreateAccountMutation} from "../../../redux/features/account/accountSlice";
import {toast} from "react-toastify";

const phoneRegex = /^\(?([0-9]{3,4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const schema = yup.object({
    firstName: yup.string().matches(/^[a-zA-Zşçğöıİ ]+$/i, "Geçerli bir isim giriniz").required(),
    lastName: yup.string().matches(/^[a-zA-Zşçğöıİ ]+$/i, "Geçerli bir soyad giriniz").required(),
    tc: yup.string().matches(/^[0-9]{11}$/, "Tc'yi Kontrol ediniz").required(),
    phone: yup.string().matches(phoneRegex).required("Telefon numarası girilmeli"),
    city: yup.string().required("Şehri giriniz"),
    semt: yup.string().required("Lütfen semt bilgisi doldurun"),
    address: yup.string().required("Mahallesi ve sokak bilgisi giriniz"),
    birthDate: yup.object().required("Doğum tarihi gerekli"),
    iban: yup.string().matches(/^[TR]{2}([0-9]{24})$/, "İbanı kontrol edin."),
    sex: yup.string().required("Lütfen cinsiyet seçiniz.")
}).required();

const Form = ({defaultValue}) => {
    const [createAccount, response] = useCreateAccountMutation();
    const {control, reset, register, handleSubmit, formState: {errors}, getValues} = useForm({
        resolver: yupResolver(schema),
        defaultValues: defaultValue ? defaultValue : {
            firstName: "",
            lastName: "",
            tc: "",
            phone: "",
            city: "",
            semt: "",
            address: "",
            birthDate: "",
            sex: "erkek",
            iban: "TR"
        }
    });

    const showError = (e) => {
        if (e !== {}) {
            const errorList = Object.keys(e);
            return errorList.map((name, i) => {
                return (
                    <FormHelperText key={i}>
                        {e[name].message}
                    </FormHelperText>
                )
            })
        }
    }
    const onSubmit = async (data) => {
        if (typeof data.birthDate === "object") {
            if (typeof data.birthDate.calendar() === "string") {
                const user = {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    tc: data.tc,
                    phone: data.phone,
                    city: data.city,
                    semt: data.semt,
                    address: data.address,
                    sex: data.sex,
                    birthDate: data.birthDate.calendar(),
                    iban: data.iban
                }
                const res = await createAccount(user);
                if (res) {
                    if (res.error) toast.error(res?.error?.data?.message)
                    if (res.data) toast.success(res?.data?.message)
                }
            }
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
                <Controller
                    render={({field}) => (
                        <FormControl>
                            <TextField {...field} label="Ad*" size="small" variant="standard"/>
                        </FormControl>
                    )}
                    name="firstName"
                    control={control}
                />

                <FormControl>
                    <Controller
                        render={({field}) => <TextField id="lastName" label="Soyad*" size="small"
                                                        variant="standard" {...field} />} name="lastName" id="lastName"
                        defaultValue=""
                        control={control}
                    />
                </FormControl>
                <FormControl>
                    <Controller
                        render={({field}) => <TextField id="tc" label="TC*" size="small"
                                                        variant="standard" {...field} />} name="tc" id="tc"
                        defaultValue=""
                        control={control}
                    />
                </FormControl>
                <FormControl>
                    <Controller
                        render={({field}) => <TextField id="phone" label="Telefon*" size="small"
                                                        variant="standard" {...field} />} name="phone" id="phone"
                        defaultValue=""
                        control={control}
                    />
                </FormControl>
                <FormControl>
                    <Controller
                        render={({field}) => <Autocomplete
                            {...field}
                            options={cities}
                            onChange={(event, value) => {
                                field.onChange(value.name)
                            }}
                            blurOnSelect
                            getOptionLabel={(option) => option.name}
                            value={field.value.name}
                            renderInput={(params) => (
                                <TextField {...params} label="Şehir*"
                                           variant="standard"/>
                            )}/>}
                        name="city" control={control}/>
                </FormControl>
                <FormControl>
                    <Controller
                        render={({field}) => <TextField label="Semt*" size="small" variant="standard" {...field} />}
                        name="semt" id="semt"
                        defaultValue=""
                        control={control}
                    />
                </FormControl>
                <FormControl>
                    <Controller
                        render={({field}) => <TextField multiline maxRows={3} id="address" label="Adres*" size="small"
                                                        variant="standard" {...field} />} name="address" id="address"
                        defaultValue=""
                        control={control}
                    />
                </FormControl>
                <FormControl>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <Controller
                            render={({field}) => <DatePicker
                                disableFuture label="Doğum Tarihi (ay/gün/yıl)*" {...field}
                                renderInput={(params) => <TextField {...params}
                                                                    variant="standard"/>}/>}
                            name="birthDate" id="birthDate"
                            defaultValue=""
                            control={control}
                        />
                    </LocalizationProvider>
                </FormControl>
                <FormControl>
                    <Controller
                        render={({field}) => (
                            <Select label="Cinsiyet*" variant="standard" {...field}>
                                <MenuItem value="erkek">Erkek</MenuItem>
                                <MenuItem value="kadın">Kadın</MenuItem>
                                <MenuItem value="nosex">Belirtmek İstemiyor</MenuItem>
                            </Select>
                        )
                        }
                        name="sex" id="sex"
                        control={control}
                    />
                </FormControl>
                <FormControl>
                    <Controller render={({field}) => <TextField
                        {...field}
                        label="İban"
                        variant="standard"
                    />} name="iban" id="iban" control={control}/>
                </FormControl>

            </FormGroup>

            <Box display="flex" justifyContent={"center"} width="100%" sx={{marginY: 3}}>
                <Fab variant="extended" size="medium" type="submit" color="default" aria-label="add">
                    <Navigation sx={{mr: 1}}/>
                    EKLE
                </Fab>
            </Box>
            {showError(errors)}
        </form>
    );
};

export default Form;