import { nanoid } from "nanoid";
import { createNote, modifyNote } from "./NotesSlice"
import store from "./store"
import { view } from "./UISlice";

const createActionMiddleware = store => next => action => {
    if (action.type === 'ui/modifyNote'){
        if (store.getState().ui.viewing === 0){
            let id = nanoid()
            store.dispatch(createNote({data: action.payload.data, id: id}))
            store.dispatch(view(id))
            return;
        }
    }
    next(action)
}

const rejectEmpty = store => next => action => {
    if (action.type === 'ui/modifyNote' || action.type === 'ui/createNote') {
        if (!action.payload.data.content || !action.payload.data.title){
            return;
        }
    }
    next(action);
}

const switchOnDelete = store => next => action => {
    if (action.type === 'ui/deleteNote') {
        store.dispatch(view(0))

    }
    next(action);
}
  
  export {createActionMiddleware, rejectEmpty ,switchOnDelete}