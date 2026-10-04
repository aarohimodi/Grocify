import React from "react";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";
import Container from "../ui/container/Container";
import Heading from "../ui/heading/Heading";
function Process() {
  return (
    <div className="md:py-25 py-10">
      <Container>
        <Heading highlight="Our" heading="Process" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2  ">
          {steps.map((item) => (
            <div
              key={item.id}
              className={`${item.id % 2 === 0 ? "mt-15 md:mt-[100px] " : "mt-15 md:mt-0"}`}
            >
              {/* icon */}
              {/* <span className=" mx-auto    outline-[3px] outline-offset-7 outline-zinc-800 outline-dashed">
                {item.number}
              </span> */}
              <div className="flex justify-center">
                <div className="bg-black w-10 h-10 md:w-20 md:h-20 md:text-9xl text-4xl rounded-full text-white flex justify-center items-center  outline-[3px] outline-dashed outline-black outline-offset-7 ">
                  {item.number}
                </div>
              </div>

              {/* content */}
              <div className="flex gap-6 items-center mt-10 justify-center">
                <div className="text-4xl w-15 h-15 rounded-full flex items-center justify-center text-white bg-orange-500">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-bold text-xl md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-[#52525C] text-[18px]">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Process;

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "It is a long established fact that a reader",
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "It is a long established fact that a reader",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "It is a long established fact that a reader",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    para: "It is a long established fact that a reader",
    icon: <BsTruck />,
  },
];
