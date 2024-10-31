import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Destinations from "./pages/Destination";
import Packages from "./components/Packages/Packages";
import PackageDetails from "./components/Packages/PackageDetails";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
// import Blogs from "./pages/Blogs";
// import BlogsDetails from "./pages/BlogsDetails";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="places" element={<Destinations />} />
          <Route path="packages" element={<Packages />} />
          <Route path="packages/:id" element={<PackageDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="blogs/:id" element={<BlogsDetails />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
