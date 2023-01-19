import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const url = process.env.REACT_APP_BASE_URL+"/account";
export const accountApi = createApi({
    reducerPath: 'accountApi',
    baseQuery: fetchBaseQuery({baseUrl: url}),
    tagTypes: ['Account'],
    endpoints: (builder) => ({
        getAccounts: builder.query({
            query: () => 's',
            providesTags: ['Account'],
        }),
        getAccount: builder.query({
            query: (id) => `one/${id}`,
            providesTags: (result, error, id) => [{type: 'Account', id}],
        }),
        createAccount: builder.mutation({
            query(body) {
                return {
                    url: 'newpersonel',
                    method: 'POST',
                    body
                }
            },
            invalidatesTags: [{type: 'Account', id: 'LIST'}],
        }),
        updateAccount: builder.mutation({
            query(data) {
                const {id, ...body} = data;
                return {
                    url: `update/${id}`,
                    method: 'PUT',
                    body
                }
            },
            invalidatesTags: [{type: 'Account', id: 'LIST'}],
        }),
        deleteAccount: builder.mutation({
            query(id) {
                return {
                    url: `delete/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: [{type: 'Account', id: 'LIST'}],
        })
    })
})

export const {
    useGetAccountsQuery,
    useGetAccountQuery,
    useCreateAccountMutation,
    useUpdateAccountMutation,
    useDeleteAccountMutation
} = accountApi;
