import React, { useContext, useState } from "react";
import Container from "../ui/container/Container";
import products from "../../lib/productList";
import ProductCard from "./ProductCard";
import ProductContext from "../../context/ProductContext";
import Button from "../ui/Button";
import Heading from "../ui/heading/Heading";
function Products() {
  const category = ["All", "Vegetables", "Dairy", "Meat", "SeaFood", "Fruits"];
  const [activeTab, setActiveTab] = useState("All");

  const { search } = useContext(ProductContext);
  const filteredProduct = products.filter((item) => {
    const CategorySearch =
      activeTab === "All" ? true : activeTab === item.category;
    const searchedItem = item.name.toLowerCase().includes(search.toLowerCase());
    return CategorySearch && searchedItem;
  });
  return (
    <div id="productSection" className="py-10 mx-5 md:max-0">
      <Container>
        <Heading highlight="Our" heading="Products" />
        <div className="flex  flex-wrap justify-center items-center gap-3">
          {category.map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`px-4 py-2 rounded-lg md:mb-12 ${activeTab === item ? "bg-orange-500 text-white" : "bg-gray-200 text-black"} `}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mx-10 mt-10 md:mt-0">
          {filteredProduct.slice(0, 12).map((item) => (
            <ProductCard
              key={item.id}
              onSale={item.onSale}
              newArrival={item.newArrival}
              image={item.image}
              title={item.name}
              price={item.price}
              id={item.id}
              product={item}
            />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button title="Load More" />
        </div>
      </Container>
    </div>
  );
}

export default Products;
