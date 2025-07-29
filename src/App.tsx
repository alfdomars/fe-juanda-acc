import { Route, Routes } from "react-router";
import "./App.css";
// import DefaultLayout from "@/layout/DefaultLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";
import ProductDetail from "@/pages/ProductDetail";

function App() {
  return (
    // <DefaultLayout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/product/:productSlug" element={<ProductDetail />} />
    </Routes>
    // </DefaultLayout>
  );
}

export default App;
