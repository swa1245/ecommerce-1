import React from 'react';
import { motion } from 'framer-motion';
import video1 from './assests/video 1.mp4';
import video2 from './assests/video 2.mp4';
import video3 from './assests/video 3.mp4';

const VideoCard = ({ videoSrc, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-300 h-full"
    >
      <div className="relative overflow-hidden group">
        <video
          className="w-full h-full object-cover"
          controls
          playsInline
          preload="metadata"
          autoPlay
          muted
          loop
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 pointer-events-none" />
      </div>
      <motion.div 
        className="p-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-wide">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </motion.div>
    </motion.div>
  );
};

const VideoSection = () => {
  const videos = [
    {
      id: 1,
      videoSrc: video1,
      title: 'Product Showcase',
      description: 'Discover our amazing collection of customized products'
    },
    {
      id: 2,
      videoSrc: video2,
      title: 'Design Process',
      description: 'Watch how we bring your ideas to life'
    },
    {
      id: 3,
      videoSrc: video3,
      title: 'Design Process',
      description: 'Watch how we bring your ideas to life'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Watch Our Story</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get a closer look at our products and services through our video gallery
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              videoSrc={video.videoSrc}
              title={video.title}
              description={video.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
