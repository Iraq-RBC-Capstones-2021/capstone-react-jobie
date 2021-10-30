import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  currentUser: null,
  profileCompleted: false,
  status: "idle",
};

export const registerWithGoogle = createAsyncThunk(
  "auth/registerWithGoogle",
  async (_, thunkAPI) => {
    const { getFirestore, getFirebase } = thunkAPI.extra;
    const firestore = getFirestore();
    const firebase = getFirebase();

    const provider = new firebase.auth.GoogleAuthProvider();
    const auth = firebase.auth();
    let data = {
      currentUser: null,
      profileCompleted: false,
    };

    await auth
      .signInWithPopup(provider)
      .then((result) => {
        if (result.additionalUserInfo.isNewUser) {
          //new user
          data.currentUser = auth.currentUser.uid;
          data.profileCompleted = false;
        } else {
          // old user
          console.log(result.additionalUserInfo);
          data.currentUser = auth.currentUser.uid;
          data.profileCompleted = true;
        }
      })
      .catch((error) => {
        console.log(error);
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
        console.log(error);
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
    },
  },
});

export const { setProfileComplete } = authSlice.actions;

export default authSlice;
