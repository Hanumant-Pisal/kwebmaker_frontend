import Image from 'next/image';
import { professionals } from '@/app/data/professionals';

const Professionals = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="mb-10 flex flex-col md:flex-row md:items-start md:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <h2 className="text-3xl font-bold text-black">
                Meet our professionals
              </h2>
              <span className="inline-block h-2 w-2 rounded-full bg-[rgba(122,146,49,0.7)]" />
            </div>

            <p className="mb-4 max-w-2xl text-sm text-gray-500">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>

          <button className="mt-0 rounded-full bg-[#b5dc41] px-6 py-2 font-medium text-black transition-colors hover:bg-[#7a9231] hover:text-white md:mt-2">
            view all
          </button>
        </div>

       
        <div className="grid gap-8 md:grid-cols-3">
          {professionals.map(({ name, role, image }) => (
            <div key={name} className="flex flex-col">
              <div className="relative w-full h-72 mb-4 rounded-xl overflow-hidden">
                <Image
                  src={image}
                  alt={name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover rounded-xl"
                />
              </div>
              <h4 className="font-semibold">{name}</h4>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Professionals;
