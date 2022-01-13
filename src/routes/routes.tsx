import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import { Favovite } from "../pages/Favorites";
import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";
import { NotFound } from "../pages/NotFound";

const Router = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/filme/:id" element={<Movies />} />
      <Route path="/favoritos" element={<Favovite />} />

      <Route path="/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
