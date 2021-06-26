import { Grid } from "@material-ui/core"
import { EditorContainer } from "./NoteEdit/EditorContainer"
import { NotesContainer } from "./NotesList/NotesContainer"
import EditorComponent from "./NoteEdit/EditorComponent"
export const MainLayout = () => {
    return (
        <Grid container >
            <Grid item container justify={"center"} xs={12}  sm={5} md={4}>
                <NotesContainer />
            </Grid>
            <Grid item container justify="center" xs={12}  sm={7} md={8}>
                <EditorContainer >
                    <EditorComponent />
                </EditorContainer>
            </Grid>
        </Grid>
    )
}