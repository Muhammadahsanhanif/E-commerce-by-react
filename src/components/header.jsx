import { motion } from "framer-motion";

function Header() {
  // Animation variants
  const logoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const navVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hover: { scale: 1.05, backgroundColor: "#e2e8f0", transition: { duration: 0.3 } },
  };

  return (
    <header className="text-gray-100 body-font bg-cyan-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <motion.a
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          initial="hidden"
          animate="visible"
          variants={logoVariants}
          transition={{ duration: 0.8 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">E-COMMERCE</span>
        </motion.a>
        <motion.nav
          className="md:ml-auto flex flex-wrap items-center text-base justify-center"
          initial="hidden"
          animate="visible"
          variants={navVariants}
        >
          {["HOME", "ABOUT", "SERVICES", "PRICE"].map((item, index) => (
            <motion.a
              key={index}
              className="mr-5 hover:text-gray-300 cursor-pointer transition-colors duration-300"
              variants={navItemVariants}
            >
              {item}
            </motion.a>
          ))}
        </motion.nav>
        <motion.button
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 transition-colors duration-300"
          whileHover="hover"
          variants={buttonVariants}
        >
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </header>
  );
}

export default Header;
