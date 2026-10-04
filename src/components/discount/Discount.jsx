import React from "react";
// import FreshFruits from "../../assets/fresh-fruits.png";
import Button from "../ui/Button";
import Container from "../ui/container/Container";

function Discount() {
  return (
    <div
      className="discount-bg bg-zinc-100 py-15 bg:cover md:bg-contain bg-right bg-no-repeat px-5  "
      // style={{ backgroundImage: `url(${FreshFruits})` }}
    >
      <Container>
        <div className="flex gap-3 items-center">
          <div className="flex-1">
            <h3 className="text-6xl md:text-9xl transform -rotate-90  text-orange-500 font-bold">
              20%
            </h3>
          </div>

          <div>
            <h3 className="md:text-7xl text-4xl text-zinc-800 font-bold">
              First Order Discount!
            </h3>
            <p className="text-zinc-600 my-6">
              Enjoy an exclusive first order discount on our grocery website!
              Shop fresh essentials and save big on your first purchase. Fast
              delivery and quality guaranteed.
            </p>
            <Button title="Get a Discount" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Discount;
