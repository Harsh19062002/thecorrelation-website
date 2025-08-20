"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [iconSpin, setIconSpin] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCoursesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleCoursesDropdown = () => {
    setCoursesDropdownOpen(!coursesDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIconSpin(true);
    setTimeout(() => setIconSpin(false), 500);
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path) => pathname === path;

  const activeStyle = "text-white border-b-2 border-white";
  const hoverStyle =
    "hover:text-white hover:shadow-lg hover:shadow-slate-500/20 transition-all duration-300";

  const frontendLinks = [
    { label: "Post Graduation 1", path: "/courses/postGraduation1" },
    { label: "Post Graduation 2", path: "/courses/postGraduation2" },
    { label: "Chartered Data Science", path: "/courses/CharteredDataScience" },
    { label: "Chartered Bussiness Analytics", path: "/courses/CharteredBussinessAnalytics" },
    
    
  ];

  const backendLinks = [
    { label: "Applied Data Science", path: "/courses/appliedDataScience" },
    { label: "Machine Learning", path: "/courses/machineLearning" },
    { label: "Applied Science", path: "/courses/appliedScience" },
    {
      label: "Advanced Machine Learning",
      path: "/courses/advancedMachineLearning",
    },
    { label: "Advanced Artificial Intelligence", path: "/courses/advancedAI" },
  ];

  const devopsLinks = [
    { label: "Career Acceleration", path: "/courses/careerAcceleration" },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  const navItems = ["Home", "Courses", "Blog", "Career", "Contact"];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="w-full bg-transparent text-white z-50 absolute top-0"
    >
      <div className="navbar max-w-screen-xl mx-auto px-2 lg:px-8 relative flex items-center justify-between py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="navbar-start pl-0"
        >
        <Link href="/" className="absolute top-7 left-6 z-30 hover:opacity-80 transition-opacity">
  <img
    src="/logo1.svg"
    alt="The Correlation"
    className="h-5 w-auto"
  />
</Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="hidden lg:flex space-x-8 items-center justify-center w-max">
            {navItems.map((item, index) => {
              if (item === "Courses") {
                return (
                  <motion.li
                    key="courses"
                    className="relative"
                    ref={dropdownRef}
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    onMouseEnter={() => setCoursesDropdownOpen(true)}
                    onMouseLeave={() => setCoursesDropdownOpen(false)}
                  >
                    <button
                      onClick={toggleCoursesDropdown}
                      className={`${hoverStyle} cursor-pointer py-1 ${
                        coursesDropdownOpen ? activeStyle : ""
                      }`}
                    >
                      Courses
                    </button>

                    <AnimatePresence>
                      {coursesDropdownOpen && (
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={dropdownVariants}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 bg-white/10 backdrop-blur-md rounded shadow-lg p-4 flex space-x-8 text-white z-50 min-w-[40rem] max-w-[60rem] border border-white/20"
                        >
                          {[ 
                            { title: "Post Graduation Program", links: frontendLinks },
                            { title: "Certification courses", links: backendLinks },
                            { title: "Career", links: devopsLinks },
                          ].map(({ title, links }) => (
                            <div key={title}>
                              <h3 className="font-bold mb-1">{title}</h3>
                              <ul className="space-y-1">
                                {links.map((item) => (
                                  <motion.li
                                    key={item.label}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                  >
                                    <Link
                                      href={item.path}
                                      className={`block py-1 ${
                                        pathname === item.path
                                          ? "text-white font-medium border-b border-white"
                                          : "text-gray-300 hover:text-white"
                                      } transition duration-300`}
                                      onClick={() => setCoursesDropdownOpen(false)}
                                    >
                                      {item.label}
                                    </Link>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              }

              const itemPath =
                item === "Home" ? "/" : `/${item.replace(/\s+/g, "").toLowerCase()}`;

              return (
                <motion.li
                  key={item}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  <Link
                    href={itemPath}
                    className={`${hoverStyle} ${isActive(itemPath) ? activeStyle : ""} py-1`}
                  >
                    {item}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* Desktop Login Button */}
        <motion.div
          className="hidden lg:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/login"
            className="px-5 py-2 bg-white text-black border-2 border-white font-bold text-md rounded-full shadow-md transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
          >
            Student Login
          </Link>
        </motion.div>

        {/* Mobile Icon */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className={`btn btn-ghost text-white p-2 transition-transform duration-500 ${
              iconSpin ? "rotate-180" : ""
            }`}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/10 backdrop-blur-md border-t border-white/20 overflow-hidden text-white"
          >
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item, index) => {
                if (item === "Courses") {
                  return (
                    <motion.div key="courses" variants={navItemVariants} custom={index}>
                      <button
                        onClick={toggleCoursesDropdown}
                        className={`block w-full text-left py-2 px-2 ${
                          coursesDropdownOpen
                            ? "text-white font-medium border-l-2 border-white"
                            : "text-gray-300"
                        }`}
                      >
                        Courses
                      </button>
                      <AnimatePresence>
                        {coursesDropdownOpen && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={dropdownVariants}
                            className="pl-4 mt-1 space-y-1 bg-white/10 backdrop-blur-md rounded-md px-3 py-2 border border-white/20 text-white"
                          >
                            {[ 
                              { title: "Post Graduation Program", links: frontendLinks },
                              { title: "Certification courses", links: backendLinks },
                              { title: "Career", links: devopsLinks },
                            ].map(({ title, links }) => (
                              <div key={title} className="mt-2">
                                <h3 className="font-bold mb-1 text-sm">{title}</h3>
                                <ul className="space-y-1 pl-2">
                                  {links.map((item) => (
                                    <motion.li key={item.label} whileHover={{ scale: 1.02 }}>
                                      <Link
                                        href={item.path}
                                        className={`block py-1 px-2 ${
                                          pathname === item.path
                                            ? "text-white font-medium"
                                            : "text-gray-300"
                                        }`}
                                        onClick={() => {
                                          setCoursesDropdownOpen(false);
                                          setMobileMenuOpen(false);
                                        }}
                                      >
                                        {item.label}
                                      </Link>
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                const itemPath =
                  item === "Home" ? "/" : `/${item.replace(/\s+/g, "").toLowerCase()}`;

                return (
                  <motion.div key={item} variants={navItemVariants} custom={index}>
                    <Link
                      href={itemPath}
                      className={`block py-2 px-2 ${
                        isActive(itemPath)
                          ? "text-white font-medium border-l-2 border-white"
                          : "text-gray-300"
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      {item}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile Login */}
              <motion.div variants={navItemVariants} custom={6}>
                <Link
                  href="/login"
                  className={`block w-full text-center px-4 py-2 rounded-md border border-white bg-transparent text-white transition duration-300
                    hover:bg-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-400
                    ${isActive("/login") ? "font-semibold border-white" : ""}`}
                  onClick={toggleMobileMenu}
                >
                  Student Login
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
