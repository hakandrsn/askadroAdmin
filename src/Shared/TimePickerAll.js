import React from 'react';
import {FormControl, TextField} from "@mui/material";
import {styled} from "@mui/material/styles";

const TimePickerAll = () => {
    const FormControlWM = styled(FormControl)({
        marginBottom: "10px"
    });
    return (
        <div>
            <FormControlWM>
                <TextField
                    id="datetime-local"
                    label="Doğum Tarihi"
                    type="datetime-local"
                    defaultValue="2000-01-01T14:00"
                    sx={{ width: 250 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                  {/*  {...register("date")}*/}
                />
            </FormControlWM>
        </div>
    );
};

export default TimePickerAll;