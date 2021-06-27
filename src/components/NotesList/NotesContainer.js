import { makeStyles, Paper } from "@material-ui/core";
import { NotesBar } from "./NotesBar";

const useStyles = makeStyles((theme) => ({
  notesContainer: {
    margin: "5rem 0 5rem 5rem",
    width: "100%",
    height: "calc(100vh - 10rem)",
    [theme.breakpoints.down("md")]: {
      margin: "2rem 0 2rem 2rem",
      width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "100vh",
      margin: "0",
      borderRadius: "0",
    },
  },
  notesListContainer: {
    // overflow: "hidden",
    height: "100%",
  },
}));
export const NotesContainer = ({ children }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.notesContainer}>
      <NotesBar />
      <div className={classes.notesListContainer}>{children}</div>
    </Paper>
  );
};
