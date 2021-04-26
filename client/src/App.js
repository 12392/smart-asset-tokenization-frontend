import Login from "./component/user/login";
import Dashboard from "./component/user/dashboard";
import Index1 from "./component/user/index1";
import Index2 from "./component/user/index2";
import { Switch, Route, Redirect } from "react-router-dom";
import "./asset/css/App.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/index1" component={Index1} />
        <Route exact path="/index2" component={Index2} />
      </Switch>
    </>
  );
}

export default App;
