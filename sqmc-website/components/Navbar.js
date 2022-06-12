import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [scrollY, setScrollY] = React.useState(0);
  const [openDropdown, setOpenDropdown] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="body-font sticky top-0 bg-slate-700 text-white">
      <div className={scrollY > 100 ? "transition ease-linear duration-450 bg-slate-700 text-slate-400" : "transition ease-linear duration-450 bg-slate-50 text-slate-800"}>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className={scrollY > 100 ? "flex title-font font-medium items-center hover:text-slate-50 mb-4 md:mb-0" : "flex title-font font-medium items-center hover:text-slate-400 mb-4 md:mb-0"}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">SQMC India</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <ul className='flex flex-row'>
              <li className={scrollY > 100 ? "mr-5 hover:text-slate-50" : "mr-5 hover:text-slate-400"}><Link href="/"><a>Home</a></Link></li>
              <li className={scrollY > 100 ? "mr-5 hover:text-slate-50" : "mr-5 hover:text-slate-400"}><Link href="/about"><a>About</a></Link></li>
              <li className={scrollY > 100 ? "hover:text-slate-50" : "hover:text-slate-400"}><Link href="/contact"><a>Contact</a></Link></li>
              {/* <li className={scrollY > 100 ? "hover:text-slate-50" : "hover:text-slate-400"}>
                <Link href="/contact">
                  <a className='flex flex-row'>Services<img src="/angle-down-solid.svg" width="5" height="5" className='cursor-pointer ml-1 mt-0.5' /></a>
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar