import "./App.css";
import UserLogin from "./Login/userLogin";
import Signup from "./Signup/signUp";
import Header from "./Header/header";
import { Switch, Route } from "react-router-dom";
import UserMenu from "./UserMenu/userMenu";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <AuthProvider>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Header />
            <Switch>
              <Route exact path="/" component={UserLogin} />
              <Route path="/signup" component={Signup} />
              <Route path="/report" component={UserMenu} />
            </Switch>
          </div>
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
