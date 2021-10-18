import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Home from "./pages/Home.js";
// import About from "./pages/About.js";
// import Contact from "./pages/Contact.js";
// import Courses from "./pages/Courses.js";
// import Cart from "./pages/Cart.js";
// import Login from "./pages/Login.js";
// import Signup from "./pages/Signup.js";
// import PageNotFound from "./pages/PageNotFound.js";
// import Reset from "./pages/Reset.js";
// import Details from "./pages/Details.js";
import AuthProvider from "./contexts/AuthProvider.js";
// import PrivateRoute from "./route/PrivateRoute.js";
import Footer from "./components/footer/Footer.js";
import Header from "./components/header/Header.js";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Courses from "./components/Courses/Courses";
import Login from "./components/login/Login";
import SignUp from "./components/signup/Signup";
import Reset from "./components/reset/Reset";
import CourseDetails from "./components/courseDetails/CourseDetails";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header> </Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route exact path="/courses">
              <Courses></Courses>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/signup">
              <SignUp></SignUp>
            </Route>

            <Route path="/reset">
              <Reset></Reset>
            </Route>

            <Route path="/courses/:key">
              <CourseDetails></CourseDetails>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
