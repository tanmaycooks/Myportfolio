import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text + image row */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 flex flex-col xl:flex-row items-stretch">
        {/* left: text */}
        <div className="flex-1 flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            I'm someone who believes in turning ideas into reality through thoughtful design and purposeful development. Whether it's solving real-world problems or creating experiences that matter, I enjoy the process of building from the ground up. I'm constantly learning, evolving, and pushing boundaries to bring imagination closer to execution.
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
        {/* right: image */}
        <div className="flex-1 flex items-center justify-center relative xl:pr-16 xl:pb-12">
          {/* bg img */}
          <div
            role="img"
            className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 pointer-events-none"
            aria-hidden
          />
          {/* particles */}
          <ParticlesContainer />
          {/* avatar image */}
          <img
            src="/avatar.png"
            alt="Avatar"
            className="relative z-10 w-[350px] h-[500px] object-cover rounded-none shadow-none xl:block hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;



