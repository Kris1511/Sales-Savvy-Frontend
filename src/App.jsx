import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Welcome from "./pages/Welcome";
import Signup from "./pages/signup";
import Signin from "./pages/signin";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element = { <Welcome/> } />
          <Route path="/signup" element = { <Signup /> } />
          <Route path="/signin" element = { <Signin /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
