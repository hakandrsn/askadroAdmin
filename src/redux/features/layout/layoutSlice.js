import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    isSidebarOpen: true,
    isMobileSidebarOpen: false,
    drawerWidth: 240,
}
export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        setSidebarOpen: (state, action) => {
            state.isSidebarOpen = action.payload
        },
        setMobileSidebarOpen: (state, action) => {
            state.isMobileSidebarOpen = action.payload
        },
    },
})
export const { setSidebarOpen, setMobileSidebarOpen } = layoutSlice.actions
export default layoutSlice.reducer;