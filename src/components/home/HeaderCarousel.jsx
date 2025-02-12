import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerSlide from "../../assets/banner-hero-1.png";

const HeaderCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      showIndicators={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={4000}
      showThumbs={false}
      showStatus={false}
      swipeable={true}
      emulateTouch={true}
      dynamicHeight={true}
    >
      {/* Slide 1 */}
      <div className="flex flex-col items-center justify-center">
        <img src={bannerSlide} alt="Banner Hero 1" className="w-full object-cover object-center max-h-[600px]" />
      </div>
      {/* Slide 2 */}
      <div className="flex flex-col items-center justify-center">
        <img src={bannerSlide} alt="Banner Hero 1" className="w-full object-cover object-center max-h-[600px]" />
      </div>
      {/* Slide 3 */}
      <div className="flex flex-col items-center justify-center">
        <img src={bannerSlide} alt="Banner Hero 1" className="w-full object-cover object-center max-h-[600px]" />
      </div>
    </Carousel>
  );
};

export default HeaderCarousel;
