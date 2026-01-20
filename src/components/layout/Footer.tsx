import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-36 w-full text-black">
      
      <div className="flex h-[420px] w-full">
        
        <div className="relative w-1/2">
          <Image
            src="/images/coaches.jpg"
            alt="Coaches"
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="/images/video-poster-black.jpg"
          />
          <div className="absolute inset-0 flex flex-col justify-center bg-black/40 px-16">
            <h2 className="mb-4 text-4xl font-bold text-white">Our Coaches</h2>
            <p className="mb-6 max-w-md text-white/80">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <span className="flex items-center gap-2 font-medium text-white">
              Read More <span>→</span>
            </span>
          </div>
        </div>

       
        <div className="relative flex w-1/2 flex-col justify-center bg-[#9AC11C] px-16">
          <h2 className="mb-4 text-4xl font-bold text-white">Events</h2>
          <p className="mb-6 max-w-md text-white/90">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
          <span className="flex items-center gap-2 font-medium text-white">
            Read More <span>→</span>
          </span>
        </div>
      </div>

     
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-start gap-12 md:grid-cols-3">
         
          <div>
            <Image
              src="/images/logo.jpg"
              alt="SSA Logo"
              width={128}
              height={128}
              className="w-32"
            />
          </div>

        
          <div className="md:col-span-2">
           
            <div className="grid grid-cols-2 gap-y-6 text-sm text-black/70 md:grid-cols-6">
              <span>About Us</span>
              <span>Coaches</span>
              <span>News</span>
              <span>Matches</span>
              <span>Events</span>
              <span>FAQs</span>
              <span>Programs</span>
              <span>Amenities</span>
              <span>Blogs</span>
            </div>

            <div className="my-12 border-t border-black/10" />

           
            <div className="grid items-start gap-10 md:grid-cols-2">
              <div>
                <h4 className="mb-4 font-semibold text-[#9AC11C]">
                  Signature Slam Academy
                </h4>
                <p className="mb-2 text-sm">30 Wills Hill Road, Lovedale, NSW</p>
                <p className="mb-2 text-sm">+91 5642589752</p>
                <p className="text-sm">info@ssagroup.com</p>
              </div>

              <div>
                <h4 className="mb-4 font-semibold text-[#9AC11C]">
                  Connect with us
                </h4>
                <div className="flex gap-4 text-xl">
                  <FaFacebookF className="cursor-pointer hover:text-[#9AC11C]" />
                  <FaTwitter className="cursor-pointer hover:text-[#9AC11C]" />
                  <FaInstagram className="cursor-pointer hover:text-[#9AC11C]" />
                  <FaLinkedinIn className="cursor-pointer hover:text-[#9AC11C]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="flex w-full justify-between bg-gradient-to-r from-[#0B3C5D] to-[#9AC11C] px-6 py-4 text-sm text-white">
        <span>Terms And Condition</span>
        <span>© 2023 All Rights Reserved www.signatureslamacademy.com</span>
        <span>Privacy Policy</span>
      </div>
    </footer>
  );
};

export default Footer;
