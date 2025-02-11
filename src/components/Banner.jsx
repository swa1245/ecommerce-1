import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import image from "./assests/valentinesday.png"

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const images = [
    {
      src: image,
      alt: "Fashionable women having fun",
      caption: "Express Yourself with Trendy Styles",
    },
    {
      src: "https://i.pinimg.com/736x/4e/f1/6f/4ef16fe0fea3f5d8f2eff1a6d289e31f.jpg?ga=GA1.1.283813969.1731781095&semt=ais_hybrid",
      alt: "Purchase sale discount",
      caption: "Exciting Discounts Just for You!",
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0266/3546/8881/files/how-to-make-custom-mugs-to-sell-online.jpg?v=1685589972?ga=GA1.1.283813969.1731781095&semt=ais_hybrid",
      alt: "Travel with fun",
      caption: "Adventure Awaits – Explore Now!",
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="banner w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden relative"
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="w-full h-full"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover bg-center bg-no-repeat"
              />
            </motion.div>
            {/* Gradient Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
            >
              {/* Caption */}
              <div className="absolute bottom-10 w-full flex justify-center">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.3,
                    ease: "easeOut"
                  }}
                  className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center px-4"
                >
                  {image.caption}
                </motion.h2>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default Banner;
