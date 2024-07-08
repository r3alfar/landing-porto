"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { links } from "@/model/navigation"


function NavMenu() {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${link.path === pathname && "text-secondary border-b-2 border-secondary"}
              capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default NavMenu