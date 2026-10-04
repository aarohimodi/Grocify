import React from "react";
import Container from "../ui/container/Container";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import midImage from "../../assets/basket-full-vegetables.png";
import Heading from "../ui/heading/Heading";
function Values() {
  return (
    <div className="py-15 mx-5 md:mx-0">
      <Container>
        <Heading highlight="Our" heading="Values" />
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <div className="flex flex-col gap-3 justify-between">
            {value.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="flex justify-between gap-10 items-center "
              >
                <div className="md:hidden ">
                  <div className="w-17 h-17 rounded-full flex items-center justify-center text-white bg-orange-500">
                    {item.icon}
                  </div>
                </div>
                <div className="md:text-right flex-1">
                  <h3 className="text-[30px] font-bold ">{item.title}</h3>
                  <p className="text-[18px] text-[#52525C] my-5">{item.para}</p>
                </div>
                <div className="hidden md:flex">
                  <div className="w-17 h-17 rounded-full flex items-center justify-center text-white bg-orange-500">
                    {item.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* image part */}
          <div className="flex justify-center">
            <img src={midImage} className="w-[90%]" />
          </div>
          {/*  third part */}
          <div className="flex flex-col gap-6">
            {value.slice(2).map((item) => (
              <div
                key={item.id}
                className="flex justify-between gap-10 items-center "
              >
                <div>
                  <div className="w-17 h-17 rounded-full flex items-center justify-center text-white bg-orange-500">
                    {item.icon}
                  </div>
                </div>
                <div className="text-left flex-1">
                  <h3 className="text-[30px] font-bold ">{item.title}</h3>
                  <p className="text-[18px] text-[#52525C] my-5">{item.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Values;

const value = [
  {
    id: 1,
    title: "Trust",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaHeart size={30} />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaLeaf size={30} />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaShieldAlt size={30} />,
  },
  {
    id: 4,
    title: "100% Organic",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaSeedling size={30} />,
  },
];
