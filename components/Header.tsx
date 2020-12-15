import Image from 'next/image'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="flex justify-center md:justify-between items-center py-2">
      <Image src="/img/logo.svg" alt="Logo DoWhile" width={150} height={33}/>

      <nav className="hidden md:block space-x-8">
        <Link href="nextjs">
          <a href="#" className="tracking-wide hover:text-gray-300 transition">Next.js</a>
        </Link>
        <Link href="tailwind">
          <a href="#" className="tracking-wide hover:text-gray-300 transition">Tailwind</a>
        </Link>
        <Link href="framermotion">
          <a href="#" className="tracking-wide hover:text-gray-300 transition">Framer Motion</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header;