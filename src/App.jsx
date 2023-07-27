import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ladingclima from "./Pages/ladingclima";
import FormRegister from "./Pages/Registrer";
function App() {
    return (  
<BrowserRouter>
<Routes>
 <Route path="/" element={<Ladingclima/>} />
 <Route path="/registro" element={<FormRegister/>} />
</Routes>
</BrowserRouter>

);
}

export default App;