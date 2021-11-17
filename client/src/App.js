import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";

//Arrow function
const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
