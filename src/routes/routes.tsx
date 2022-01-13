import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Favovite } from "../pages/Favorites";
import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";

const Router = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/filme/:id" element={<Movies />} />
      <Route path="/favoritos" element={<Favovite />} />

      <Route path="/*" element={<div>404</div>} />
    </Routes>
    {/* <Footer /> */}
  </BrowserRouter>
);

export default Router;
