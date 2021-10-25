import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  jobs: [],
  status: "idle",
};

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async (_, thunkAPI) => {
    const { getFirestore } = thunkAPI.extra;
    const firestore = getFirestore();
    // const querySnapshot = await getDocs(collection(firestore, "jobs"));
    const collection = await firestore.get("jobs");
    const jobs = [];
    collection.forEach((doc) => {
      jobs.push({ ...doc.data(), id: doc.id });
    });

    return jobs;
  }
);

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchJobs.pending]: (state) => {
      state.status = "loading";
    },
    [fetchJobs.fulfilled]: (state, action) => {
      state.status = "idle";
      state.jobs = action.payload;
    },
    [fetchJobs.rejected]: (state) => {
      state.status = "error";
    },
    [HYDRATE]: (state, action) => {
      state.status = action.payload.jobs.status;
      state.jobs = action.payload.jobs.jobs;
    },
  },
});

export const {} = jobsSlice.actions;

export default jobsSlice;
