import {Routes, Route, useNavigate} from "react-router-dom";
import MainPage from "./pages/MainPage";
import NavBar from "./components/blocks/NavBar";
import ModalAuth from "./components/blocks/ModalAuth";
import HomePage from "./pages/HomePage";
import {useEffect} from "react";
import {auth} from "./firebase";
import {onAuthStateChanged} from "firebase/auth";
import {useAppDispatch} from "./app/hooks";
import {setUser} from "./features/UserAuthSlice";

const App = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { email, uid } = user;

                dispatch(setUser({email, uid}));
                navigate("/homepage");
            } else {
                navigate("/");
            }
        });
    }, []);

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