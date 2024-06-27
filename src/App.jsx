import "./App.css";
import Home from "./assets/pages/index";

function App() {
  const value = true;

  return (
    <>
      <div className="App">
        {value ? "benar" : "salah"}
        <Home />
      </div>
    </>
  );
}

export default App;
