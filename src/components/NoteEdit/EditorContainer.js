import { makeStyles, Paper, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    editorContainer: {
        margin: "5rem 5rem auto auto",
        width: "80%",
        height: "calc(100vh - 10rem)",
        [theme.breakpoints.down('md')]: {
            margin: "2rem 2rem auto auto",
            // width: "95%"
            // width: "calc(75% + 6rem)",
        },
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            height: "100vh",
            margin: "0",
            borderRadius: "0"
        }
    }

}))

export const EditorContainer = ({children}) => {
    const classes = useStyles();
    return (
        <Paper 
        className={classes.editorContainer}
        >
            {children}
            <div style={{display: "flex"}}>

            <Button style={{margin: "auto 2rem auto auto"}} color="primary" variant="contained">Delete</Button>
            <Button style={{marginRight: "1rem"}} color="primary" variant="contained">Save</Button>
            </div>
        </Paper>
    )
}