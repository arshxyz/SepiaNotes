import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { makeStyles } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import IconButton from '@material-ui/core/IconButton';
import { Hidden } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../Store/store'
import { setEditorOpen } from '../../Store/UISlice';

const useStyles = makeStyles((theme) => ({
  mainEditor: {
    height: "calc(100% - 5rem)",
    marginBottom: "0"
  },
  noteTitle: {
    padding: theme.spacing(1),
    fontSize: "26px",
    width: "50%",
    paddingLeft: "1rem",
    color: theme.palette.primary.main,
    // textAlign: "center"
  }
}))

export default function EditorComponent() {
  const viewing = useSelector(state => state.ui.viewing)
  const classes = useStyles();
  const dispatch = useDispatch()
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
      <div className={classes.mainEditor}>
      {/* <Typography variant="h5" align="center" className={classes.noteTitle}>Note title</Typography> */}
        <Hidden smUp>
      <span style={{width: "3rem", display:"inline-block"}}>

        <IconButton onClick={() => {dispatch(setEditorOpen(false))}}> <KeyboardBackspaceIcon /></IconButton>
      </span>
        </Hidden>
      <span style={{paddingRight: "3rem",  marginRight: "0"}}>
      <InputBase className={classes.noteTitle} placeholder="New Note"></InputBase>
      </span>
      <Editor
        apiKey="2m5fe6fmz0ykn96y1tr5qankprk8dsqhw26guyjtnoytn8jv"
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue={viewing === 0 ? "" : store.getState().notes[viewing].content}
        init={{
          statusbar: false,
            height: "100%",
            content_css:"/Editor.css",
            skin_url: "https://arshxyz.github.io/SepiaNotes-tinymce-css/ui/",
          menubar: false,
          skin: "outside",
          branding: false,
          toolbar: 'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' 
        }}
      />
      </div>
  );
}
