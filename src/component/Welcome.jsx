import React from "react";
import cone from "../assets/img/cone.png";
import aboutUs from "../assets/img/about-us.jpg";

const Welcome = () => {
  return (
    <section className="py-13 px-4 bg-[#dcdcde]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center" id="welcome">
          Welcome
        </h1>
        <div className="flex justify-center mt-4 mb-8">
          <img src={cone} alt="Cone" />
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-6">
          <div className="flex-shrink-0 w-full lg:w-1/2">
            <img
              src={aboutUs}
              alt="About Us"
              className="rounded-lg shadow-lg object-cover mb-6 w-138 h-[400px] md:h-[600px] responsive-object"
            />
          </div>
          <div className="w-full lg:w-1/2 text-[#606060] leading-relaxed">
            <p className="mb-4">
              So grateful you are here! <br />
              <br />
              My name is Julia, and I’m the founder of Jules Michelle – a
              sophisticated cupcake packaging brand designed to fill the voids
              between fun, beauty, and all things dual-functionality. As a
              former cupcake baker myself, I understand how important packaging
              is for first impressions.
            </p>
            <p className="mb-4">
              I also know how hard it can be to package two different-sized
              cupcakes at once — which is why I made it my mission to bridge
              that gap.
            </p>
            <p className="mb-4">
              After lots of blueprinting, testing, and innovation, I’m thrilled
              to introduce our unique packaging design: with a custom shape (no
              more boring squares!) and mini-to-regular-sized transitioning
              inserts. All boxes ship from Los Angeles.
            </p>
            <p className="mb-4">
              Jules Michelle is more than a brand — it’s a passion project
              rooted in a love for cupcakes and packaging. I created it to bring
              joy, function, and creativity into one box.
            </p>
            <p className="mb-4">
              Thank you again for being here! If you have any questions or
              feedback, please reach out. I’m excited to build this sweet and
              inspiring packaging community with you.
            </p>
            <p className="font-semibold mt-6">Best wishes,</p>
            <p className="italic">-Julia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
