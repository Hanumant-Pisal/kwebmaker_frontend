import Image from 'next/image';

const About = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      
      <div className="absolute left-0 top-0 hidden md:block h-full w-[420px] pointer-events-none select-none z-0">
        <svg
          viewBox="0 0 350 600"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <polygon
            points="0,0 90,0 350,600 260,600 130,300 0,300"
            fill="#f0f7dd"
          />
        </svg>
      </div>

      
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center mb-10">
        <p className="text-xl md:text-2xl text-gray-800 leading-snug">
          To be the first venue in the world to have{' '}
          <span className="font-semibold text-[rgba(122,146,49,0.7)]">
            60 multi surface courts
          </span>
          <br />
          at one location and establish first one stop tennis academy
          <br />
          in the Asia Pacific producing grand slam champions.
        </p>
      </div>

    
      <div className="relative z-10 flex justify-center mb-14">
        <div className="flex gap-20 max-w-2xl w-full justify-center">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-black">About Us</span>
            <span className="mt-2 w-20 h-1 rounded bg-[rgba(122,146,49,0.7)]" />
          </div>
          <span className="text-2xl font-bold text-gray-400">Coaches</span>
          <span className="text-2xl font-bold text-gray-400">Vision</span>
          <span className="text-2xl font-bold text-gray-400">Mission</span>
        </div>
      </div>

      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
       
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              About Us
            </h2>
            <span className="w-2 h-2 rounded-full bg-[rgba(122,146,49,0.7)]" />
          </div>

          <p className="text-sm text-gray-700 mb-6 max-w-md">
            To be the first venue in the world to have 60 multi surface courts at
            one location and establish first one stop tennis academy in the Asia
            Pacific producing grand slam champions.
          </p>

         
          <div className="grid grid-cols-4 gap-6 text-center mb-8 max-w-md">
            {[
              { value: '20', label: 'courts' },
              { value: '12', label: 'coaches' },
              { value: '17', label: 'years' },
              { value: '10', label: 'clubs' },
            ].map((item) => (
              <div key={item.label}>
                <h3 className="text-2xl font-bold text-[#7a9231]">
                  {item.value}
                </h3>
                <p className="text-xs text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>

          <button className="px-8 py-2 rounded-full bg-[#b5dc41] text-white font-medium hover:bg-[#5d6e24] transition-colors">
            Read More
          </button>
        </div>

        
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {[
            { src: '/images/about.webp', alt: 'Tennis court' },
            { src: '/images/about1.webp', alt: 'Tennis training' },
            { src: '/images/about3.webp', alt: 'Tennis match' },
            { src: '/images/about4.webp', alt: 'Tennis academy' },
          ].map((img) => (
            <div key={img.src} className="relative w-full h-36 md:h-40 lg:h-48">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="rounded-xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
