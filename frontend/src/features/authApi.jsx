import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api/v1/user",
        credentials: "include"
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (userData) => ({
                url: "/register",
                method: "POST",
                body: userData
            })
        }),
        loginUser: builder.mutation({
            query: (userData) => ({
                url: "/login",
                method: "POST",
                body: userData
            })
        })
    })
})

export const {
    useRegisterUserMutation,
    useLoginUserMutation
} = authApi