import React, { useState, useEffect } from "react";

import Styles from "../components/components.module.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getTodo = async () => {
      let res = await fetch("  http://localhost:8080/products");
      let data = await res.json();
      setProducts(data);
    };
    getTodo();
  }, []);

  return (
    <div className={Styles.homebody}>
      {/* *****************************bottom slide show ***************/}
      <div className={Styles.topslideshow}>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.pinimg.com/originals/eb/86/97/eb86973652fd0a7a8725022e6d331ac5.jpg" id={Styles.images1}
      className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.shopify.com/s/files/1/0605/8093/articles/Tanner_Bench_Shot_1200x1200.jpg?v=1471497608" id={Styles.images2}
      className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.pinimg.com/originals/d0/2e/d4/d02ed4989fd76613fc4371b3d472305a.jpg" id={Styles.images3}
      className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

      </div>

      <h1>Trending Right Now</h1>
      <div className={Styles.box}>
        {products.map((p) => (
          <>
            <div className={Styles.minibox}>
              <img src={p.imgurl} className={Styles.imghome} />
            </div>
          </>
        ))}
      </div>
      <div className={Styles.para}>
        <p>
          
          We Created Products Worth Holding Onto The products we use on a daily
          basis say something about the people we are. We believe many things in
          life get better with time; it is that spirit we try to infuse in
          everything we create. In a world where we are overwhelmed by products
          made to break down or go out style, we aim to go against that grain.
        </p>
      </div>
      <span>
      <button className={Styles.toproduct}>VIEW ALL</button>
      </span>
      <br></br>
      {/* <img
        className={Styles.homeimage}
        src="https://cdn.shopify.com/s/files/1/0044/9802/files/TG-Fathers-Day-2022-45_1944x.jpg?v=1653635652"
      /> */}


                           {/* *****************************bottom slide show ***************/}
      <div className={Styles.slideshow}>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.shopify.com/s/files/1/0044/9802/t/36/assets/feature5.jpg?8700"  
      className="d-block w-100" alt="image"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.shopify.com/s/files/1/0044/9802/t/36/assets/feature4.jpg?8700"   id={Styles.images4}
      className="d-block w-100" alt="image"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.shopify.com/s/files/1/0044/9802/files/TG-Fathers-Day-2022-45_1944x.jpg?v=1653635652" id={Styles.images5}
      className="d-block w-100" alt="image"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.shopify.com/s/files/1/0044/9802/t/36/assets/feature6.jpg?8700" id={Styles.images6} 
      className="d-block w-100" alt="image"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

      </div>
    </div>
  );
};

export default Home;
