import { createAction, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  notifications: [],
};

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    notifyError: (state, action) => {
      state.notifications.push({
        ...action.payload,
        id: nanoid(),
        type: "error",
      });
    },
    notifySuccess: (state, action) => {
      state.notifications.push({
        ...action.payload,
        id: nanoid(),
        type: "success",
      });
    },
    notifyDelete: (state, action) => {
      state.notifications = state.notifications.filter(
        (msg) => msg.id !== action.payload
      );
    },
  },
  extraReducers: {},
});

export const { notifyError, notifySuccess, notifyDelete } =
  notificationSlice.actions;
export default notificationSlice;
