import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { notifySuccess, notifyError } from "../notification/notificationSlice";

const initialState = {
  profile: [],
  status: "idle",
};

export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async (id, thunkAPI) => {
    const { getFirestore } = thunkAPI.extra;
    const firestore = getFirestore();
    const doc = await firestore.get({ collection: "profiles", doc: id });
    // console.log("data", profile.data());
    // collection.forEach((doc) => {
    //   if (doc.id === id) {
    //     profiles.push(doc.data());
    //   }
    // });
    return { ...doc.data() };
  }
);
export const addProfile = createAsyncThunk(
  "profile/addProfile",
  async (newProfile, thunkAPI) => {
    const { getFirestore, getFirebase } = thunkAPI.extra;
    const firestore = getFirestore();
    const firebase = getFirebase();
    const dispatch = thunkAPI.dispatch;

    // set logo
    const logoFile = newProfile.logo;
    let url = newProfile.logo;

    if (logoFile && typeof logoFile === "object") {
      const storageRef = firebase.storage().ref("/images");
      const fileRef = storageRef.child(logoFile.name);
      await fileRef.put(logoFile);
      url = await fileRef.getDownloadURL();
    }

    const currentUser = firebase.auth().currentUser.uid;

    try {
      const doc = await firestore.update(
        { collection: "profiles", doc: currentUser },
        { ...newProfile, logo: url }
      );
      dispatch(
        notifySuccess({
          text: "Profile has been updated successfully.",
          action: "Create new",
        })
      );
      return { ...newProfile, logo: url };
    } catch (ex) {
      dispatch(
        notifyError({
          text: "Profile could not be updated.Please try again later.",
          action: "Cancel",
        })
      );
    }
  }
);

export const addUserProfile = createAsyncThunk(
  "profile/addUserProfile",
  async (newProfile, thunkAPI) => {
    const { getFirestore, getFirebase } = thunkAPI.extra;
    const firestore = getFirestore();
    const firebase = getFirebase();
    const dispatch = thunkAPI.dispatch;

    console.log("sice new profile", newProfile);
    // cv
    const cvFile = newProfile.cvFile;
    let cvUrl = newProfile.cvFile;

    if (cvFile && typeof cvFile === "object") {
      // file uploaded
      console.log("object");
      const cvStorageRef = firebase.storage().ref("/cv");
      console.log("1");
      const cvFileRef = cvStorageRef.child(cvFile.name);
      console.log("2");
      await cvFileRef.put(cvFile);
      console.log("3");
      cvUrl = await cvFileRef.getDownloadURL();
      console.log("4");
    } else if (typeof cvUrl === "undefined") {
      // property empty
      cvUrl = "";
    }

    // img
    const logoFile = newProfile.img;
    let url = newProfile.img;

    if (logoFile && typeof logoFile === "object") {
      const storageRef = firebase.storage().ref("/images");
      const fileRef = storageRef.child(logoFile.name);
      await fileRef.put(logoFile);
      url = await fileRef.getDownloadURL();
    }

    const currentUser = firebase.auth().currentUser.uid;

    try {
      const doc = await firestore.update(
        { collection: "profiles", doc: currentUser },
        { ...newProfile, img: url, cvFile: cvUrl }
      );
      dispatch(
        notifySuccess({
          text: "Profile has been updated successfully.",
          action: "Create new",
        })
      );
      return { ...newProfile, img: url, cvFile: cvUrl };
    } catch (ex) {
      dispatch(
        notifyError({
          text: "Profile could not be updated.Please try again later.",
          action: "Cancel",
        })
      );
    }
  }
);

export const createProfile = createAsyncThunk(
  "profile/createProfile",
  async (data, thunkAPI) => {
    const { getFirestore } = thunkAPI.extra;
    const firestore = getFirestore();
    if (!data.is_company) {
      data = {
        ...data,
        workExperience: [],
        education: [],
        firstName: "",
        lastName: "",
      };
    }
    const doc = await firestore.set(
      { collection: "profiles", doc: data.id },
      { ...data }
    );

    return data;
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
      state.profile = action.payload;
    },
    [fetchProfile.rejected]: (state) => {
      state.status = "error";
    },
    [addProfile.pending]: (state) => {
      state.status = "loading";
    },
    [addProfile.fulfilled]: (state, action) => {
      state.status = "added";
      state.profile = action.payload;
    },
    [addProfile.rejected]: (state) => {
      state.status = "error";
    },
    [addUserProfile.pending]: (state) => {
      state.status = "loading";
    },
    [addUserProfile.fulfilled]: (state, action) => {
      state.status = "added";
      state.profile = action.payload;
    },
    [addUserProfile.rejected]: (state) => {
      state.status = "error";
    },
    [createProfile.pending]: (state) => {
      state.status = "loading";
    },
    [createProfile.fulfilled]: (state, action) => {
      state.status = "added";
      state.profile = action.payload;
    },
    [createProfile.rejected]: (state) => {
      state.status = "error";
    },
    [HYDRATE]: (state, action) => {
      state.status = action.payload.profile.status;
      state.profile = action.payload.profile.profile;
    },
  },
});

export const {} = profileSlice.actions;

export default profileSlice;
