
import React from 'react';
import './video.css'
const VideoFinder: React.FC = () => {
  return (
    <div className="hello relative overflow-hidden h-[500px] sm:h-[400px]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
        style={{
          height: '500px',
        }}
      >
        <source src="./logo/video.mp4" type="video/mp4" />
      </video>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      {/* Text Overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
          Find Your Perfect College
        </h1>
        <p className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md mx-auto">
          Choose colleges based on your qualifications and budget. Start your journey to success today!
        </p>
      </div>
    </div>
  );
};

export default VideoFinder;