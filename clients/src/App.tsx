import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing"
import NotFound from "./pages/NotFound"
import "./App.css"

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
