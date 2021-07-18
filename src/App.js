import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AuthProvider from "./Providers/useAuth";
import Guard from "./routes/guard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
              <LandingPage />
          </Route>

          <Route path="/login">
              <Login />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/home">
            <Guard>
              <Home />
            </Guard>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
