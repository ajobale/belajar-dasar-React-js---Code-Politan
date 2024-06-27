import "./App.css";
import Home from "./assets/pages/index";
import { GlobalContext } from "./assets/context/index";
import { RouterProvider } from "react-router-dom";
import { router } from "./assets/routers";

function App() {
  const user = {
    username: "nusendra",
  };

  return (
    <>
      <div className="App">
        {/* {value ? "benar" : "salah"} */}
        <GlobalContext.Provider value={user}>
          <RouterProvider router={router} />
        </GlobalContext.Provider>
      </div>
    </>
  );
}

export default App;

// context-api
// zustand
// redux
