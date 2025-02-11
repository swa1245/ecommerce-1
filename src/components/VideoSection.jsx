import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
// import video1 from './assests/video 1.mp4';
// import video2 from './assests/video 2.mp4';
// import video3 from './assests/video 3.mp4';
import video4 from './assests/video4.mp4';
// import video5 from './assests/video5.mp4';
import video6 from './assests/video6.mp4';
import video7 from './assests/video7.mp4';
import video8 from './assests/video8.mp4';
import video9 from './assests/video9.mp4';
import video10 from './assests/video10.mp4';

const VideoCard = ({ videoSrc, title, description, index }) => {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { margin: "-10%" });

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  }, [isInView]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-300 bg-gray-900"
    >
      <div className="relative aspect-[4/3] sm:aspect-[16/9]">
        <video
          ref={videoRef}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          playsInline
          autoPlay
          muted
          loop
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 transform transition-transform duration-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 text-white group-hover:text-yellow-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-gray-200 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300">
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const VideoSection = () => {
  const videos = [
    // {
    //   id: 1,
    //   videoSrc: video1,
    //   title: 'Custom Creations',
    //   description: 'Watch our artisans bring your ideas to life with precision and care'
    // },
    // {
    //   id: 2,
    //   videoSrc: video2,
    //   title: 'Design Excellence',
    //   description: 'Experience the perfect blend of creativity and craftsmanship'
    // },
    // {
    //   id: 3,
    //   videoSrc: video3,
    //   title: 'Quality Showcase',
    //   description: 'Every stitch tells a story of quality and dedication'
    // },
    {
      id: 4,
      videoSrc: video4,
      title: 'Behind the Scenes',
      description: 'Take a peek into our creative process and workshop'
    },
    // {
    //   id: 5,
    //   videoSrc: video5,
    //   title: 'Latest Collection',
    //   description: 'Discover our newest designs and trending styles'
    // },
    {
      id: 6,
      videoSrc: video6,
      title: 'Customer Stories',
      description: 'Real people, real experiences with our custom products'
    },
    {
      id: 7,
      videoSrc: video7,
      title: 'Fashion Forward',
      description: 'Setting trends with innovative designs and styles'
    },
    {
      id: 8,
      videoSrc: video8,
      title: 'Craftsmanship',
      description: 'Witness the artistry behind every product we create'
    },
    {
      id: 9,
      videoSrc: video9,
      title: 'Special Moments',
      description: 'Creating memories with our customized products'
    },
    {
      id: 10,
      videoSrc: video10,
      title: 'Premium Quality',
      description: 'Experience the excellence in every detail'
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-gray-900"
        >
          Our Latest Creations
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {videos.map((video, index) => (
            <VideoCard
              key={video.id}
              {...video}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
