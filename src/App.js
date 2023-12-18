import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import HomePage from "./pages/home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
