import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import WhatsAppButton from "../components/WhatsApp/WhatsAppButton";
// import OrderPopup from "../components/OrderPopup/OrderPopup";
import { DataProvider } from "../context/DataProvider";

const Layout = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <DataProvider>
        <Outlet />
      </DataProvider>
      <WhatsAppButton />
      <Footer />
      {/* <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} /> */}
    </>
  );
};

export default Layout;
