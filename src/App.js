import Footer from "./components/Footer";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Login from "./components/LoginForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChairsDesk from "./components/ChairsDesk";
import AboutUs from "./components/About";
import ContactUs from "./components/Contact";
import Events from "./components/Event";
import Newsletter from "./components/Newsletters";
import Publication from "./components/Publication";
import Lecture from "./components/Lecture";
import SignUp from "./components/SignupForm";
import SAR from "./components/SAR";
import { useState, useEffect } from "react";
import Profile from "./components/Profile";
import Members from "./components/Members";
import TechnicalMaterial from "./components/Technicalmaterial";
import FAQ from "./components/FAQ";
import AddEvent from "./components/AddEvent";
import AddMaterial from "./components/AddMaterial";
import LogoutComp from "./components/LogoutComp";
import Meetings from "./components/Meetings";
function App() {
  console.log("App");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const setLogin = (state) => setLoggedIn(state);
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      setLoggedIn(false);
    }
  }, []);
  return (
    <Router>
      <div className="App">
        <Navigation
          isLoggedIn={isLoggedIn}
          setLogin={(state) => setLogin(state)}
        />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/login"
            render={(routeProps) => (
              <Login
                routeProps={routeProps}
                setLogin={(state) => setLogin(state)}
              />
            )}
          />
          <Route path="/addmaterial" component={AddMaterial} />
          <Route path="/addevent" component={AddEvent} />
          <Route path="/members" component={Members} />
          <Route path="/chairs-desk" component={ChairsDesk} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/events" component={Events} />
          <Route path="/newsletter" component={Newsletter} />
          <Route path="/publication" component={Publication} />
          <Route path="/lecture" component={Lecture} />
          <Route path="/signup" component={SignUp} />
          <Route path="/sar" component={SAR} />
          <Route path="/profile" component={Profile} />
          <Route path="/uploadmaterial" component={TechnicalMaterial} />
          <Route path="/faq" component={FAQ} />
          <Route path="/meetings" component={Meetings}/>
          <Route
            path="/logout"
            component={LogoutComp}
            setLogin={(state) => setLogin(state)}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
