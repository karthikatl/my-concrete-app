
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedConcreteId: null,
};


const concreteSlice = createSlice({
  name: 'concrete',
  initialState,
  reducers: {
    selectConcrete: (state, action) => {
      state.selectedConcreteId = action.payload;
    },
  },
});

export const { selectConcrete } = concreteSlice.actions;

export const selectSelectedConcreteId = state => state.concrete.selectedConcreteId;

export default concreteSlice.reducer;
