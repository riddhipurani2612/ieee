import Footer from "./components/Footer";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Login from "./components/LoginForm";
import Signup from './components/SignupForm';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FounderMembers from './components/FounderMember';
import ProfessionalMembers from './components/ProfessionalMember';
import StudentMembers from './components/StudentMember';
import ChairsDesk from './components/ChairsDesk';
import AboutUs from "./components/About";
import ContactUs from "./components/Contact";
import Events from './components/Event';
import Newsletter from './components/Newsletters';
import Publication from './components/Publication';
import Lecture from './components/Lecture';
import SignUp from "./components/SignupForm";
import SAR from "./components/SAR";
function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/foundermembers" component={FounderMembers}/>
                    <Route path="/professionalmembers" component={ProfessionalMembers}/>
                    <Route path="/studentmembers" component={StudentMembers}/>
                    <Route path="/chairs-desk" component={ChairsDesk}/>
                    <Route path="/about" component={AboutUs}/>
                    <Route path="/contact" component={ContactUs}/>
                    <Route path="/events" component={Events} />
                    <Route path="/newsletters" component={Newsletter}/> 
                    <Route path="/publication" component={Publication}/>    
                    <Route path="/lecture" component={Lecture}/> 
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/sar" component={SAR}/>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
