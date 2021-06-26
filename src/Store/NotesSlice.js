import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const noteSlice = createSlice({
    name: 'ui',
    initialState: {
            fdafa: {
                title: "fdafa0",
                content: "fdafad",
            },
            fdafdafda: {
                title: "content",
                content: "title",
            }
    },
    reducers: {
        createNote: {
            reducer: (state, action) => {
                state[action.payload.id] = action.payload.data
            },
            prepare: (content, title) => {
                console.log(title)
                return {
                    payload: {
                        id: nanoid(),
                        data: {
                            content,
                            title,
                        }
                    }
                }
            }
        }
    },

})

export const {createNote} = noteSlice.actions;
export default noteSlice.reducer;