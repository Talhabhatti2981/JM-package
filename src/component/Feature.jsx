import wheelImg from '../assets/img/wheel.png';
import vector2Img from '../assets/img/vector2.png';
import curveImg from '../assets/img/curve.png';

const Feature = () => {
  return (
    <section>
      <div>
        <div></div>
        <div className="flex flex-col xl:flex-row items-center justify-center mb-20 mt-40">
          <div className="relative w-full max-w-[500px] h-[420px] mb-10 xl:mb-0">
            <div className="relative w-full h-full">
              <img
                src={wheelImg}
                alt="Decorative wheel"
                className="absolute w-[340px] h-auto top-[20px] left-[-20px] sm:left-[-40px] md:left-[-80px] z-0"
              />

              <h1
                className="absolute w-full max-w-[500px] h-auto text-[40px] top-[200px] sm:top-[220px] md:top-[241px] left-[20px] sm:left-[60px] md:left-[122px] text-black z-10 text-center md:text-left"
                id="welcome"
              >
                Tips . Features . Info
              </h1>
            </div>
          </div>
          <div className="w-full max-w-[1112px]">
            <div className="bg-[#F9E4E9] w-full h-auto p-0 sm:p-0">
              <div className="flex flex-col md:flex-row items-start justify-between gap-6">
                <div className="relative bg-[#FBEAEC] w-full h-full overflow-hidden">
                  <img
                    src={vector2Img}
                    alt="Decorative vector"
                    className="absolute top-60 right-[-120px] sm:right-[-150px] md:right-[-180px] h-[545px] w-auto hidden md:block"
                    style={{ objectFit: "contain" }}
                  />

                  <div className="relative z-10 w-full max-w-[100%] md:max-w-[845px] h-full p-4 sm:p-6 md:p-8">
                    <div className="text-[#606060] font-normal text-sm sm:text-base tracking-normal leading-relaxed">
                      <img
                        src={curveImg}
                        alt="Decorative curve"
                        className="absolute -ml-15 object-cover"
                      />
                      <p className="pt-2">
                        <strong>•</strong> Our insert accommodates both mini and standard-sized cupcakes.
                      </p>
                      <p className="pt-2">
                        <strong>•</strong> Please measure your cupcakes prior to ordering to ensure proper fit.
                      </p>
                      <p className="pt-2">
                        <strong>•</strong> If you find your cupcakes are sliding through the insert, we recommend <br /> adding a cupcake liner or two.
                      </p>
                      <p className="pt-2">
                        <strong>•</strong> Made from food-grade friendly paper.
                      </p>
                      <p className="pt-2">
                        <strong>•</strong> Each cupcake box includes three components: lid, insert, and bottom.
                      </p>
                      <p className="pt-2">
                        <strong>•</strong> Insert fits both mini & standard-size cupcakes (via perforated tabs).
                      </p>
                      <p className="pt-2">
                        <strong>•</strong> Lid has two locks (one on each end).
                      </p>
                      <p className="pt-2">
                        <strong>•</strong> Fits 6 cupcakes.
                      </p>
                      <p className="pt-2">
                        <strong>•</strong> Boxes Shipped from Los Angeles.
                      </p>
                      <p className="pt-2">
                        <strong>•</strong> Boxes are shipped flat and require assembly.
                      </p>
                      <p className="pt-2">
                        <strong>•</strong> Jules Michelle, Inc. is not responsible for items lost, damaged, or delayed in <br /> transit by USPS or UPS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
