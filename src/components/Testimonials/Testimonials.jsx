import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import customer1 from "../../assets/customer1.jpg";
import customer2 from "../../assets/customer2.jpg";
import customer3 from "../../assets/customer3.jpg";
import customer4 from "../../assets/customer4.jpg";
import customer5 from "../../assets/customer5.jpg";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "../ui/heading/Heading";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Container from "../ui/container/Container";
function Testimonials() {
  return (
    <div className="py-15 px-10">
      <Container>
        <Heading highlight="Customer" heading="Saying" />
        <div className="flex justify-end gap-2 mb-3">
          <div className=" custom-prev w-10 h-10 hover:bg-orange-500 hover:text-white transition duration-300 rounded-lg bg-zinc-300 text-black flex justify-center items-center text-2xl">
            <IoIosArrowBack />
          </div>
          <div className="custom-next w-10 h-10 rounded-lg hover:bg-orange-500 hover:text-white bg-zinc-300 text-black flex justify-center items-center text-2xl">
            <IoIosArrowForward />
          </div>
        </div>
        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {review.map((item) => (
            <SwiperSlide>
              {" "}
              <div className="bg-zinc-100 rounded-xl p-8">
                <div className="flex gap-5 items-center">
                  <div className="w-16 h-16 rounded-full outline-2 outline-orange-500 outline-offset-4 overflow-hidden">
                    <img src={item.image} alt="" className="w-full h-full" />
                  </div>

                  <div>
                    <h5 className="text-xl font-bold">{item.name}</h5>
                    <p className="text-zinc-600">{item.profession}</p>
                    <span className="flex mt-5 text-yellow-400 text-xl gap-1">
                      {Array.from({ length: item.rating }, (_, index) => (
                        <FaStar />
                      ))}
                    </span>
                  </div>
                </div>

                <div className="mt-10 min-h-[17vh]">
                  <p className="text-zinc-600">{item.para}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}

export default Testimonials;

const review = [
  {
    id: 1,
    image: customer1,
    name: "Emily Johnson",
    profession: "Food Blogger",
    rating: 3,
    para: "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options",
  },
  {
    id: 2,
    image: customer2,
    name: "David Smith",
    profession: "Chef",
    rating: 5,
    para: "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended",
  },
  {
    id: 3,
    image: customer3,
    name: "Alya Zahra",
    profession: "Model",
    rating: 2,
    para: "Shopping online with FreshBasket has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable",
  },
  {
    id: 4,
    image: customer4,
    name: "Carlos Mendes",
    profession: "Fitness Coach",
    rating: 4,
    para: "I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey",
  },
  {
    id: 5,
    image: customer5,
    name: "Natcha Phongchai",
    profession: "Nutritionist",
    rating: 5,
    para: "FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch",
  },
];
