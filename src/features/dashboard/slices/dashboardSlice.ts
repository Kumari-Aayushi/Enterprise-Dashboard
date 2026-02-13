import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDashboardData = createAsyncThunk(
  'dashboard/fetch',
  async () => {
    return {
      users: 1240,
      revenue: 45800
    };
  }
);

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: { data: null, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      });
  }
});

export default dashboardSlice.reducer;
