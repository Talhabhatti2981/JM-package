import React from "react";
import frameImg from "../assets/img/frame.png";
import vectorImg from "../assets/img/Vector.png";

const Herosection = () => {
  return (
    <section>
      <div className="bg-[#F9E4E9E5]">
        <div className="w-full overflow-hidden">
          <img
            src={frameImg}
            alt="frame"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="flex justify-center mt-20 px-4">
          <img
            src={vectorImg}
            alt="vector"
            className="mb-15 w-72 sm:w-96 md:w-[400px] max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
