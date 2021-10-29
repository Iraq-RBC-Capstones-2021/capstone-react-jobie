import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  profiles: [],
  status: "idle",
};

export const fetchprofiles = createAsyncThunk(
  "profiles/fetchprofile",
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
export const addprofile = createAsyncThunk(
  "profiles/addprofile",
  async (newProfile, thunkAPI) => {
    const { getFirestore, getFirebase } = thunkAPI.extra;
    const firestore = getFirestore();
    const firebase = getFirebase();
    // const querySnapshot = await getDocs(collection(firestore, "jobs"));
    const newProfileData = {
      newProfile,
    };
    const doc = await firestore.add({ collection: "profiles" }, newProfileData);

    return { ...newProfileData, id: doc.id };
  }
);

const profileSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchprofiles.pending]: (state) => {
      state.status = "loading";
    },
    [fetchprofiles.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.profiles = action.payload;
    },
    [fetchprofiles.rejected]: (state) => {
      state.status = "error";
    },
    [addprofile.pending]: (state) => {
      state.status = "loading";
    },
    [addprofile.fulfilled]: (state, action) => {
      state.status = "added";
      state.profiles = action.payload;
    },
    [addprofile.rejected]: (state) => {
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
