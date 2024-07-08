"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { links } from "@/model/navigation"
import { MenuIcon } from 'lucide-react';
import { Button } from "../ui/button"

function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild
        className="flex justify-center items-center"
      >
        <Button variant="ghost" size="icon" className="">
          <MenuIcon className="text-[32px] text-white" />
        </Button>

      </SheetTrigger>
      <SheetContent>
        {/* logo */}
        <div
          className="mt-32 mb-40 text-center text-2xl"
        >
          <Link href="/">
            <h1
              className="text-4xl font-semibold"
            >
              Realfar<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {
            links.map((link, index) => {
              return (
                <Link href={link.path} key={index}
                  className={`
                ${link.path === pathname &&
                    "text-accent border-b-2 border-accent"

                    }
                text-xl capitalize hover:text-accent transition-all`
                  }>
                  {link.name}
                </Link>
              )
            })
          }
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav