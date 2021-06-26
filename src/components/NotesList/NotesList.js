import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import NoteListItem from './NoteListItem';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "0",
    width: '100%',
    backgroundColor: theme.palette.primary.secondary,
    height: "80%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "auto",

  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
        <NoteListItem title="test" content="fdakfjas fdja kfad fadjsk d fjk fdajsk f asdkj" />
        <NoteListItem title="test" content="fdakfjas fdja kfafdakfjas fdja kfa" />
        <NoteListItem title="test" content="fdakfjas fdja kfafdakfjas fdja kfa" />
         </List>
  );
}