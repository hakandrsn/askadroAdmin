import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query/react";
import layoutReducer from "./features/layout/layoutSlice";
import {accountApi} from "./features/account/accountSlice";
import {personelApi} from "./features/personel/personelSlice";
import {dataSlice} from "./features/dataSlice/dataSlice";
export const store = configureStore({
    reducer: {
        layout: layoutReducer,
        [accountApi.reducerPath]: accountApi.reducer,
        [personelApi.reducerPath]: personelApi.reducer,
        data: dataSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(accountApi.middleware, personelApi.middleware),

});

setupListeners(store.dispatch);