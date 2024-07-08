import { color, motion } from "framer-motion"

const stairAnimation = {
  initial: {
    top: "0%"
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
}

const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
}

function Stairs() {
  return (
    // render 6 motion divs, each represention a tep of the stairs
    // each diov will have the same animation definded b the stairsAnimation object
    // creating a staggered effect with decreasing delay for each subsequent step.
    <>
      {
        [...Array(6)].map((_, index) => {
          return (
            <motion.div
              key={index}
              variants={stairAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: reverseIndex(index) * 0.1,
              }}
              className="h-full w-full bg-blue-950 relative"
            />
          )

        })

      }
    </>
  )
}

export default Stairs