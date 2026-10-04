import React from "react";

import grocery from "../../assets/grocery.png";
import Button from "../ui/Button";
import Container from "../ui/container/Container";

function Banner() {
  return (
    <div className="bg-[#FFFFFF] py-20 mx-10 md:mx-0">
      <Container>
        <div className="flex flex-col md:flex-row gap-20  items-center">
          <div className="flex-1">
            <span className="px-5 py-3 rounded-full bg-[#FFECD4] text-[17px]  text-orange-500 ">
              Export Best Quality...
            </span>
            <h2 className="text-2xl md:text-5xl font-bold py-6 w-[90%] leading-[30px] md:leading-[60px]">
              Lorem Ipsum is simply dummy text of the printing
            </h2>
            <p className="leading-[30px] text-[17px] md:text-[20px] mb-7">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <Button title="Shop Now" />
          </div>
          <div className="md:flex-1  flex justify-center">
            <img src={grocery} className=" md:w-full w-[80%]" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
