import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import CardsPage from "./Pages/CartPage"

function App() {


  return (
    <div>

      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<CardsPage/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
