import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Card from '../components/Card/Card'
import Footer from '../components/Footer/Footer'
import Carousel from '../components/Carousel/Carousel'

function Home() {
  return (
    <div>
      <div>
       
        <Navbar />
      </div>
      <div>
        <Carousel/>
      </div>
      <div>
        <Card/>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
