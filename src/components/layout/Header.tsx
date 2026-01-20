import Link from "next/link";
import { navLinks } from "@/app/data/navLinks";

const Header = () => {
  return (
    <header className="absolute top-0 z-50 w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <div className="text-xl font-bold text-black">
          SSA Hunter Valley
        </div>

       
        <nav className="hidden gap-8 md:flex">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="text-sm text-black transition-colors hover:text-primary"
            >
              {name}
            </Link>
          ))}
        </nav>

        
        <button className="rounded-full border border-[rgba(122,146,49,0.7)] px-8 py-2 text-black transition-colors hover:bg-black hover:text-white">
          Register Now
        </button>
      </div>
    </header>
  );
};

export default Header;
