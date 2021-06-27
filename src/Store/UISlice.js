import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    viewing: 0,
    editorOpen: false,
  },
  reducers: {
    view: (state, action) => {
      state.viewing = action.payload;
    },
    setEditorOpen: (state, action) => {
      state.editorOpen = action.payload;
    },
  },
});

export const { view, setEditorOpen } = uiSlice.actions;
export default uiSlice.reducer;
