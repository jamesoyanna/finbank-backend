
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

//Screens
import PrivateScreen from './components/screens/PrivateScreen/PrivateScreen';
import LoginScreen from './components/screens/Login/LoginScreen';
import RegisterScreen from "./components/screens/Register/RegisterScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPassword/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/ResetPassword/ResetPasswordScreen";

// Pages
// import Dashboard from './pages/Dashboard/Dashboard'
// import Login from './pages/Login/Login';
// import Register from './pages/Register/Register';
// import ForgotPassword from './pages/ForgotPassword/ForgotPassword';

const App  = () => {
    return (
      <Router>
        <Switch>
          {/* <Route path="/" exact component={Dashboard} />
          <Route path="/login"  component={Login} />
          <Route path="/register"  component={Register} />
          <Route path="/forgotpassword" component={ForgotPassword} /> */}

          <PrivateRoute exact path="/" component={PrivateScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/forgotpassword" component={ForgotPasswordScreen} />
          <Route
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />
        </Switch>
      </Router>
    );
}

export default App;
