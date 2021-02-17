import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import LoginSignup from "./components/LoginSignupForm";
import FAQ from "./components/FAQ";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
function App() {
    return (
        <Router>
        <div className="App">
            <Navigation />
            <FAQ />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login_signup" component={LoginSignup}/>
                <Route path="/faq" component={FAQ}/>
            </Switch>
            <Footer />
        </div>
        </Router>
    );
}

export default App;
