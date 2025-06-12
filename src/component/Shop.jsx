import React from "react";
import cone from "../assets/img/cone.png";
import pinkLid from "../assets/img/pink-lid.jpg";
import purpleLid from "../assets/img/purple-lid2.jpg";
import blueLid from "../assets/img/blue-lid3.jpg";
import redLid from "../assets/img/red-lid4.jpg";
import greenLid from "../assets/img/green-lid5.jpg";
import brownLid from "../assets/img/brown-lid6.jpg";
import blackLid from "../assets/img/black-lid7.jpg";
import cartIcon from "../assets/img/shopping-cart.png";

const Shop = () => {
  return (
    <section className="py-35 px-4 md:px-16">
      <div id="welcome">
        <h1 className="text-4xl md:text-6xl mt-17 text-center font-bold">
          Shop Packaging
        </h1>
        <div className="flex justify-center mt-5">
          <img src={cone} alt="" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {[
          { name: "Pink", img: pinkLid },
          { name: "Purple", img: purpleLid },
          { name: "Light Blue", img: blueLid },
          { name: "Red", img: redLid },
          { name: "Green", img: greenLid },
          { name: "Brown", img: brownLid },
          { name: "Black", img: blackLid },
        ].map(({ name, img }, i) => (
          <div
            key={i}
            className="bg-[#F9E4E9] w-full sm:w-[48%] lg:w-[23%] rounded-2xl shadow-md mb-14 -mt-8"
          >
            <img
              src={img}
              alt={name}
              className="p-3 rounded-3xl transition duration-300 hover:scale-105"
            />
            <div className="p-3">
              <h1 className="text-xl -mt-5">{name}</h1>
              <p className="text-gray-600 mt-2">3 pc. Half Dozen Box</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-[#ff9900] font-bold text-lg">$9.00</span>
                <button className="bg-[#D0324B] text-white px-4 py-2 cursor-pointer rounded-lg hover:bg-red-700 transition flex items-center gap-2">
                  <img src={cartIcon} alt="Cart" className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;
