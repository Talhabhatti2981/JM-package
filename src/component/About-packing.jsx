import coneImg from '../assets/img/cone.png';
import pinkLidImg from '../assets/img/pink-lid.jpg';
import insertImg from '../assets/img/Insert_withoutMini 1.png';
import bottomImg from '../assets/img/Bottom 1.png';

const About = () => {
  return (
    <section className="about px-4">
      <div className='mt-9'>
        <h1 className='font-bold text-center text-5xl' id='welcome'>About the Packaging</h1>
        <div className="flex justify-center ">
          <img src={coneImg} alt="Cone packaging" className="mt-4" />
        </div>
        <p className='mt-6 text-center text-[#606060] mb-6 text-sm sm:text-base'>
          Discover the beauty and convenience of our 3-piece half-dozen cupcake box, designed to perfectly showcase and protect <br className="hidden sm:block" />
          your delectable creations. Comprising a lid, insert, and bottom, this exquisite packaging solution elevates your cupcakes to a <br className="hidden sm:block" />
          whole new level. Each box is shipped flat, requires minimal assembly <span className="font-semibold"> (watch assembly video) </span> and is guaranteed to leave <br className="hidden sm:block" />
          lasting impressions for those celebratory moments.
        </p>
      </div>

      <div className='flex flex-col md:flex-row justify-center gap-5 mb-10 items-center'>
        <div>
          <img src={pinkLidImg} alt="Lid" className="w-80 rounded-t-xl transition-transform duration-300 hover:scale-[1.02]" />
          <h2 className='text-[background:#2DBBA4] text-xl font-extrabold text-center mt-5'>The LID</h2>
          <p className='text-center mt-3'>
            <strong>•</strong> Lid Depth (from top of lid to scalloped <br /> edging): 2.7"
          </p>
          <p className='text-sm text-[#7a7878] mt-5 text-center'>
            Our cupcake package lid is the perfect mix of classic <br /> style and modern engineering. The charming striped <br /> design and scalloped edging capture the...
            <a href="#" className='text-[background:#2DBBA4] underline cursor-pointer'> Read More</a>
          </p>
        </div>

        <div>
          <img src={insertImg} alt="Insert" className="w-80 rounded-t-xl  transition-transform duration-300 hover:scale-[1.02]" />
          <h2 className='text-[background:#2DBBA4] text-xl font-extrabold text-center mt-5'>The Insert</h2>
          <p className='text-center mt-3'><strong>•</strong> Mini Diameter: 1.5"</p>
          <p className='text-center'><strong>•</strong> Standard Diameter: 2.25"</p>
          <p className='text-sm text-[#7a7878] mt-5 text-center'>
            Not all cupcakes are created equally! Meticulously <br /> designed to ensure the perfect fit for both mini and <br /> regular-sized cupcakes, our insert contai...
            <a href="#" className='text-[background:#2DBBA4] underline cursor-pointer'> Read More</a>
          </p>
        </div>

        <div>
          <img src={bottomImg} alt="Bottom" className="w-80 rounded-t-xl transition-transform duration-300 hover:scale-[1.02]" />
          <h2 className='text-[background:#2DBBA4] text-xl font-extrabold text-center mt-5'>The Bottom</h2>
          <p className='text-center mt-3'><strong>•</strong> Deep: 4.2"</p>
          <p className='text-center'><strong>•</strong> Length: 13.2"</p>
          <p className='text-center'><strong>•</strong> Width: 6 3/4"</p>
          <p className='text-sm text-[#7a7878] mt-5 text-center'>
            Introducing the foundation of our cupcake package <br /> the bottom! Engineered with a hassle-fre...
            <a href="#" className='text-[background:#2DBBA4] underline cursor-pointer'> Read More</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
