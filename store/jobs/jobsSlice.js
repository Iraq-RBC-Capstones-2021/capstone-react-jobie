import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";

const initialState = {
  jobs: [],
  status: "idle",
};

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async (thunkAPI) => {
    const { getFirestore } = thunkAPI.extra;
    const firestore = getFirestore();
    console.log("thunk started");
    // const querySnapshot = await getDocs(collection(firestore, "jobs"));
    const jobs = await firestore.get("jobs");
    console.log("jobs");

    jobs.forEach((job) => {
      // doc.data() is never undefined for query doc snapshots
      job.id = doc.id;
      // console.log(doc.id, " => ", doc.data());
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
      state.jobs.concat(action.payload);
    },
    [fetchJobs.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export const {} = jobsSlice.actions;

export default jobsSlice;
