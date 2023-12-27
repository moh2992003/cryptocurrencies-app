import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsApiHeaders = {
    'X-RapidAPI-Key': 'bba04f1fafmshd8a74b01a3be423p1b164ajsnb002af3b790b',
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
}

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk',
  headers: cryptoNewsApiHeaders,
});

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery,
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => '',
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;

export default cryptoNewsApi;
