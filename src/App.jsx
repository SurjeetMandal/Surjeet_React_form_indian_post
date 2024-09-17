import "./App.css"
import AfterClick from "./Components/AfterClick"
import BeforeClick from "./Components/beforeClick"
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BeforeClick />}/>
        <Route path="/pincode" element={<AfterClick />} />
      </Routes>
    </div>
  )
}

export default App

