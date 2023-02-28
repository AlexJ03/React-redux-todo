import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NavBar from "./components/blocks/NavBar";

const App = () => {

  return (
      <>
          <NavBar />
          <Routes>
              <Route path="/" element={ <MainPage /> } />
          </Routes>
      </>
  )
}

export default App;