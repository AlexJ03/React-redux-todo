import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NavBar from "./components/blocks/NavBar";
import ModalAuth from "./components/blocks/ModalAuth";

const App = () => {

  return (
      <>
          <NavBar />
          <Routes>
              <Route path="/" element={ <MainPage /> } />
          </Routes>
          <ModalAuth />
      </>
  )
}

export default App;