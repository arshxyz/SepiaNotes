import { ListItem, ListItemText, Typography, makeStyles, Container, Divider } from "@material-ui/core";
import stripHTML from "../../Utils/striphtml";

const useStyles = makeStyles((theme) => ({
    inline: {
        display: "inline",
    },
    listItem: {
        cursor: "pointer",
    }
}))

const NoteListItem = ({title, content}) => {
    const trimmedContent = stripHTML(content).slice(0, 80); 
    const classes = useStyles();
    return (
        <>
        <Divider />
    <ListItem alignItems="flex-start" className={classes.listItem}>
    <ListItemText 
    style={{wordWrap: "break-workd"}}
      primary={title}
      secondary={
        <>
          {trimmedContent}

        </>
      }
    />
  </ListItem>
  </>
    )
}

export default NoteListItem;