import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NavBar from "./components/blocks/NavBar";
import ModalAuth from "./components/blocks/ModalAuth";
import HomePage from "./pages/HomePage";

const App = () => {

  return (
      <>
          <NavBar />
          <Routes>
              <Route path="/" element={ <MainPage /> } />
              <Route path="/homepage" element={ <HomePage /> } />
          </Routes>
          <ModalAuth />
      </>
  )
}

export default App;