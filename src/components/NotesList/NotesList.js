import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import NoteListItem from './NoteListItem';
import { useDispatch, useSelector } from 'react-redux';
import { setEditorOpen, view } from '../../Store/UISlice';

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
  const notes = useSelector((state) => state.notes)
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(notes)
  }, [notes])

  return (
    <List className={classes.root}>
       {Object.keys(notes).map((item) => (
         <div key={item} onClick={() => {dispatch(view(item)); dispatch(setEditorOpen(true))}}>
           <NoteListItem key={item} title={notes[item].title} content={notes[item].content}/>

         </div>
        // <h1> {item.title}</h1>
         
       ))}
         </List>
  );
}