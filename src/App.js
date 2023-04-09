import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import MainPage from "./pages/MainPage";
import StartingPage from "./pages/StartingPage";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <div className="">
          <div className="space-x-4">
            <Link to="/login">Login</Link> 
            <Link to="/signup">Sign Up</Link> 
            <Link to="/">Main Page</Link> 
            <Link to="/start">Start Page</Link> 
            
          </div>

          <Routes>
            <Route path = "/signup" element={<SignUp/>} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/start" element={<StartingPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
