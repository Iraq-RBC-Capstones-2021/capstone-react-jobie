import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { fetchProfile } from "../profiles/profileSlice";

const initialState = {
  currentUser: null,
  profileCompleted: false,
  userEmail: "",
  userName: "",
  status: "idle",
};

export const registerWithGoogle = createAsyncThunk(
  "auth/registerWithGoogle",
  async (_, thunkAPI) => {
    const { getFirestore, getFirebase } = thunkAPI.extra;
    const firestore = getFirestore();
    const firebase = getFirebase();
    const dispatch = thunkAPI.dispatch;

    const provider = new firebase.auth.GoogleAuthProvider();
    const auth = firebase.auth();
    let data = {
      currentUser: null,
      profileCompleted: false,
      userEmail: "",
      userName: "",
    };

    await auth
      .signInWithPopup(provider)
      .then((result) => {
        if (result.additionalUserInfo.isNewUser) {
          //new user
          data.currentUser = auth.currentUser.uid;
          data.profileCompleted = false;
          data.userEmail = result.additionalUserInfo.profile.email;
          data.userName = result.additionalUserInfo.profile.name;
        } else {
          // old user
          data.currentUser = auth.currentUser.uid;
          data.profileCompleted = true;
          data.userEmail = result.additionalUserInfo.profile.email;
          data.userName = result.additionalUserInfo.profile.name;
          dispatch(fetchProfile(data.currentUser));
        }
      })
      .catch((error) => {
        // console.log(error);
      });
    return data;
  }
);

export const logoutGoogle = createAsyncThunk(
  "auth/logoutGoogle",
  async (_, thunkAPI) => {
    const { getFirebase } = thunkAPI.extra;
    const firebase = getFirebase();
    const auth = firebase.auth();
    await auth
      .signOut()
      .then(function () {
        // Sign-out successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setProfileComplete: (state) => {
      state.profileCompleted = true;
    },
  },
  extraReducers: {
    [registerWithGoogle.pending]: (state) => {
      state.status = "loading";
    },
    [registerWithGoogle.fulfilled]: (state, action) => {
      state.status = "idle";
      state.currentUser = action.payload.currentUser;
      state.profileCompleted = action.payload.profileCompleted;
      state.userEmail = action.payload.userEmail;
      state.userName = action.payload.userName;
    },
    [registerWithGoogle.rejected]: (state) => {
      state.status = "error";
    },
    [logoutGoogle.pending]: (state) => {
      state.status = "loading";
    },
    [logoutGoogle.fulfilled]: (state, action) => {
      state.status = "idle";
      state.currentUser = null;
      state.profileCompleted = false;
    },
    [logoutGoogle.rejected]: (state) => {
      state.status = "error";
    },
    [HYDRATE]: (state, action) => {
      state.status = action.payload.auth.status;
      state.currentUser = action.payload.auth.currentUser;
      state.profileCompleted = action.payload.auth.profileCompleted;
      state.userEmail = action.payload.auth.userEmail;
      state.userName = action.payload.auth.userName;
    },
  },
});

export const { setProfileComplete } = authSlice.actions;

export default authSlice;
