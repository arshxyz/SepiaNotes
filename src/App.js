import theme from "./theme/MuiTheme";
import {ThemeProvider } from "@material-ui/core/styles";
import { MainLayout } from "./components/MainLayout";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <div>
        <Router>
      <ThemeProvider {...{theme}}>
        <Switch>
          <Route exact path="/">
        <MainLayout />
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
        </Switch>
      </ThemeProvider>
      </Router>

    </div>
  );
}

export default App;
