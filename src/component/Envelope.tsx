import { useContext, useState } from "react";
import { ViewContext } from "../context/ViewContext";
import "./envelope.css";
import { motion } from "framer-motion";

const Envelope = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setView } = useContext(ViewContext);

  function openEnvelope() {
    setIsOpen(!isOpen);
    setTimeout(() => {
      setView("first");
    }, 5200);
  }

  return (
    <div
      style={{
        background: "#ff8cd1",
        backgroundImage: "radial-gradient(circle, #ff8cd1 28%, #ffffff 100%)",
      }}
      className="h-screen overflow-hidden flex flex-col justify-center items-center relative"
    >
      <motion.div
        animate={{
          width: isOpen ? "2000px" : "0px",
        }}
        transition={{
          delay: 3,
          duration: 1,
        }}
        className={`${
          isOpen ? "w-[200px]" : "w-0"
        } aspect-square rounded-full bg-pink-200 absolute transition-all z-50`}
      />
      <div className="envelope-wrapper scale-125">
        <div
          id="envelope"
          className={isOpen ? "open" : "close"}
          onClick={openEnvelope}
        >
          <div className="front flap"></div>
          <div className="front pocket"></div>
          <div className="letter py-8">
            <div className="text-center text-xl font-riot">Happy Valentine</div>
            <div className="text-center text-4xl font-riot mt-2 text-pink-500">
              Aul
            </div>

            <div className="words line4"></div>
          </div>
          <div className="hearts">
            <div className="heart a1"></div>
            <div className="heart a2"></div>
            <div className="heart a3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Envelope;
