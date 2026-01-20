import Image from 'next/image';

const Programs = () => {
    const programData = [
        {
            title: 'Academy',
            subtitle: 'Live and train with us',
            image: '/images/home.webp',
        },
        {
            title: 'Camps',
            subtitle: 'Train like a pro with us',
            image: '/images/training.webp',
        },
        {
            title: 'Performance',
            subtitle: 'Elevate your growth with us',
            image: '/images/perform.webp',
        },
    ];



 const words = [
  { text: "ADOPT", type: "fill" },
  { text: "NURTURE", type: "outline" },
  { text: "DELIVER", type: "fill" },
  { text: "ADOPT", type: "outline" },
  { text: "NURTURE", type: "fill" },
];

    return (
        <section className="relative py-20 bg-white overflow-hidden">

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <h2 className="text-3xl font-bold text-black">Programs</h2>
                            <span className="w-2 h-2 rounded-full bg-[#b5dc41]" />
                        </div>
                        <p className="text-sm text-gray-500 max-w-2xl mb-4">
                            Lorem Ipsum has been the industry's standard dummy text <br />ever since
                            the 1500s.
                        </p>
                    </div>

                    <button className="mt-0 md:mt-2 rounded-full bg-[#b5dc41] px-6 py-2 font-medium text-white transition-colors hover:bg-[#7a9231]">
                        Register Now
                    </button>
                </div>
            </div>


            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-6">
                    {programData.map((item) => (
                        <div
                            key={item.title}
                            className="relative w-full h-72 md:h-120 rounded-xl overflow-hidden group"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover transition-opacity group-hover:opacity-90 rounded-xl"
                            />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
                                <h3 className="text-2xl md:text-3xl font-bold mb-1">{item.title}</h3>
                                <p className="text-lg md:text-xl">{item.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

<div className="mt-16 w-full overflow-hidden">
  <div className="flex w-full animate-[marquee_20s_linear_infinite]">
    {words.map((word, i) => (
      <div
        key={i}
        className="flex w-1/5 items-center justify-center
                   text-2xl md:text-3xl font-bold tracking-widest"
      >
        {/* word */}
        <span
          className={
            word.type === "outline"
              ? "text-outline-green"
              : "text-fill-green"
          }
        >
          {word.text}
        </span>

        {/* dot */}
        {i !== words.length - 1 && (
          <span
            className="mx-6 md:mx-8 text-fill-green leading-none"
            style={{ fontSize: "1.8em" }}
          >
            ·
          </span>
        )}
      </div>
    ))}
  </div>
</div>



        </section>
    );
};

export default Programs;
