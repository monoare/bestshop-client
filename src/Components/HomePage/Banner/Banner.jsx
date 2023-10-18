import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import slider1 from "../../../assets/slider-1.jpg";
import slider2 from "../../../assets/slider-2.jpg";
import slider3 from "../../../assets/slider-3.jpg";
const Banner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div>
      <AutoplaySlider
        play={false}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
        className="text-white h-[80vh]"
      >
        {/* Slider-1 */}
        <div className="text-black w-full relative" data-src={slider1}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="ml-32">
            <p className="text-black text-lg font-bold mb-4 uppercase">
              New Collection
            </p>
            <h1 className="text-black font-bold text-6xl mb-4 w-2/5">
              Find Your New Favorite Clothing
            </h1>
            <p className="text-lg font-bold text-[#777777]">
              Keep perfect time with the contemporary, exactly-crafted designs.
            </p>
          </div>
        </div>

        {/* Slider-2 */}
        <div className="w-full relative" data-src={slider2}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="text-center">
            <p className="text-white text-lg font-bold mb-4 uppercase">
              Need-It-Now
            </p>
            <h1 className="text-white font-bold text-6xl mb-4">
              Must-HavesFor The Seasons
            </h1>
            <p className="text-lg font-bold text-white">
              Contemporary, minimal and beautifully iconic
            </p>
          </div>
        </div>

        {/* Slider-3 */}
        <div className="w-full relative" data-src={slider3}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="absolute -top-24 right-0">
            <p className="text-white text-lg font-bold mb-4 uppercase">
              Don&apos;t miss Today&apos;s Feature Deals
            </p>
            <h1 className="text-white font-bold text-6xl mb-4 w-2/3">
              Get Up to 50% off
            </h1>
            <p className="text-lg font-bold text-white">
              Here to bring your life style to the next level
            </p>
          </div>
        </div>
      </AutoplaySlider>
    </div>
  );
};

export default Banner;
