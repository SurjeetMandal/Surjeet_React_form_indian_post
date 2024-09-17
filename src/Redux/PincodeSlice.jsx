import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch pincode data
export const fetchPincodeData = createAsyncThunk(
  'pincode/fetchPincodeData',
  async (pincode) => {
    const response = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
    return response.data[0];
  }
);

const pincodeSlice = createSlice({
  name: 'pincode',
  initialState: {
    pincode: '',
    data: null,  // To store API data
    filter: '',  // For filtering post offices
    loading: false,  // For loader
    error: null,  // For error handling
  },
  reducers: {
    setPincode: (state, action) => {
      state.pincode = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPincodeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPincodeData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.PostOffice || [];
      })
      .addCase(fetchPincodeData.rejected, (state) => {
        state.loading = false;
        state.error = 'Error fetching pincode data';
      });
  },
});

export const { setPincode, setFilter } = pincodeSlice.actions;
export default pincodeSlice.reducer;
