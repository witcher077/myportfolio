import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";


const icons = [
    { id: 1, icon: <FaHtml5 color="#E34F26" />, size: "50px" },
    { id: 2, icon: <FaCss3Alt color="#1572B6" />, size: "50px" },
    { id: 3, icon: <FaJs color="#F7DF1E" />, size: "50px" },
    { id: 4, icon: <FaReact color="#61DAFB" />, size: "50px" },
    { id: 5, icon: <FaNodeJs color="#68A063" />, size: "50px" },
    { id: 6, icon: <SiNextdotjs color="black" />, size: "50px" },
    { id: 7, icon: <FaGitAlt color="#F05032" />, size: "50px" },
  ];
const FloatingIcons = () => {
  return (
    <div className='background-container'>
    {icons.map((item) => (
      <motion.div
        key={item.id}
        className="floating-icon"
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: "-10vh", opacity: 1 }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          left: `${Math.random() * 100}vw`,
          fontSize: item.size,
        }}
      >
        {item.icon}
      </motion.div>
    ))}





  </div>
  )
}

export default FloatingIcons;