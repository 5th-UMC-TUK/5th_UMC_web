import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import "./App.css"
import Celebirity from "./routers/celebirity";
import Movies from "./routers/movies";
import NotFound from "./routers/notFound";
import TV from "./routers/tv";
import Home from "./routers/home";
import Header from "./components/header";


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/celebirity" element={<Celebirity />}></Route>
          <Route path="/TV" element={<TV />}></Route>
          <Route path="/notFound" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
