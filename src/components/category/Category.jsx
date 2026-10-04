import React from "react";
import Container from "../ui/container/Container";
import CategoryCard from "./CategoryCard";
import Fruitscat from "../../assets/fruits-and-veggies.png";
import Seafoodcat from "../../assets/meat-and-seafood.png";
import Dairycat from "../../assets/dairy-and-eggs.png";
import Heading from "../ui/heading/Heading";
function Category() {
  return (
    <div className="pb-15 md:mx-0 mx-5">
      <Container>
        <Heading highlight="Shop" heading="By Category" />
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
          {categories.map((item) => (
            <CategoryCard
              key={item.id}
              title={item.title}
              des={item.des}
              image={item.image}
              path={item.path}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Category;

const categories = [
  {
    id: 1,
    title: "Fruits & Vaggies",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
    image: Fruitscat,
    path: "/fruits",
  },
  {
    id: 2,
    title: "Dairy and Eggs",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
    image: Dairycat,
    path: "/dairy",
  },
  {
    id: 3,
    title: "Meat & sea Food",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
    image: Seafoodcat,
    path: "/seafood",
  },
];
