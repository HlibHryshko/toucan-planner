import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import MainPage from "./pages/MainPage";
import StartingPage from "./pages/StartingPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <div className="space-x-4">
            <Link to="/login">Login</Link> 
            <Link to="/">Main Page</Link> 
            <Link to="/start">Start Page</Link> 
          </div>

          <Routes>
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
