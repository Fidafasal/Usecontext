
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// import Child from "./components/child"
// import Json from "./components/Json"
// import Sample from "./components/Sample"
// import UseeffectFuction from "./components/Useeffect"
// import Useeffect from "./components/Useeffect"
import Home from "./components/Home"
import About from "./components/About"
import Contact from './components/Contact'
import User from './components/User'


const App = () => {
  return (


    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link> ||
        <Link to="/about"> About</Link> ||
        <Link to="/contact"> Contact</Link> ||
        <Link to="/User"> User</Link> 
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/User/:id" element={<User />} />

        {/* <div> */}
        {/* <Sample/> */}
        {/* <Child/> */}
        {/* <UseeffectFuction/> */}
        {/* <Json/> */}
        {/* <About/> */}
        {/* <Home/> */}
        {/* </div> */}
      </Routes>
    </BrowserRouter>


  )
}
export default App