import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  profile: [],
  status: "idle",
};

export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async (id, thunkAPI) => {
    const { getFirestore } = thunkAPI.extra;
    const firestore = getFirestore();
    // const querySnapshot = await getDocs(collection(firestore, "jobs"));
    const collection = await firestore.get("profiles");
    const profiles = [];
    collection.forEach((doc) => {
      if (doc.id === id) {
        profiles.push(doc.data());
      }
    });

    return profiles;
  }
);
export const addProfile = createAsyncThunk(
  "profile/addProfile",
  async (newProfile, thunkAPI) => {
    const { getFirestore, getFirebase } = thunkAPI.extra;
    const firestore = getFirestore();
    const firebase = getFirebase();
    const newProfileData = {
      newProfile,
    };
    const doc = await firestore.add({ collection: "profiles" }, newProfileData);

    return { ...newProfileData, id: doc.id };
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProfile.pending]: (state) => {
      state.status = "loading";
    },
    [fetchProfile.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.profiles = action.payload;
    },
    [fetchProfile.rejected]: (state) => {
      state.status = "error";
    },
    [addProfile.pending]: (state) => {
      state.status = "loading";
    },
    [addProfile.fulfilled]: (state, action) => {
      state.status = "added";
      state.profiles = action.payload;
    },
    [addProfile.rejected]: (state) => {
      state.status = "error";
    },
    [HYDRATE]: (state, action) => {
      state.status = action.payload.profiles.status;
      state.profiles = action.payload.profiles.profiles;
    },
  },
});

export const {} = profileSlice.actions;

export default profileSlice;
