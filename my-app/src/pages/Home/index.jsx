import React from "react";
import Header from "../../components/Header";
import Location from "../../components/Locations";
import Cover from "../../components/Cover";
import Footer from "../../components/Footer";
import "../../styles/Home.scss";


function Home() {
  return (
    <div>
      <div className="Home">
        <Header/>
        <Cover/>
        <Location />
    </div>
      <Footer />
    </div>
  );
}

export default Home;
