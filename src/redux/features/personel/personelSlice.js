import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const url = process.env.REACT_APP_BASE_URL+"/personel";
export const personelApi = createApi({
    reducerPath: 'personelApi',
    baseQuery: fetchBaseQuery({baseUrl: url}),
    tagTypes: ['Personel'],
    endpoints: (builder) => ({
        getPersonels: builder.query({
            query: () => 'all',
            providesTags: ['Personel'],
        }),
        getPersonel: builder.query({
            query: (id) => `one/${id}`,
            providesTags: (result, error, id) => [{type: 'Personel', id}],
        }),
        createPersonel: builder.mutation({
            query(body) {
                return {
                    url: 'new',
                    method: 'POST',
                    body
                }
            },
            invalidatesTags: [{type: 'Personel', id: 'LIST'}],
        }),
        updatePersonel: builder.mutation({
            query(data) {
                const {id, ...body} = data;
                return {
                    url: `update/${id}`,
                    method: 'PUT',
                    body
                }
            },
            invalidatesTags: [{type: 'Personel', id: 'LIST'}],
        }),
        deletePersonel: builder.mutation({
            query(id) {
                return {
                    url: `delete/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: [{type: 'Personel', id: 'LIST'}],
        })
    })
})

export const {
    useGetPersonelsQuery,
    useGetPersonelQuery,
    useCreatePersonelMutation,
    useUpdatePersonelMutation,
    useDeletePersonelMutation
} = personelApi;
