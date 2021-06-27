import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "notes",
  initialState: {
    fdafdfdfdfa: {
      title: "Completed: Implement Redux",
      content:
        "<h3>Use @reduxjs/toolkit for state management - </h3> Read up on redux docs and transition to redux store from React's useState hooks",
    },
    fdafdsaffa: {
      title: "Todo: Firebase auth",
      content:
        "<h3>Implement firebase auth to log in user - </h3> Add options for logging in with Google and Email",
    },
    fdafdafda: {
      title: "Todo: Firestore",
      content:
        "<h2>Sync with firestore</h2> Use <b>createAsyncThunk</b> for redux integration with firestore document queries.</br> Also add debounced autosave (with lodash) ",
    },
    fdaffdsfqdioa: {
      title: "Todo: Markdown support",
      content: "Look for Github flavooured markdown plugins for tinyMCE ",
    },
  },
  reducers: {
    createNote: (state, action) => {
      state[action.payload.id] = action.payload.data;
      // state.
    },
    modifyNote: (state, action) => {
      state[action.payload.id] = action.payload.data;
    },
    deleteNote: (state, action) => {
      let oldState = Object.assign({}, state);
      delete oldState[action.payload];
      console.log(oldState);
      return oldState;
    },
  },
});

export const { createNote, modifyNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;
