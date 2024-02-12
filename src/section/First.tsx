import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const First = () => {
  return (
    <main
      style={{ backgroundImage: `url("/public/images/bg-p1.jpg")` }}
      className="h-screen overflow-hidden bg-no-repeat bg-cover relative"
    >
      <motion.div
        initial={{ width: 2000 }}
        animate={{ width: 0 }}
        className={`aspect-square rounded-full  bg-pink-200 absolute transition-all duration-[2s] z-50`}
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div className="w-full flex justify-center">
        <motion.img
          initial={{ y: 0 }}
          animate={{ y: 20 }}
          transition={{ duration: 3 }}
          src="/public/images/cloud3.svg"
          className="rotate-180 w-full absolute -translate-y-[550px] z-40"
          alt=""
        />
        <motion.img
          initial={{ y: 0 }}
          animate={{ y: 20 }}
          transition={{ duration: 3 }}
          src="/public/images/cloud2.svg"
          className="rotate-180 w-full absolute -translate-y-[500px] translate-x-10 scale-110 z-30"
          alt=""
        />
      </div>
      <div className="">hello</div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
        className="mt-12 w-12/3 -rotate-[35deg] translate-x-96 translate-y-96 scale-[70%]"
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
