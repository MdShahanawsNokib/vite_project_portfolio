// import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./Pages/Home"
import { Notfound } from "./Pages/Notfound"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
