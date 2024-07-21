"use client"

import { easeIn, motion } from "framer-motion"
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"
import "swiper/css"
import { useState } from "react";

import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import WorkSlider from "@/components/section/WorkSlider";


const projectsData = [
  {
    id: 1,
    title: "Nextjs Datatable CRUD",
    description: "Simple data table to provide project timesheet. Build under Nextjs 14 App Router with Prefetched data",
    tag: ["All", "Web"],
    stack: [
      {
        name: "Next.js"
      },
      {
        name: "React JS",
      },
      {
        name: "Tailwind CSS"
      },
      {
        name: "Shadcn UI"
      },
      {
        name: "Postgre SQL"
      }
    ],
    image: "/assets/work/timesheet.png",
    gitUrl: "https://github.com/r3alfar/timesheet-app",
    previewUrl: "https://timesheet-app-mu.vercel.app",
    category: "fullstack"
  },
  {
    id: 2,
    title: "Simple Pomodoro App with tasklist",
    description: "Stay focused using pomodoro technique and track your tasks",
    stack: [
      {
        name: "Vite"
      },
      {
        name: "React JS",
      },
      {
        name: "Tailwind css"
      },
      {
        name: "Shadcn UI"
      }
    ],
    image: "/assets/work/vite-pomodoro.png",
    gitUrl: "https://github.com/r3alfar/vite-pomodoro",
    previewUrl: "https://vite-pomodoro.vercel.app",
    category: "frontend",
  },
  {
    id: 3,
    title: "Simple Food Community Page",
    description: "Join and share your favorite cuisines in our community.",
    stack: [
      {
        name: "Nextjs"
      },
      {
        name: "React Js",
      },
      {
        name: "AWS S3"
      }
    ],
    image: "/assets/work/foodNextjs.png",
    gitUrl: "https://github.com/r3alfar/learn-next",
    previewUrl: "/",
    category: "fullstack",
  },
  // {
  //   id: 4,
  //   title: "Food Ordering Application",
  //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ad accusamus obcaecati nisi, consectetur ducimus.",
  //   stack: [
  //     {
  //       name: "Html 5"
  //     },
  //     {
  //       name: "Javascript",
  //     },
  //     {
  //       name: "Css 3"
  //     }
  //   ],
  //   image: "/assets/work/5.png",
  //   gitUrl: "/",
  //   previewUrl: "/",
  //   category: "fullstack"
  // },
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ad accusamus obcaecati nisi, consectetur ducimus.",
  //   stack: [
  //     {
  //       name: "Html 5"
  //     },
  //     {
  //       name: "Javascript",
  //     },
  //     {
  //       name: "Css 3"
  //     }
  //   ],
  //   image: "/assets/work/4.png",
  //   gitUrl: "/",
  //   previewUrl: "/",
  //   category: "frontend",
  // },
  {
    id: 6,
    title: "Centralized GO Rest API [Ongoing]",
    description: "Personal Centralize Backend API, integrated to several services like AWS or VercelPostgre",
    stack: [
      {
        name: "Golang"
      },
      {
        name: "REST API",
      },
      {
        name: "GO chi"
      }, {
        name: "AWS"
      }
    ],
    image: "/assets/work/6.png",
    gitUrl: "https://github.com/r3alfar/go-porto-backend",
    previewUrl: "/",
    category: "fullstack"
  },
  {
    id: 7,
    title: 'Integrating API and CRON jobs [Maintenance]',
    description: "Simple Valorant match and stats tracking fetched daily",
    stack: [
      {
        name: "Vite"
      },
      {
        name: "React JS",
      },
      {
        name: "Go-RestAPI"
      }, {
        name: "Tailwind CSS"
      }
    ],
    image: "/assets/work/7val.webp",
    gitUrl: "https://github.com/r3alfar/valo-cron",
    previewUrl: "/",
    category: "backend",
  }
];

function WorkPage() {
  const [project, setProject] = useState(projectsData[0])

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.activeIndex;

    setProject(projectsData[currentIndex])
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div
        className="container mx-auto"
      >
        <div
          className="flex flex-col xl:flex-row xl:gap-[30px]"
        >
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50% ]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.id}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize"> {project.title}</h2>
              {/* oroiject descrip */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {
                  project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-xl text-accent">
                        {item.name}
                        {/* remove last comma */}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    )
                  })
                }
              </ul>
              {/* border */}
              <div
                className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project */}
                <Link href={project.previewUrl}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight
                          className="text-white text-3xl group-hover:text-accent"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github link */}
                <Link href={project.gitUrl}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub
                          className="text-white text-3xl group-hover:text-accent"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github link</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projectsData.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div
                      className="h-[460px] relative group flex justify-center items-center bg-pink-50/20"
                    >
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* iamge */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt="project image"
                          fill
                          className="object-cover"
                        />
                      </div>

                    </div>
                  </SwiperSlide>
                )
              })}
              {/* slider buttons */}
              <WorkSlider
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default WorkPage