import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import counterSlice from "./counter/counterSlice";
import { getFirestore, reduxFirestore } from "redux-firestore";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import app from "../config/dbConfig";

import jobsSlice from "./jobs/jobsSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [counterSlice.name]: counterSlice.reducer,
      [jobsSlice.name]: jobsSlice.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: { getFirebase, getFirestore },
        },
        serializableCheck: false,
      }),
    enhancers: [
      reactReduxFirebase(app.firebase), // access the inner .firebase instance
      reduxFirestore(app.firebase),
    ],
  });

export const wrapper = createWrapper(makeStore);
export const selectCounter = () => (state) => state?.[counterSlice.name]?.value;
