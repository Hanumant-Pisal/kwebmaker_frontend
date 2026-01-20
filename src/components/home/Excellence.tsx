import Image from 'next/image';
import features from '@/app/data/excellence';

const Excellence = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-3xl font-bold text-black">key Features</h2>
              <span className="w-2 h-2 rounded-full bg-[rgba(122,146,49,0.7)]" />
            </div>
            <p className="text-gray-500 text-sm max-w-2xl mb-4">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>
          </div>

          <button className="mt-0 md:mt-2 rounded-full bg-[#b5dc41] px-6 py-2 font-medium text-white transition-colors hover:bg-[#7a9231]">
            Register Now
          </button>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="mt-1 text-xl text-[#b5dc41]">→</span>
              <span className="text-sm leading-relaxed text-gray-800">
                {feature}
              </span>
            </div>
          ))}
        </div>

        
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-3xl font-bold text-black">
                A Glimpse of Excellence
              </h2>
              <span className="w-2 h-2 rounded-full bg-[rgba(122,146,49,0.7)]" />
            </div>
            <p className="text-gray-500 text-sm max-w-2xl mb-4">
              Lorem Ipsum has been the industry's standard dummy text <br />ever since
              the 1500s.
            </p>
          </div>

          <button className="mt-0 md:mt-2 rounded-full bg-[#b5dc41] px-6 py-2 font-medium text-white transition-colors hover:bg-[#7a9231]">
            Register Now
          </button>
        </div>

       
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative h-64 md:h-96 overflow-hidden rounded-xl">
            <Image
              src="/images/Player.webp"
              alt="Tennis player"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="relative h-64 md:h-96 overflow-hidden rounded-xl">
            <Image
              src="/images/ground.webp"
              alt="Tennis ground"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Excellence;
