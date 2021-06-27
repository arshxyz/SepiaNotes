import { makeStyles, Paper, Button } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, modifyNote } from "../../Store/NotesSlice";
import EditorComponent from "./EditorComponent";

const useStyles = makeStyles((theme) => ({
  editorContainer: {
    margin: "5rem 5rem auto auto",
    width: "80%",
    height: "calc(100vh - 10rem)",
    [theme.breakpoints.down("md")]: {
      margin: "2rem 2rem auto auto",
      // width: "95%"
      // width: "calc(75% + 6rem)",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "100vh",
      margin: "0",
      borderRadius: "0",
    },
  },
}));

export const EditorContainer = ({ children }) => {
  const titleState = useState("");
  const contentState = useState("");
  const dispatch = useDispatch();
  const viewing = useSelector((state) => state.ui.viewing);
  const classes = useStyles();
  const handleSave = () => {
    const data = { title: titleState[0], content: contentState[0] };
    dispatch(modifyNote({ id: viewing, data: data }));
  };
  return (
    <Paper className={classes.editorContainer}>
      <EditorComponent titleState={titleState} contentState={contentState} />
      <div style={{ display: "flex" }}>
        <Button
          style={{ margin: "auto 2rem auto auto" }}
          color="primary"
          variant="contained"
          onClick={() => {
            dispatch(deleteNote(viewing));
          }}
        >
          Delete
        </Button>
        <Button
          style={{ marginRight: "1rem" }}
          color="primary"
          variant="contained"
          onClick={handleSave}
        >
          Save
        </Button>
      </div>
    </Paper>
  );
};
