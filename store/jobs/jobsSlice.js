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
    const collection = await firestore.get({
      collection: "jobs",
      orderBy: ["timestamp", "desc"],
    });
    let jobs = [];

    collection.forEach((doc) => {
      const data = doc.data();
      jobs.push({
        ...data,
        id: doc.id,
        timestamp: data.timestamp.toMillis(),
      });
    });
    return jobs;
  }
);

// export const fetchSingleJob = createAsyncThunk(
//   "jobs/fetchSingleJob",
//   async (id, thunkAPI) => {
//     const { getFirestore } = thunkAPI.extra;
//     const firestore = getFirestore();
//     const doc = await firestore.get({ collection: "jobs", doc: id });
//     return { ...doc.data() };
//   }
// );

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

    const currentUser = firebase.auth().currentUser.uid;

    const newJobData = {
      ...newJob,
      company_id: currentUser,
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
      const data = { ...newJobData, id: doc.id };
      return data;
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
      state.jobs = [...state.jobs, action.payload];
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
