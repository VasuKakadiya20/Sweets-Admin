import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import './App.css'
import Home from "./page/Home/home";
import Footer from "./Compontes/Footer/footer";
import Items from "./page/Items/items";
import AddNewItem from "./page/additem/AddItempage";
import UserProfile from "./page/user/user";
import Detailpage from "./page/detailpage/detail";
import UpdateItem from "./page/updateitem/update";
import LoginPage from "./page/login/Login";
import { createContext, useState } from "react";
import Navbar from "./Compontes/Navbar/Navbar";
const myContext = createContext()

function App() {
  const [islogin, setislogin] = useState(() => {
  return localStorage.getItem("islogin") === "true";
});
  const [hideHeaderandFooter, sethideHeaderandFooter] = useState(false)
  const value =({
    islogin,
    setislogin,
    hideHeaderandFooter,
    sethideHeaderandFooter
  })

  return (
    <>
    <myContext.Provider value={value}>
    <BrowserRouter>
    {
              hideHeaderandFooter !== true &&
    <Navbar/>
}
       <div className='ailgn-center'>
          <Routes>
            <Route path="/" element={islogin ? <Home /> : <Navigate to="/login"/>} />
            <Route
              path="/items"
              element={islogin ? <Items /> : <Navigate to="/login"/>}
            />
              <Route 
            path="/items/:id"
            element={islogin ? <Detailpage/> : <Navigate to="/login"/>}
            />
              <Route
            path="/upadteitem/:id"
            element={islogin ? <UpdateItem/> : <Navigate to="/login"/>}
            />
            <Route 
            path="/profile"
            element={islogin ? <UserProfile/> : <Navigate to="/login"/> }
            />
            <Route
            path="/Additem"
            element={islogin ? <AddNewItem/> : <Navigate to="/login"/> }
            />
            <Route path="/login" element={islogin ? <Navigate to="/" /> : <LoginPage/>}/>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        {
              hideHeaderandFooter !== true &&
          <Footer/>
        }
    </BrowserRouter>
    </myContext.Provider>
    </>
  )
}

export default App
export {myContext}
