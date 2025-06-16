import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeaderCarousel = () => {
  const imageMap = [
    {
      desktop:
        "/assets/images/home-page-banner/desktop/home-page-banner-desktop-1.jpg",
      mobile:
        "/assets/images/home-page-banner/mobile/home-page-banner-mobile-1.jpg",
      alt: "Día del Padre",
      link: "https://open.spotify.com/playlist/16f6EeKTcW1JyPAewb52I1",
    },
    {
      desktop:
        "/assets/images/home-page-banner/desktop/home-page-banner-desktop-2.jpg",
      mobile:
        "/assets/images/home-page-banner/mobile/home-page-banner-mobile-2.jpg",
      alt: "Pride Day",
      link: "https://open.spotify.com/playlist/4zi1xjOHKiQh5G8ancxArF",
    },
    {
      desktop:
        "/assets/images/home-page-banner/desktop/home-page-banner-desktop-3.jpg",
      mobile:
        "/assets/images/home-page-banner/mobile/home-page-banner-mobile-3.jpg",
      alt: "Girl Power",
      link: "/",
    },
    {
      desktop:
        "/assets/images/home-page-banner/desktop/home-page-banner-desktop-4.jpg",
      mobile:
        "/assets/images/home-page-banner/mobile/home-page-banner-mobile-4.jpg",
      alt: "Hip-Hop",
      link: "/",
    },
  ];

  return (
    <Carousel
      showArrows
      showIndicators
      infiniteLoop
      autoPlay
      interval={4000}
      showThumbs={false}
      showStatus={false}
      swipeable
      emulateTouch
      dynamicHeight={false}
    >
      {imageMap.map(({ desktop, mobile, alt, link }, i) => {
        const picture = (
          <picture className="w-full">
            <source media="(min-width:768px)" srcSet={desktop} />
            <img
              src={mobile}
              alt={alt}
              className="w-full object-cover object-center max-h-[600px]"
            />
          </picture>
        );

        return (
          <div key={i} className="flex items-center justify-center">
            {link ? (
              <a href={link} target="_blank" rel="noopener noreferrer">
                {picture}
              </a>
            ) : (
              picture
            )}
          </div>
        );
      })}
    </Carousel>
  );
};

export default HeaderCarousel;
