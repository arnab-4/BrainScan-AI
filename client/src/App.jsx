import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Detect from "./pages/Detection"
import NotFound from "./components/NotFound";


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detect" element={<Detect />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    
    </BrowserRouter>
      {/* <Home /> */}
    </>
  );
};

export default App;
