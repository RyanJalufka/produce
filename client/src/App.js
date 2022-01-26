import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import PrivateRoute from "./components/auth/PrivateRoute";
import Dashboard from  "./pages/Dashboard"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login />} />


        <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
