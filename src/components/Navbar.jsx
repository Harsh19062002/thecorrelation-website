"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = ({ variant }) => {
  const pathname = usePathname();
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [iconSpin, setIconSpin] = useState(false);
  const coursesDropdownRef = useRef(null);
  const aboutDropdownRef = useRef(null);
  
  // Define pages that should have black navbar (light background pages)
  const lightBackgroundPages = [
      "/privacy-policy",
      "/student-code-of-conduct",
      "/terms-of-service",
      "/admission-policy",
      "/contact",
      "/career",
    "/blog",
    // Add more pages here as needed
  ];
  
  // Check if current page should have black navbar
  const isBlogSlug = pathname?.startsWith("/blog/") || false;

const isLightBackground = lightBackgroundPages.includes(pathname) || isBlogSlug;

  
  const isDark = variant === "dark";
 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        coursesDropdownRef.current &&
        !coursesDropdownRef.current.contains(event.target)
      ) {
        setCoursesDropdownOpen(false);
      }
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target)
      ) {
        setAboutDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleCoursesDropdown = () => {
    setCoursesDropdownOpen(!coursesDropdownOpen);
    setAboutDropdownOpen(false);
  };

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
    setCoursesDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIconSpin(true);
    setTimeout(() => setIconSpin(false), 500);
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path) => pathname === path;

  // Theme-based styles
  const navbarBg = isLightBackground 
    ? "absolute bg-transparent text-black"
    : isDark
    ? "absolute bg-transparent text-black"
    : "absolute bg-transparent text-white";

  const textColor = isLightBackground ? "text-black" : "text-white";
  const activeStyle = isLightBackground 
    ? "text-black border-b-2 border-black"
    : "text-white border-b-2 border-white";
  const hoverStyle = isLightBackground
    ? "hover:text-gray-600 hover:shadow-lg hover:shadow-slate-500/20 transition-all duration-300"
    : "hover:text-white hover:shadow-lg hover:shadow-slate-500/20 transition-all duration-300";

  const logoSrc = "/logo1.svg";
  const menuIconColor = isLightBackground ? "text-black" : "text-white";

  const postGraduationLinks = [
    
    { label: "Post Graduation Program", path: "/courses/post-graduation-program" },
  ];

  const charteredLinks = [
    { label: "Chartered Data Science", path: "/courses/chartered-data-science" },
    {
      label: "Chartered Business Analytics",
      path: "/courses/chartered-bussiness-analytics",
    },
  ];

  const certificationLinks = [
    { label: "Applied Data Analytics", path: "/courses/applied-data-analytics" },
    { label: "Foundational Machine Learning", path: "/courses/foundational-machine-learning" },
    
    {
      label: "Advanced Machine Learning",
      path: "/courses/advanced-machine-learning",
    },
    { label: "Deep Learning with Generative AI", path: "/courses/deep-learning-with-generative-ai" },
  ];

  const careerLinks = [
    { label: "Career Acceleration", path: "/courses/career-acceleration" },
  ];

  const aboutLinks = [
    { label: "About Us", path: "/about-us" },
    { label: "About Director", path: "/about-us" },
   
    { label: "Contact Us", path: "/contact" },
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

  const navItems = ["Home", "Courses", "Blog", "About Us"];

  return (
     <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`w-full top-0 ${navbarBg}`}
      style={{ zIndex: 9999 }}
    >
      <div className="navbar max-w-screen-xl mx-auto px-2 lg:px-8 relative flex items-center justify-between py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="navbar-start pl-0"
        >
          <Link
            href="/"
            className="absolute top-7 left-6 z-30 hover:opacity-80 transition-opacity"
          >
           <img
  src="/logo1.svg"
  alt="The Correlation"
  className={`h-5 w-auto transition-all duration-300 ${
    isLightBackground
      ? "filter brightness-0 saturate-100"
      : ""
  }`}
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
                    ref={coursesDropdownRef}
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
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black/50 backdrop-blur-lg rounded shadow-lg p-6 grid grid-cols-3 gap-6 text-white min-w-[55rem] border border-white/20"
                          style={{ zIndex: 10000 }}
                        >
                          <div>
                            <h3 className="font-bold text-white mb-1">
                              Post Graduation Program
                            </h3>
                            <p className="text-gray-400 text-xs mb-2">
                              New comprehensive programs
                            </p>
                            <div className="flex flex-wrap gap-1 mb-2">
                              <span className="text-xs bg-green-500/20 text-green-300 px-2 py-0.5 rounded">
                                Offline
                              </span>
                              <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded">
                                Premium
                              </span>
                            </div>
                            <ul className="space-y-1">
                              {postGraduationLinks.map((item) => (
                                <motion.li
                                  key={item.label}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <Link
                                    href={item.path}
                                    onClick={() => {
                                      setCoursesDropdownOpen(false);
                                    }}
                                    className={`block py-1 text-sm ${
                                      pathname === item.path
                                        ? "text-white font-medium border-b border-white"
                                        : "text-gray-300 hover:text-white"
                                    } transition duration-300`}
                                  >
                                    {item.label}
                                  </Link>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="font-bold text-white mb-1">
                              Chartered Programs
                            </h3>
                            <p className="text-gray-400 text-xs mb-2">
                              Career transformation programs
                            </p>
                            <div className="flex flex-wrap gap-1 mb-2">
                              <span className="text-xs bg-green-500/20 text-green-300 px-2 py-0.5 rounded">
                                Hybrid
                              </span>
                              <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded">
                                Premium
                              </span>
                            </div>
                            <ul className="space-y-1">
                              {charteredLinks.map((item) => (
                                <motion.li
                                  key={item.label}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <Link
                                    href={item.path}
                                    onClick={() => {
                                      setCoursesDropdownOpen(false);
                                    }}
                                    className={`block py-1 text-sm ${
                                      pathname === item.path
                                        ? "text-white font-medium border-b border-white"
                                        : "text-gray-300 hover:text-white"
                                    } transition duration-300`}
                                  >
                                    {item.label}
                                  </Link>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="font-bold text-white mb-1">
                              Certification Programs
                            </h3>
                            <p className="text-gray-400 text-xs mb-2">
                              Self-paced + Classroom
                            </p>
                            <div className="flex flex-wrap gap-1 mb-2">
                              <span className="text-xs bg-green-500/20 text-green-300 px-2 py-0.5 rounded">
                                Hybrid
                              </span>
                              <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded">
                                Flexible
                              </span>
                            </div>
                            <ul className="space-y-1">
                              {certificationLinks.map((item) => (
                                <motion.li
                                  key={item.label}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <Link
                                    href={item.path}
                                    onClick={() => {
                                      setCoursesDropdownOpen(false);
                                    }}
                                    className={`block py-1 text-sm ${
                                      pathname === item.path
                                        ? "text-white font-medium border-b border-white"
                                        : "text-gray-300 hover:text-white"
                                    } transition duration-300`}
                                  >
                                    {item.label}
                                  </Link>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                 
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              }

              if (item === "About Us") {
                return (
                  <motion.li
                    key="about"
                    className="relative"
                    ref={aboutDropdownRef}
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    onMouseEnter={() => setAboutDropdownOpen(true)}
                    onMouseLeave={() => setAboutDropdownOpen(false)}
                  >
                    <button
                      onClick={toggleAboutDropdown}
                      className={`${hoverStyle} cursor-pointer py-1 ${
                        aboutDropdownOpen ? activeStyle : ""
                      }`}
                    >
                      About Us
                    </button>

                    <AnimatePresence>
                      {aboutDropdownOpen && (
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={dropdownVariants}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 bg-black/50 backdrop-blur-lg rounded shadow-lg p-4 text-white min-w-[12rem] border border-white/20"
                          style={{ zIndex: 10000 }}
                        >
                          <ul className="space-y-1">
                            {aboutLinks.map((item) => (
                              <motion.li
                                key={item.label}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <Link
                                  href={item.path}
                                  onClick={() => {
                                    setAboutDropdownOpen(false);
                                  }}
                                  className={`block py-2 px-3 w-full text-left rounded ${
                                    pathname === item.path
                                      ? "text-white font-medium bg-white/10"
                                      : "text-gray-300 hover:text-white hover:bg-white/5"
                                  } transition duration-300`}
                                >
                                  {item.label}
                                </Link>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              }

              const itemPath =
                item === "Home"
                  ? "/"
                  : item === "Blog"
                  ? "/blog"
                  : item === "Career"
                  ? "/career"
                  : `/${item.replace(/\s+/g, "").toLowerCase()}`;

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
                    className={`${hoverStyle} ${
                      isActive(itemPath) ? activeStyle : ""
                    } py-1`}
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
            href="https://studentportal.thecorrelation.co.in/login"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2 font-bold text-md rounded-full shadow-md transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 ${
              isLightBackground
                ? "bg-black text-white border-2 border-black hover:bg-white hover:text-black"
                : "bg-white text-black border-2 border-white"
            }`}
          >
            Student Login
          </Link>
        </motion.div>

        {/* Mobile Icon */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className={`btn btn-ghost p-2 transition-transform duration-500 ${menuIconColor} ${
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
            className={`lg:hidden backdrop-blur-md border-t overflow-hidden ${
              isLightBackground
                ? "bg-white/95 border-gray-300 text-gray-900"
                : "bg-black/50 border-white/20 text-white"
            }`}
          >
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item, index) => {
                if (item === "Courses") {
                  return (
                    <motion.div
                      key="courses"
                      variants={navItemVariants}
                      custom={index}
                    >
                      <button
                        onClick={toggleCoursesDropdown}
                        className={`block w-full text-left py-2 px-2 ${
                          coursesDropdownOpen
                            ? isLightBackground
                              ? "text-gray-900 font-medium border-l-2 border-gray-900"
                              : "text-white font-medium border-l-2 border-white"
                            : isLightBackground
                            ? "text-gray-700"
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
                            className={`pl-4 mt-1 space-y-2 backdrop-blur-md rounded-md px-3 py-2 border ${
                              isLightBackground
                                ? "bg-gray-50 border-gray-200 text-gray-900"
                                : "bg-white/10 border-white/20 text-white"
                            }`}
                          >
                            <div className="mt-2">
                              <h3 className={`font-bold mb-1 text-sm ${
                                isLightBackground ? "text-gray-900" : "text-white"
                              }`}>
                                Post Graduation Program
                              </h3>
                              <p className={`text-xs mb-1 ${
                                isLightBackground ? "text-gray-600" : "text-gray-400"
                              }`}>
                                New comprehensive programs
                              </p>
                              <div className="flex flex-wrap gap-1 mb-2">
                                <span className={`text-xs px-2 py-0.5 rounded ${
                                  isLightBackground
                                    ? "bg-green-100 text-green-700"
                                    : "bg-green-500/20 text-green-300"
                                }`}>
                                  Online Mode
                                </span>
                                <span className={`text-xs px-2 py-0.5 rounded ${
                                  isLightBackground
                                    ? "bg-blue-100 text-blue-700"
                                    : "bg-blue-500/20 text-blue-300"
                                }`}>
                                  SNPL
                                </span>
                              </div>
                              <ul className="space-y-1 pl-2">
                                {postGraduationLinks.map((item) => (
                                  <motion.li
                                    key={item.label}
                                    whileHover={{ scale: 1.02 }}
                                  >
                                    <Link
                                      href={item.path}
                                      onClick={() => {
                                        setCoursesDropdownOpen(false);
                                        setMobileMenuOpen(false);
                                      }}
                                      className={`block py-1 px-2 text-sm ${
                                        pathname === item.path
                                          ? isLightBackground
                                            ? "text-gray-900 font-medium"
                                            : "text-white font-medium"
                                          : isLightBackground
                                          ? "text-gray-600"
                                          : "text-gray-300"
                                      }`}
                                    >
                                      {item.label}
                                    </Link>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            <div className="mt-2">
                              <h3 className={`font-bold mb-1 text-sm ${
                                isLightBackground ? "text-gray-900" : "text-white"
                              }`}>
                                Chartered Programs
                              </h3>
                              <p className={`text-xs mb-1 ${
                                isLightBackground ? "text-gray-600" : "text-gray-400"
                              }`}>
                                Career transformation
                              </p>
                              <div className="flex flex-wrap gap-1 mb-2">
                                <span className={`text-xs px-2 py-0.5 rounded ${
                                  isLightBackground
                                    ? "bg-purple-100 text-purple-700"
                                    : "bg-purple-500/20 text-purple-300"
                                }`}>
                                  Hybrid
                                </span>
                                <span className={`text-xs px-2 py-0.5 rounded ${
                                  isLightBackground
                                    ? "bg-orange-100 text-orange-700"
                                    : "bg-orange-500/20 text-orange-300"
                                }`}>
                                  Premium
                                </span>
                              </div>
                              <ul className="space-y-1 pl-2">
                                {charteredLinks.map((item) => (
                                  <motion.li
                                    key={item.label}
                                    whileHover={{ scale: 1.02 }}
                                  >
                                    <Link
                                      href={item.path}
                                      onClick={() => {
                                        setCoursesDropdownOpen(false);
                                        setMobileMenuOpen(false);
                                      }}
                                      className={`block py-1 px-2 text-sm ${
                                        pathname === item.path
                                          ? isLightBackground
                                            ? "text-gray-900 font-medium"
                                            : "text-white font-medium"
                                          : isLightBackground
                                          ? "text-gray-600"
                                          : "text-gray-300"
                                      }`}
                                    >
                                      {item.label}
                                    </Link>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            <div className="mt-2">
                              <h3 className={`font-bold mb-1 text-sm ${
                                isLightBackground ? "text-gray-900" : "text-white"
                              }`}>
                                Certification Programs
                              </h3>
                              <p className={`text-xs mb-1 ${
                                isLightBackground ? "text-gray-600" : "text-gray-400"
                              }`}>
                                Self-paced + Classroom
                              </p>
                              <div className="flex flex-wrap gap-1 mb-2">
                                <span className={`text-xs px-2 py-0.5 rounded ${
                                  isLightBackground
                                    ? "bg-cyan-100 text-cyan-700"
                                    : "bg-cyan-500/20 text-cyan-300"
                                }`}>
                                  Flexible
                                </span>
                                <span className={`text-xs px-2 py-0.5 rounded ${
                                  isLightBackground
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-yellow-500/20 text-yellow-300"
                                }`}>
                                  Industry-Ready
                                </span>
                              </div>
                              <ul className="space-y-1 pl-2">
                                {certificationLinks.map((item) => (
                                  <motion.li
                                    key={item.label}
                                    whileHover={{ scale: 1.02 }}
                                  >
                                    <Link
                                      href={item.path}
                                      onClick={() => {
                                        setCoursesDropdownOpen(false);
                                        setMobileMenuOpen(false);
                                      }}
                                      className={`block py-1 px-2 text-sm ${
                                        pathname === item.path
                                          ? isLightBackground
                                            ? "text-gray-900 font-medium"
                                            : "text-white font-medium"
                                          : isLightBackground
                                          ? "text-gray-600"
                                          : "text-gray-300"
                                      }`}
                                    >
                                      {item.label}
                                    </Link>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

             
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                if (item === "About Us") {
                  return (
                    <motion.div
                      key="about"
                      variants={navItemVariants}
                      custom={index}
                    >
                      <button
                        onClick={toggleAboutDropdown}
                        className={`block w-full text-left py-2 px-2 ${
                          aboutDropdownOpen
                            ? isLightBackground
                              ? "text-gray-900 font-medium border-l-2 border-gray-900"
                              : "text-white font-medium border-l-2 border-white"
                            : isLightBackground
                            ? "text-gray-700"
                            : "text-gray-300"
                        }`}
                      >
                        About Us
                      </button>
                      <AnimatePresence>
                        {aboutDropdownOpen && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={dropdownVariants}
                            className={`pl-4 mt-1 space-y-1 backdrop-blur-md rounded-md px-3 py-2 border ${
                              isLightBackground
                                ? "bg-gray-50 border-gray-200 text-gray-900"
                                : "bg-white/10 border-white/20 text-white"
                            }`}
                          >
                            <ul className="list-none">
                              {aboutLinks.map((item) => (
                                <motion.li
                                  key={item.label}
                                  whileHover={{ scale: 1.02 }}
                                >
                                  <Link
                                    href={item.path}
                                    onClick={() => {
                                      setAboutDropdownOpen(false);
                                      setMobileMenuOpen(false);
                                    }}
                                    className={`block py-2 px-2 w-full text-left rounded ${
                                      pathname === item.path
                                        ? isLightBackground
                                          ? "text-gray-900 font-medium bg-gray-200"
                                          : "text-white font-medium bg-white/10"
                                        : isLightBackground
                                        ? "text-gray-600"
                                        : "text-gray-300"
                                    }`}
                                  >
                                    {item.label}
                                  </Link>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                const itemPath =
                  item === "Home"
                    ? "/"
                    : item === "Blog"
                    ? "/blog"
                    : item === "Career"
                    ? "/career"
                    : `/${item.replace(/\s+/g, "").toLowerCase()}`;

                return (
                  <motion.div
                    key={item}
                    variants={navItemVariants}
                    custom={index}
                  >
                    <Link
                      href={itemPath}
                      className={`block py-2 px-2 ${
                        isActive(itemPath)
                          ? isLightBackground
                            ? "text-gray-900 font-medium border-l-2 border-gray-900"
                            : "text-white font-medium border-l-2 border-white"
                          : isLightBackground
                          ? "text-gray-700"
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
                  href="https://studentportal.thecorrelation.co.in/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center px-4 py-2 rounded-md border font-medium transition duration-300 ${
                    isLightBackground
                      ? "border-gray-900 bg-gray-900 text-white hover:bg-white hover:text-gray-900"
                      : "border-white bg-transparent text-white hover:bg-white hover:text-black"
                  }`}
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