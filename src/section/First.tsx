import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import HVCard from "../component/HVCard";

const First = () => {
  return (
    <main
      style={{ backgroundImage: `url("/public/images/bg-p1.jpg")` }}
      className="relative h-screen overflow-hidden bg-no-repeat bg-cover "
    >
      {/* <audio
        autoPlay
        loop
        controls
        className="absolute bottom-0  -right-0 w-28"
      >
        <source
          className="bg-pink-50"
          src="/public/mp3/ipos.mp3"
          type="audio/mpeg"
        />
      </audio> */}
      <motion.div
        initial={{ width: 2000 }}
        animate={{ width: 0 }}
        transition={{ duration: 0.1 }}
        className={`aspect-square rounded-full absolute transition-all duration-[2s] z-50`}
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div className="relative flex justify-center w-full">
        <motion.div
          initial={{ y: -200, opacity: 0.2 }}
          animate={{ y: -160, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 1 }}
          className="absolute z-40 w-full drop-shadow-sm"
        >
          <img src="/public/images/cloud3.svg" className="w-full" alt="" />
        </motion.div>
        <motion.div
          initial={{ y: -150, opacity: 0.2 }}
          animate={{ y: -110, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 1.4 }}
          className="absolute z-30 w-full scale-110 drop-shadow-sm"
        >
          <img src="/public/images/cloud2.svg" className="w-full" alt="" />
        </motion.div>
      </div>
      <HVCard />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 2 }}
        className="w-[1300px] absolute scale-[70%] -bottom-3 -right-1/4 -rotate-[40deg]"
      >
        <Marquee
          pauseOnClick
          autoFill
          speed={70}
          className="flex bg-slate-800 py-2.5"
        >
          <SingleImage src="/public/images/p1.jpg" />
          <SingleImage src="/public/images/p2.jpg" />
          <SingleImage src="/public/images/p3.jpg" />
          <SingleImage src="/public/images/p4.jpg" />
          <SingleImage src="/public/images/p5.jpg" />
        </Marquee>
      </motion.div>
    </main>
  );
};

interface SingleImageType {
  src: string;
}

function SingleImage({ src }: SingleImageType) {
  return (
    <div className="w-48 aspect-[3/4] py-2.5 border-dashed border-y-[8px]">
      <img src={src} className="w-full px-2 border-white" alt="" />
    </div>
  );
}

export default First;
