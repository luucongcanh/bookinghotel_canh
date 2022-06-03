import React from "react";
import Serviceone from "../components/Service1";
import Servicetwo from "../components/Service2";

import { Link } from "react-router-dom";
import FeaturedRooms from "../components/FeaturedRooms";
import Footer from "../components/Footer";
import SlidebarHome from "../components/SlidebarHome";

export default function Home() {
  return (
    <>
      {" "}
      <SlidebarHome/>
      <Serviceone />
      <Servicetwo />
      <FeaturedRooms />
      <Footer />
    </>
  );
}
