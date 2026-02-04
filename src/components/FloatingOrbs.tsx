import { motion } from "framer-motion";

const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large primary orb */}
      <motion.div
        className="floating-orb w-[600px] h-[600px] bg-accent -top-40 -right-40"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Secondary orb */}
      <motion.div
        className="floating-orb w-[400px] h-[400px] bg-primary top-1/2 -left-40"
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Small accent orb */}
      <motion.div
        className="floating-orb w-[300px] h-[300px] bg-secondary bottom-20 right-1/4 opacity-10"
        animate={{
          y: [0, -50, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial" />
    </div>
  );
};

export default FloatingOrbs;
