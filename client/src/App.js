import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Post from "./pages/Post/Post";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const user = false;
  return (
    <BrowserRouter>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/post/:id"
          element={user ? <Post /> : <Navigate tp="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
