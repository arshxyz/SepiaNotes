import { nanoid } from "nanoid";
import { createNote} from "./NotesSlice";
import { setEditorOpen, view } from "./UISlice";

const createActionMiddleware = (store) => (next) => (action) => {
  if (action.type === "notes/modifyNote") {
    if (store.getState().ui.viewing === 0) {
      let id = nanoid();
      store.dispatch(createNote({ data: action.payload.data, id: id }));
      store.dispatch(view(id));
      return;
    }
  }
  next(action);
};

const rejectEmpty = (store) => (next) => (action) => {
  if (action.type === "notes/modifyNote" || action.type === "notes/createNote") {
    if (!action.payload.data.content || !action.payload.data.title) {
      // error toast
      return;
    }
  }
  // success toast
  next(action);
};

const switchOnDelete = (store) => (next) => (action) => {
  if (action.type === "notes/deleteNote") {
    store.dispatch(view(0));
    store.dispatch(setEditorOpen(false))
  }
  next(action);
};

export { createActionMiddleware, rejectEmpty, switchOnDelete };
