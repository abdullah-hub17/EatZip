import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div class="card mt-3" style={{ "width": "18rem", "maxHeight" : "360px" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some Important Text.
            </p>
            <div className="container w-100">
                <select className="m2 h-100 w-100 bg-success " name="" id=""></select>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
