import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the base queries
const baseQuery1 = fetchBaseQuery({ baseUrl: 'https://fp-ardrecruiting-prod-001-func.azurewebsites.net/api/concretepurpose' });
const baseQuery2 = fetchBaseQuery({ baseUrl: 'https://fp-ardrecruiting-prod-001-func.azurewebsites.net/api/concretedetails' });

// Custom base query function
const customBaseQuery = async (args, api, extraOptions) => {
  if (args.baseQuery === 'baseQuery1') {
    return baseQuery1(args, api, extraOptions);
  } else if (args.baseQuery === 'baseQuery2') {
    return baseQuery2(args, api, extraOptions);
  }
  return { error: 'Invalid base query' };
};

// Create the API slice
export const concreteApi = createApi({
  reducerPath: 'concreteApi',
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    getConcretes: builder.query({
      query: () => ({ baseQuery: 'baseQuery1', url: '' }),
    }),
    getConcreteDetails: builder.query({
      query: (designatedConcrete) => ({ baseQuery: 'baseQuery2', url: `?designatedConcrete=${designatedConcrete}` }),
    }),
  }),
});

export const { useGetConcretesQuery, useGetConcreteDetailsQuery } = concreteApi;
