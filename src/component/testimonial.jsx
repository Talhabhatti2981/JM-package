import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Corben Naylor",
    avatar: "src/assets/img/avatar1.png",
    quote: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis."
  },
  {
    name: "Rhiana Fields",
    avatar: "src/assets/img/avatar2.png",
    quote: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis."
  },
  {
    name: "Jane Avila",
    avatar: "src/assets/img/avatar3.png",
    quote: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis."
  },
];

const SwipeToSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="py-10 sm:py-12 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl mt-11  sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6" id="welcome">
          Testimonials
        </h2>
        <div className="flex justify-center mb-6 sm:mb-8">
          <img
            src="src/assets/img/cone.png"
            alt="Decorative cone"
            className="  sm:w-24 md:w-32 object-contain mt-4"
          />
        </div>

        <div className="w-full ">
          <Slider {...settings}>
            {testimonials.map((t, i) => (
              <div key={i} className="px-2 sm:px-3">
                <div className="bg-[#F9E4E9]  hover:scale-105 transition-transform duration-300 ease-in-out p-4 sm:p-5 rounded-[12px] shadow-xl min-h-[260px] max-w-md mx-auto flex flex-col items-center justify-center">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 sm:w-16 mt-3 sm:h-16 md:w-20 md:h-20 rounded-full object-cover mb-2 border-4 border-white shadow-lg"
                  />
                  <h3 className="text-base sm:text-lg mt-2 md:text-xl font-semibold text-gray-800 mb-2">
                    {t.name}
                  </h3>
                      <hr className="w-full border-gray-200 mt-4  rounded " />
                  <p className="text-gray-700 mt-5 mb-8 text-sm sm:text-base text-center leading-relaxed px-2">
                    “{t.quote}”
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
     <style jsx>{`
  .slick-dots {
    display: flex !important;
    justify-content: center;
    align-items: center;
      margin:-30px;
    gap: 0 !important; /* Remove spacing between dots */
  }

  .slick-dots li {
    margin: 0 !important;
    padding: 0 !important;
          }
   

  .slick-dots li button:before {
    color: red !important;
    font-size: 10px !important;
  }
`}</style>


    </section>
  );
};

export default SwipeToSlide;
