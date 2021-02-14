import AboutUs from "./pages/AboutUs";
import Nav from "./component/Nav";
import NavToggle from "./component/NavToggle";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
// GlobalStyle
import GlobalStyle from "./component/GlobalStyle";
// Router
import { Switch, Route, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  // let { path } = useRouteMatch();
  return (
    <div>
      {/* <Router> */}
      <GlobalStyle />
      <Nav />
      <NavToggle />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/work" exact component={OurWork}>
            {/* <OurWork /> */}
          </Route>
          {/* <Route path={`${path}/:id`}> */}

          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
      {/* </Router> */}
    </div>
  );
}

export default App;
