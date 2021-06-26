import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Container, Typography, makeStyles, Grid } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import IconButton from '@material-ui/core/IconButton';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainEditor: {
    height: "calc(100% - 4rem)",
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
  const classes = useStyles();
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

        <IconButton> <KeyboardBackspaceIcon /></IconButton>
      </span>
        </Hidden>
      <span style={{paddingRight: "3rem",  marginRight: "0"}}>
      <InputBase className={classes.noteTitle} ></InputBase>
      </span>
      <Editor
        apiKey="2m5fe6fmz0ykn96y1tr5qankprk8dsqhw26guyjtnoytn8jv"
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<h1>This is the initial content of the editor.</h1>"
        init={{
            height: "100%",
            content_css:"/Editor.css",
            skin_url: "https://arshxyz.github.io/SepiaNotes-tinymce-css/ui/",
          menubar: false,
          skin: "outside",
          branding: false,
          toolbar: 'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
        }}
      />
      </div>
  );
}
