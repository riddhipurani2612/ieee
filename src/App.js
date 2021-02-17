import Footer from "./components/Footer";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import LoginSignup from "./components/LoginSignupForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Members from "./components/Members";
function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/members" component={Members} />
                    <Route path="/login_signup" component={LoginSignup} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
