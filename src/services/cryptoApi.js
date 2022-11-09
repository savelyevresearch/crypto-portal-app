import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '00b6c7db5fmsh0bb7e782c9e309bp17af2bjsn96365c95a1d3',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
}

const  baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`), 
        }), 
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;

/* const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/exchanges',
    headers: {
      'X-RapidAPI-Key': '00b6c7db5fmsh0bb7e782c9e309bp17af2bjsn96365c95a1d3',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
}; */

