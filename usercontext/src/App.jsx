import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Fetch from "./components/Fetch";
import Tableview from "./components/Tableview";

// import Child from "./components/child"
// import Json from "./components/Json"
// import Sample from "./components/Sample"
// import UseeffectFuction from "./components/Useeffect"
// import Useeffect from "./components/Useeffect"
// import Home from "./components/Home"
// import About from "./components/About"
// import Contact from './components/Contact'
// import User from './components/User'


const App = () => {
  return (
    <BrowserRouter>
      <nav>
        {/* <Link to="/">Home</Link> ||
        <Link to="/about"> About</Link> ||
        <Link to="/contact"> Contact</Link> ||
        <Link to="/User"> User</Link> || */}
        <Link to="/Fetch">Fetch</Link> ||
        <Link to="/Tableview">Tableview</Link>
      </nav>

      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/User/:id" element={<User />} /> */}
        <Route path="/Fetch" element={<Fetch />} />
        <Route path="/Tableview" element={<Tableview />} />
        <Route path="/Tableview/:userId" element={<Tableview />} />

        {/*  <div>  */}
        {/* <Sample/> */}
        {/* <Child/> */}
        {/* <UseeffectFuction/> */}
        {/* <Json/> */}
        {/* <About/> */}
        {/* <Home/> */}
        {/* <Fetch/>
        <Tableview/> */}
      </Routes>
    </BrowserRouter>

    // </div>
  );
};
export default App;
