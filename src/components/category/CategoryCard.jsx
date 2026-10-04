import React from "react";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
function CategoryCard({ title, des, image, path }) {
  return (
    <div className="">
      <div className="min-h-[20vh] md:min-h-[30vh] w-full relative mx-auto flex justify-center">
        <img
          src={image}
          className="w-[80%] md:w-full -mb-10 absolute bottom-0"
        />
      </div>

      <div className="px-10 py-15 bg-[#F4F4F5] rounded-xl">
        <h3 className="font-bold text-3xl">{title}</h3>
        <p className="text-[16px] text-[#52525C] my-5">{des}</p>
        <Link to={path}>
          <Button title="See All" />
        </Link>
      </div>
    </div>
  );
}

export default CategoryCard;
