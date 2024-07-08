import Link from 'next/link'
import DesktopNav from './desktopNav'
import { Button } from '@/components/ui/button'
import NavMenu from './nav-menu'
import MobileNav from './MobileNav'

function MyNavbar() {
  return (
    // <header className="w-full border-b">
    //   <div className="flex h-14 items-center px-4 justify-center">
    //     <DesktopNav />
    //     <MobileNav />
    //   </div>
    // </header>

    <header className='py-8 xl:py-12 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <Link href="/">
          <h1 className='text-4xl font-semibold'>
            R3alfar<span className='text-accent'>.</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div
          className='hidden xl:flex items-center gap-8'
        >
          <NavMenu />
          <Link href="/">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div
          className='xl:hidden'
        >
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default MyNavbar