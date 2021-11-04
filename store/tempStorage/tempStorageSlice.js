import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  company: [],
  profile: [],
  status: "idle",
};

export const fetchSingleProfile = createAsyncThunk(
  "tempStorage/fetchSingleProfile",
  async (id, thunkAPI) => {
    const { getFirestore } = thunkAPI.extra;
    const firestore = getFirestore();
    const doc = await firestore.get({ collection: "profiles", doc: id });
    return { ...doc.data() };
  }
);

export const fetchCompany = createAsyncThunk(
  "tempStorage/fetchCompany",
  async (_, thunkAPI) => {
    const { getFirestore } = thunkAPI.extra;
    const firestore = getFirestore();
    const collection = await firestore.get("profiles");
    let companies = [];

    collection.forEach((doc) => {
      const data = doc.data();
      companies.push({
        ...data,
        id: doc.id,
      });
    });
    return companies;
  }
);

const tempStorageSlice = createSlice({
  name: "tempStorage",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCompany.pending]: (state) => {
      state.status = "loading";
    },
    [fetchCompany.fulfilled]: (state, action) => {
      state.status = "idle";
      state.company = action.payload;
    },
    [fetchCompany.rejected]: (state) => {
      state.status = "error";
    },
    [fetchSingleProfile.pending]: (state) => {
      state.status = "loading";
    },
    [fetchSingleProfile.fulfilled]: (state, action) => {
      state.status = "idle";
      state.profile = action.payload;
    },
    [fetchSingleProfile.rejected]: (state) => {
      state.status = "error";
    },
    [HYDRATE]: (state, action) => {
      state.status = action.payload.tempStorage.status;
      state.company = action.payload.tempStorage.company;
      state.profile = action.payload.tempStorage.profile;
    },
  },
});

export const {} = tempStorageSlice.actions;

export default tempStorageSlice;
