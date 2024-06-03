import { motion } from "framer-motion";

const HVCard = () => {
  return (
    <div className="absolute top-[20vh] left-[35vh]" draggable="false">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeIn", delay: 1.7 }}
        className="w-full float"
      >
        <img
          className="md:w-[33vw] drop-shadow-md"
          src="/public/images/HV.png"
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default HVCard;
