import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { notifySuccess, notifyError } from "../notification/notificationSlice";

const initialState = {
  jobs: [],
  status: "idle",
  lastRequest: null,
};

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async (_, thunkAPI) => {
    const { getFirestore } = thunkAPI.extra;
    const firestore = getFirestore();
    const collection = await firestore.get("jobs");
    const jobs = [];
    collection.forEach((doc) => {
      jobs.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    return jobs;
  }
);

export const createJob = createAsyncThunk(
  "jobs/createJob",
  async (newJob, thunkAPI) => {
    const { getFirestore, getFirebase } = thunkAPI.extra;
    const firebase = getFirebase();
    const firestore = getFirestore();
    const dispatch = thunkAPI.dispatch;

    // todo for later when auth is finished
    // get current user
    // if company continue

    const newJobData = {
      ...newJob,
      company_id: "company id from auth",
      timestamp: firestore.FieldValue.serverTimestamp(),
      // timestamp: new Date(),
    };

    try {
      const doc = await firestore.add({ collection: "jobs" }, newJobData);
      dispatch(
        notifySuccess({
          text: "Job has been created successfully.",
          action: "Create new",
        })
      );
      return {
        ...newJobData,
        id: doc.id,
      };
    } catch (ex) {
      dispatch(
        notifyError({
          text: "Job was not created.Please try again later.",
          action: "Cancel",
        })
      );
    }
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
    [createJob.pending]: (state) => {
      state.status = "loading";
    },
    [createJob.fulfilled]: (state, action) => {
      state.status = "idle";
      state.jobs = action.payload;
    },
    [createJob.rejected]: (state) => {
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
