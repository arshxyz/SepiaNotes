import { Grid, makeStyles, Chip } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';



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
        [theme.breakpoints.down('xs')]: {
            borderRadius: "0",
        }
    },
    rightIcon: {
        // marginLeft: "20%"
        textAlign: "center",
        width: "3rem"
    },
    title: {margin: "auto", paddingLeft:"3rem", color: "#ffe5a3"},

}))

export const NotesBar = () => {
    const classes = useStyles();
    const handleClick = () => {
        console.log("Clicked");
    }
    return (
        <div className={classes.notesNav}>
            <Grid container >
                <Grid item container xs={12}  alignItems="center" alignContent="center">
                    <span className={classes.title}> 
                        <Chip color="primary" label={`Arsh's Notes`} onClick={handleClick}/> 
                    </span>
                    <span className={classes.rightIcon}> <IconButton color="secondary"> <AddIcon /></IconButton> </span>
                </Grid>

              </Grid>
        </div>
    )
}