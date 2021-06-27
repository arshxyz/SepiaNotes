import { Typography, makeStyles, Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
    width: "100%",
    paddingTop: "2rem",
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h2" className={classes.heading}>
        SepiaText
      </Typography>

      <div
        style={{
          marginTop: "10vh",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Button variant={"contained"} color="primary">
          Login with Google
        </Button>
      </div>
      <Grid></Grid>
    </div>
  );
};

export default LoginPage;
