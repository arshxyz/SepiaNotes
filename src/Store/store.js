import { configureStore } from '@reduxjs/toolkit'
import noteReducer from './NotesSlice' 
import uiReducer from './UISlice' 

export default configureStore({
  reducer: {
    notes: noteReducer,
    ui: uiReducer,
  },
})