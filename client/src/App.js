import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Post from "./pages/Post/Post";

//Arrow function
const App = () => {
  return (
    <div>
      <NavBar />

      <Login />
    </div>
  );
};

export default App;
