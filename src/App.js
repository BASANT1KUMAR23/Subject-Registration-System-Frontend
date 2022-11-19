import React from "react";
import "./App.css";
import Dasshboard from "./Dashboard";
import Contact from "./components/addfaculty/Contact";
import Home2 from "./components/AddSubject/ViewUser";
import Home4 from "./components/AddSubject/StudentReg";
import Home1 from "./components/subject/UpdateSyllabusComponent";
import Home5 from "./components/AddSubject/EditUser";
import info from "./components/info/Dashboard2";
import Navbar from "./components/layout/Navbar1";
import Dasshboard1 from "./components/student/Navbar";
import Login from "./components/student/Login";
import Registration from "./components/student/Registration";
import Status from "./components/student/Status";
import LandingPage from "./components/student/LandingPage";
import Subregister from "./components/student/Subregister";
import Profile from "./components/student/Profile";
import Forget from "./components/student/Forget";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Navbar} />
          <Route exact path="/jj" component={info} />
          <Route exact path="/Apply" component={Home1} />
          <Route exact path="/info" component={Contact} />
          <Route exact path="/view" component={Home2} />
          <Route exact path="/form" component={Home4} />
          <Route exact path="/Edit" component={Home5} />
          <Route exact path="/about" component={Dasshboard} />
          <Route exact path="/contact" component={Dasshboard1} />
          <Route path="/Registration" component={Registration} />
          <Route path="/Login" component={Login} />
          <Route path="/Status" component={Status} />
          <Route path="/landingpage" component={LandingPage} />
          <Route path="/Subregister" component={Subregister} />
          <Route path="/Forgot" component={Forget} />
          <Route path="/Profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;