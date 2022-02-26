import React, { useState } from "react";
import SideBar from "../componenets/Sidebar";
import NavBar from "../componenets/Navbar";
import HeroSection from "../componenets/HeroSection";
import RsvpSection from "../componenets/RsvpSection";
import MapSection from "../componenets/MapSection";
import GallerySection from "../componenets/GallerySection";
import InvitationSection from "../componenets/Invitation";
import GiftSection from "../componenets/GiftSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <InvitationSection />
      <RsvpSection />
      <GiftSection />
      <MapSection />
      <GallerySection />
    </>
  );
};

export default Home;
