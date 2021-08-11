import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import AuthProvider from "./providers/useAuth";
import Guard from "./routes/guard";
import ComposeTweet from './pages/CreateTweet';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
              <LandingPage />
          </Route>

          <Route exact path="/login">
              <Login />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>

          <Route exact path="/home">
            <Guard>
              <Home />
            </Guard>
          </Route>

          <Route exact path="/explore">
              <Guard>
                <Explore />
              </Guard>
          </Route>

          <Route exact path="/compose/tweet">
              <Guard>
                <ComposeTweet />
              </Guard>
          </Route>

          <Route path="*" component={() => "404, Not found"} />

        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
