const Quote = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-gray-200">
    
      <div className="absolute inset-0 bg-black/5" />

     
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:140px_100%]" />

      
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        aria-hidden="true"
      />

   
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-left">
        <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
          “We have created an environment ideal for building craft.
          Our goal is to be recognized as the best tennis performance
          centre in the world.”
        </p>

        <div className="w-200 h-px bg-white/60 my-10" />

        <div>
          <p className="text-white font-medium">John Doe</p>
          <p className="text-sm text-white/70">Chairman</p>
        </div>
      </div>
    </section>
  );
};

export default Quote;
