import { Grid, useMediaQuery } from "@material-ui/core"
import { EditorContainer } from "./NoteEdit/EditorContainer"
import { NotesContainer } from "./NotesList/NotesContainer"
import EditorComponent from "./NoteEdit/EditorComponent"
import AlignItemsList from "./NotesList/NotesList"
import { useSelector } from "react-redux"
import { useEffect } from "react"

export const MainLayout = () => {
    const isLarge = useMediaQuery('(min-width: 600px)');
    const editorOpen = useSelector((state) => state.ui.editorOpen)
    useEffect(() => {
        console.log(editorOpen)
    }, [editorOpen])
    // const renderEditor = isLarge || editorOpen;

    return (
        <Grid container >
            {isLarge ? (
                <>
            <Grid item container justify={"center"} xs={12}  sm={5} md={4}>
                <NotesContainer >
                    <AlignItemsList/>
                    </NotesContainer>
            </Grid>
            <Grid item container justify="center" xs={12}  sm={7} md={8}>
                <EditorContainer >
                    <EditorComponent />
                </EditorContainer>
            </Grid>
            </>

            ) :
            ( editorOpen ? (
                <Grid item container justify="center" xs={12}  sm={7} md={8}>
                <EditorContainer >
                    <EditorComponent />
                </EditorContainer>
            </Grid>

            ): (
                <Grid item container justify={"center"} xs={12}  sm={5} md={4}>
                <NotesContainer >
                    <AlignItemsList/>
                    </NotesContainer>
            </Grid>
            )

                )}
        </Grid>
    )
}