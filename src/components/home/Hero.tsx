'use client';

import { useEffect, useState } from 'react';

const Hero = () => {
  const [isClient, setIsClient] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    setIsClient(true);

    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen relative overflow-hidden">
     
      <div className="absolute inset-0 z-0">
        {isClient && (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            // loading="lazy"
            poster="/images/hero-poster.jpg"
            className="w-full h-full object-cover"
            aria-label="Background video of sports activities"
          >
            <source src="/images/homepagevid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      </div>

      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <p className="tracking-widest mb-4 text-sm sm:text-base">
          SSA HUNTER VALLEY
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">
          GROW YOUR GAME WITH THE
        </h1>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 pb-2 border-b border-white w-fit mx-4">
          PROFESSIONALS
        </h2>

        <p
          className="mt-6 tracking-widest px-8 sm:px-16 md:px-20 py-2 text-sm sm:text-base"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(181,220,65,0.7) 30%, rgba(181,220,65,0.7) 70%, transparent 100%)',
          }}
        >
          ADOPT • NURTURE • DELIVER
        </p>

        <div className="flex flex-col items-center">
          <button
            className="mt-8 sm:mt-10 border border-[#b5dc41] px-6 sm:px-8 py-2 sm:py-3 rounded-full text-primary bg-white/10 hover:bg-[rgba(122,146,49,0.7)] hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgba(122,146,49,0.7)]"
            aria-label="Register Now"
          >
            Register Now
          </button>

         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
  <div
    className="text-[#b5dc41] text-4xl animate-bounce"
    aria-hidden="true"
  >
    ↓
  </div>
</div>
        </div>
      </div>

  
      <div className="absolute bottom-10 right-0 z-10 hidden md:block text-white">
        <div className="text-xs tracking-widest mb-2 flex items-center gap-2">
          <span className="text-[#b5dc41] text-lg md:text-xl">
            &laquo;&laquo;
          </span>
          <div className="flex-1 flex items-center">
            <span>WEATHER</span>
            <div className="flex-1 h-0.5 bg-[#b5dc41] ml-3" />
          </div>
        </div>

        <div className="p-6 w-72 bg-[rgba(122,146,49,0.7)]">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-sm font-semibold relative">
                Hunter Valley
              
              </div>
              <div className="text-5xl font-semibold leading-none mt-2">
                19&deg;C
              </div>
            </div>

            <div className="text-right">
              <div className="text-sm font-semibold">Weather</div>
              <div className="text-xs text-white/80 mt-1">
                {currentTime}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 text-xs tracking-widest flex items-center gap-2">
          <span className="text-[#b5dc41] text-lg md:text-xl">
            &laquo;&laquo;
          </span>
          <div className="flex-1 flex items-center">
            <span>ONGOING MATCHES</span>
            <div className="flex-1 h-0.5 bg-[#b5dc41] ml-3" />
          </div>
        </div>

        <div className="mt-3 text-xs tracking-widest flex items-center gap-2">
          <span className="text-[#b5dc41] text-lg md:text-xl">
            &laquo;&laquo;
          </span>
          <div className="flex-1 flex items-center">
            <span>SCORE</span>
            <div className="flex-1 h-0.5 bg-[#b5dc41] ml-3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
