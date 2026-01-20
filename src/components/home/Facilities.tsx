'use client';

import { useRef, useState } from 'react';

const Facilities = () => {
  const FacilityCard = ({
    title,
    tags,
    description,
    textColor = 'text-white',
    tagStyle = 'bg-white text-black',
    videoSrc = '/images/tennis.mp4',
  }: {
    title: string;
    tags: string[];
    description: string;
    textColor?: string;
    tagStyle?: string;
    videoSrc?: string;
  }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleToggle = async () => {
      const video = videoRef.current;
      if (!video) return;

      try {
        if (isPlaying) {
          video.pause();
          setIsPlaying(false);
        } else {
          await video.play();
          setIsPlaying(true);
        }
      } catch (err) {
        console.warn('Video play failed:', err);
      }
    };

    return (
      <div className="md:col-span-4">
       
        <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-black">
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/video-poster-black.jpg"
            className="h-full w-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <button
              onClick={handleToggle}
              className="rounded-full bg-[#b5dc41] px-6 py-3 font-semibold text-black hover:bg-[#7a9231] hover:text-white transition-colors"
            >
              {isPlaying ? 'Pause Video' : 'Play Video'}
            </button>
          </div>
        </div>

    
        <div className="mt-4">
          <h3 className={`text-lg font-semibold ${textColor}`}>{title}</h3>
          <div className="my-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className={`rounded-full px-3 py-1 text-xs ${tagStyle}`}>
                {tag}
              </span>
            ))}
          </div>
          <p
            className={`text-sm ${
              textColor === 'text-white' ? 'text-white' : 'text-gray-600'
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="relative pt-10">
     
      <div className="absolute inset-0 top-80 bottom-60 -z-10 bg-gradient-to-r from-[#0B3C5D] to-[#9AC11C]" />

      <div className="mx-auto max-w-7xl px-6">
      
        <div className="mb-10 flex flex-col md:flex-row md:items-start md:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <h2 className="text-3xl font-bold text-black">Facilities</h2>
              <span className="inline-block h-2 w-2 rounded-full bg-[rgba(122,146,49,0.7)]" />
            </div>
            <p className="max-w-2xl text-sm text-gray-500">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>

        
        <div className="grid grid-cols-1 gap-x-6 gap-y-40 px-4 md:grid-cols-12">
          <FacilityCard
            title="Tennis"
            tags={['9 Clay Courts', '4 Hard Courts']}
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            videoSrc="/images/tennis.mp4"
          />

          <FacilityCard
            title="Accommodation"
            tags={['5 Star Hotel']}
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            videoSrc="/images/hotel.mp4"
          />

          
          <div className="hidden md:col-span-4 md:block" />
          <div className="hidden md:col-span-4 md:block" />

          <FacilityCard
            title="Fitness"
            tags={['Gym', 'Fitness Room']}
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            textColor="text-black"
            tagStyle="bg-[#9AC11C] text-white"
            videoSrc="/images/fitness.mp4"
          />

          <FacilityCard
            title="Recovery"
            tags={['Spa', 'Pool', 'Massage']}
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            textColor="text-black"
            tagStyle="bg-[#9AC11C] text-white"
            videoSrc="/images/recovery.mp4"
          />
        </div>
      </div>
    </section>
  );
};

export default Facilities;
