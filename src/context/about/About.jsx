import React from "react";
import fruits from "../../assets/basket-full-vegetables.png";
function About() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-orange-500 to-orange-400 py-10">
        <div className="mx-auto max-w-6xl px-5 text-center text-white">
          <p className="mb-1 text-xs uppercase tracking-widest text-orange-100">
            Know More About Us
          </p>

          <h1 className="text-3xl font-bold">About Us</h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold text-orange-500">
              Who We Are
            </p>

            <h2 className="text-2xl font-bold leading-tight text-zinc-800 sm:text-3xl">
              Freshness delivered to your everyday life
            </h2>

            <p className="mt-4 text-sm leading-6 text-zinc-600">
              We believe grocery shopping should be simple, fresh and
              convenient. Our goal is to bring quality everyday products closer
              to you while making your shopping experience easy.
            </p>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              From fresh fruits and vegetables to dairy and everyday essentials,
              we focus on offering products you can trust.
            </p>

            <button className="mt-5 rounded-md bg-orange-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-orange-600">
              Shop Now
            </button>
          </div>

          <div className="flex justify-center">
            <img
              src={fruits}
              alt="Fresh groceries"
              className="w-full max-w-sm object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
