import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
   <header className="absolute w-screen max-h-[280px] z-10 top-0 left-0 right-0 border-x-4 border-x-white">
        <nav className="w-full h-full relative flex justify-between rounded-t-31xl">
          <Link href={'/'} className='flex-1'>
            <Logo />
          </Link>

      <div className="flex flex-col flex-end justify-end pt-20">

       <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
        <div className='block'>
          <Image src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
       
      </div>
         
      </nav>
    </header>
  );
};