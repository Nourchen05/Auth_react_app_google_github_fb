import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Post from "./pages/Post";

//Arrow function
const App = () => {
  return (
    <div>
      <NavBar />

      <Post />
    </div>
  );
};

export default App;
