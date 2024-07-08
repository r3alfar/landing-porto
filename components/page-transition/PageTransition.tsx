"use client"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import React, { ReactNode } from "react";


function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div
        key={pathname}
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" }
          }}
          className="h-screen w-screen fixed bg-blue-800 top-0 pointer-events-none"
        />
        {/* to change stair background color */}
        {children}
      </div>
    </AnimatePresence>
  )
}

export default PageTransition