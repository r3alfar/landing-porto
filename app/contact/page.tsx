"use client"
import FormContact from "@/components/section/FormContact"
import { motion } from "framer-motion"
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6"



const info = [
  {
    icon: <FaPhone />,
    title: "Phone",
    description: "(+62)851 5643 1293",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "farreladivia@gmail.com",
  },
  {
    icon: <FaLocationDot />,
    title: "Address",
    description: "Lippo Village, Karawaci, Tangerang",
  },

]

function ContactPage() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div
        className="container mx-auto"
      >
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div
            className="xl:w-[54%] order-2 xl:order-none"
          >
            {/* FORM */}
            <div className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor minus quod molestiae quia veritatis! Reprehenderit.</p>
              <FormContact />
            </div>
          </div>
          {/* info */}
          <div
            className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0"
          >
            <ul className="flex flex-col gap-10">
              {
                info.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="flex items-center gap-6"
                    >
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#2727c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>

      </div>
    </motion.section>
  )
}

export default ContactPage