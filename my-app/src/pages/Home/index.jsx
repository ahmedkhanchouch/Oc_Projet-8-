import React from "react";
// import Card from "../../components/Card";
import Location from "../../components/Locations";
import Cover from "../../components/Cover";
import Footer from "../../components/Footer";
function Home() {
  return (
    <div className="Home">
      <Cover/>
      <Location />
      <Footer />
    </div>
  );
}

export default Home;
