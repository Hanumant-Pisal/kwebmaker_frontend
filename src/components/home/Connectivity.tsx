import Image from 'next/image';
import { connectivity } from '@/app/data/connectivity';

const Connectivity = () => {
  return (
<section className="grid min-h-[600px] md:grid-cols-[1.2fr_2fr]">      
      <div className="flex flex-col justify-center bg-gradient-to-br from-[#0B3C5D] to-[#9AC11C] p-10 text-white">
        <div className="w-full max-w-md mx-auto">
          <span className="mb-2 block text-lg font-medium tracking-widest text-white">
            LAUNCHING
          </span>

          <h2 className="mb-8 text-4xl font-bold leading-tight">
            Signature Slam Academy
            <br />
            Hunter Valley
          </h2>

          <h3 className="mb-6 text-2xl font-semibold">SSA Connectivity</h3>

          <ul className="space-y-4">
            {connectivity.map(({ place, distance }) => (
              <li
                key={place}
                className="flex justify-between border-b border-white/20 pb-2"
              >
                <span>{place}</span>
                <span className="font-medium">{distance}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

     
      <div className="relative w-full h-96 md:h-auto">
        <Image
          src="/images/golf.jpg"
          alt="Golf"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Connectivity;
