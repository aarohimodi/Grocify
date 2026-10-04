import React from "react";
import Banner from "../../banner/Banner";
import Category from "../../category/Category";
import Values from "../../values/Values";
import Products from "../../products/Products";
import Discount from "../../discount/Discount";
import Process from "../../process/Process";
import Testimonials from "../../Testimonials/Testimonials";

function Home() {
  return (
    <div>
      <Banner />
      <Category />
      <Values />
      <Products />
      <Discount />
      <Process />
      <Testimonials />
    </div>
  );
}

export default Home;
