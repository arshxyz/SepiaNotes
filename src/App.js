import theme from "./theme/MuiTheme";
import {ThemeProvider } from "@material-ui/core/styles";
import { NotesContainer } from "./components/NotesList/NotesContainer";
import { EditorContainer } from "./components/NoteEdit/EditorContainer";
import { MainLayout } from "./components/MainLayout";

function App() {
  return (
    <div>
      <ThemeProvider {...{theme}}>
        {/* <NotesContainer />
        <EditorContainer /> */}
        <MainLayout />
      </ThemeProvider>

    </div>
  );
}

export default App;
