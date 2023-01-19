import {createSlice} from '@reduxjs/toolkit'
import {pull, pullAllBy} from "lodash";


const initialState = {
    addedData: [],

}
export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addData: (state, action) => {
            if (!state.addedData.find(x => x.id === action.payload.id)) {
                state.addedData.push(action.payload)
            }
        },
        deleteData: (state, {payload}) => {
           pullAllBy(state.addedData,[{id:payload.id}], "id")
        }

    },
})
export const {addData,deleteData} = dataSlice.actions
export default dataSlice.reducer;