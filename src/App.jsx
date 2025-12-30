import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Compontes/navbar/Navbar';
import Home from "./page/Home/home";
import Items from "./page/Items/items";
import Footer from "./Compontes/Footer/footer";
import Detailpage from "./page/detailpage/detail";
import { createContext, useState } from "react";
import UpdateItem from "./page/updateitem/update";
import AddNewItem from "./page/additem/AddItempage";
import UserProfile from "./page/user/user"
import LoginPage from "./page/login/Login";
import ALLOrderlist from "./page/order/order";
const mycontext = createContext()

function App() {
  const [islogin, setislogin] = useState(() => {
    return localStorage.getItem("islogin") === "true";
  });
  const [hideHeaderandFooter, sethideHeaderandFooter] = useState(false)
  const value = ({
    islogin,
    setislogin,
    hideHeaderandFooter,
    sethideHeaderandFooter
  })

  return (
    <>
      <mycontext.Provider value={value}>
        <BrowserRouter>
          {
            hideHeaderandFooter !== true &&
            <Navbar />
          }
          <div className='ailgn-center'>
            <Routes>
              <Route path="/" element={islogin ? <Home /> : <Navigate to="/login" />} />
              <Route
                path="/items"
                element={islogin ? <Items /> : <Navigate to="/login" />}
              />
              <Route
                path="/items/:id"
                element={islogin ? <Detailpage /> : <Navigate to="/login" />}
              />
              <Route
                path="/upadteitem/:id"
                element={islogin ? <UpdateItem /> : <Navigate to="/login" />}
              />
              <Route
                path="/profile"
                element={islogin ? <UserProfile /> : <Navigate to="/login" />}
              />
              <Route
                path="/Additem"
                element={islogin ? <AddNewItem /> : <Navigate to="/login" />}
              />
              <Route
                path="/Order"
                element={islogin ? <ALLOrderlist /> : <Navigate to="/login" />}
              />
              <Route path="/login" element={islogin ? <Navigate to="/" /> : <LoginPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
          {
            hideHeaderandFooter !== true &&
            <Footer />
          }
        </BrowserRouter>
      </mycontext.Provider>
    </>
  )
}

export default App
export { mycontext }