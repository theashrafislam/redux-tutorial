import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com'
    }),
    endpoints: (build) => ({
        getProductsData: build.query({
            query: () => '/products'
        })
    })

});

export const { useGetProductsDataQuery } = productsApi;