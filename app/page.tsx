import { Button } from "@/components/ui/button";
import { ArrowBigDownDashIcon } from "lucide-react"
import Social from "@/components/section/Social"
import Photo from "@/components/section/Photo";

export default function Home() {
  return (

    <section
      className="h-full"
    >
      <div
        className="container mx-auto h-full"
      >
        <div
          className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24"
        >
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I'm <br /> <span className="text-accent">Farrel Adivia</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quas mollitia natus, fugit ea repudiandae! Maiores quidem ex incidunt, libero suscipit molestias ab nobis, quas, ut aperiam accusamus placeat architecto!</p>
            {/* btn */}
            <div
              className="flex flex-col xl:flex-row items-center gap-8"
            >
              <Button variant="outline" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <ArrowBigDownDashIcon className="text-xl" />
              </Button>
              <div
                className="mb-8 xl:mb-0"
              >
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>

          </div>
          {/* photo */}
          <div
            className="order-1 xl:order-none mb-8 xl:mb-0"
          >
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}

{/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>homepage</h1>
      </div>
    </main> */}
