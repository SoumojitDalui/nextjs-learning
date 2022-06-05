import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="text-slate-400 body-font sticky top-0 bg-slate-700 text-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center hover:text-slate-50 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">SQMC India</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <ul className='flex flex-row'>
            <li className='mr-5 hover:text-slate-50'><Link href="/"><a>Home</a></Link></li>
            <li className='mr-5 hover:text-slate-50'><Link href="/about"><a>About</a></Link></li>
            <li className='hover:text-slate-50'><Link href="/contact"><a>Contact</a></Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar