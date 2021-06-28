import { Grid, makeStyles, Chip } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch } from "react-redux";
import { createNote } from "../../Store/NotesSlice";
import { setEditorOpen, view } from "../../Store/UISlice";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  notesNav: {
    top: "0",
    height: "3rem",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "20px 20px 0 0",
    color: "#ffe5a3",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      borderRadius: "0",
    },
  },
  rightIcon: {
    // marginLeft: "20%"
    textAlign: "center",
    width: "3rem",
  },
  title: { margin: "auto", color: "#ffe5a3", paddingLeft: "3rem" },
}));

export const NotesBar = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div className={classes.notesNav}>
      <Grid container>
        <Grid item container xs={12} alignItems="center" alignContent="center">
          <span className={classes.title}>
            <Chip
              color="primary"
              label={`Arsh's Notes`}
            />
          </span>

          <span className={classes.rightIcon}>
            {" "}
            <IconButton
              color="secondary"
              onClick={() => {
                dispatch(setEditorOpen(true));
                dispatch(view(0));
              }}
            >
              {" "}
              <AddIcon />
            </IconButton>{" "}
          </span>
        </Grid>
      </Grid>
    </div>
  );
};
