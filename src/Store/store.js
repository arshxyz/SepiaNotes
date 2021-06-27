import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  createActionMiddleware,
  rejectEmpty,
  switchOnDelete,
} from "./Middleware";
import noteReducer from "./NotesSlice";
import uiReducer from "./UISlice";

export default configureStore({
  reducer: {
    notes: noteReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      rejectEmpty,
      createActionMiddleware,
      switchOnDelete
    ),
});
