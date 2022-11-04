import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default function CarouselHeader(props) {
  const { data } = props;
  return (
    <Carousel
      infiniteLoop
      showArrows
      stopOnHover
      autoPlay
      showStatus={false}
      showThumbs={false}
    >
      {data.map((item) => (
        <div
          className="h-[600px] ana bg-gradient-to-t from-black to-transparent flex items-end justify-start pb-32 px-16"
          key={`carousel-${item.id}`}
        >
          <Image
            className="h-full object-cover object-center -z-10"
            src={item.imageSrc}
            alt="carousel"
            layout="fill"
          />
          <div className="text-white flex flex-col gap-8">
            <h1 className="text-6xl">{item.title}</h1>
            <h2 className="text-2xl">{item.description}</h2>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

CarouselHeader.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
    })
  ),
};
