import './App.css'
import React, { useState } from "react";
import image from "../src/assets/photo/niloy.jpg";
import image1 from "../src/assets/photo/House rent.jpg";
import image2 from "../src/assets/photo/Emajhon.jpg";
import image3 from "../src/assets/photo/summer camp.jpg";
import resume from "../public/Resume of Mehedi Hassan Niloy.pdf"
import { Sun, Moon, Palette, ChevronDown, Monitor, Download, Github, Server, Code2, Globe, Info, X, Code, ChevronUp, CheckCircle, Linkedin } from "lucide-react";


export default function App() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openGitDropdown1, setOpenGitDropdown1] = useState(false);
  const [openGitDropdown2, setOpenGitDropdown2] = useState(false);
  const [openGitDropdown3, setOpenGitDropdown3] = useState(false);


  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-500 ${theme === "dark"
        ? "bg-gray-900 text-white"
        : theme === "light"
          ? "bg-gray-100 text-gray-900"
          : "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white"
        }`}
    >
      {/* Navbar */}
      <nav
        className={`flex justify-between items-center px-6 py-4 shadow-md ${theme === "dark"
          ? "bg-gray-800 text-white"
          : theme === "light"
            ? "bg-white text-gray-900"
            : "bg-black/30 text-white"
          }`}
      >
        <h1 className="text-2xl font-bold"><a href="#hero">My Portfolio</a></h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li><a href="#about" className="hover:text-teal-400">About</a></li>
          <li><a href="#services" className="hover:text-teal-400">Services</a></li>
          <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
          <li><a href="#skills" className="hover:text-teal-400">Skills</a></li>
          <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4 relative">
          {/* Theme Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-teal-500 hover:bg-teal-600 text-white text-sm transition"
            >
              {theme === "dark" && <Moon className="w-5 h-5" />}
              {theme === "light" && <Sun className="w-5 h-5" />}
              {theme === "colorful" && <Palette className="w-5 h-5" />}
              <span>{theme.charAt(0).toUpperCase() + theme.slice(1)}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-transparent dark:bg-gray-800 rounded-md shadow-lg z-10">
                <ul>
                  <li
                    onClick={() => { setTheme("dark"); setDropdownOpen(false); }}
                    className="flex items-center gap-2 px-4 py-2  hover:bg-teal-500 hover:text-black cursor-pointer"
                  >
                    <Moon className="w-5 h-5" /> Dark
                  </li>
                  <li
                    onClick={() => { setTheme("light"); setDropdownOpen(false); }}
                    className="flex items-center gap-2 px-4 py-2  hover:bg-teal-500 hover:text-white cursor-pointer"
                  >
                    <Sun className="w-5 h-5" /> Light
                  </li>
                  <li
                    onClick={() => { setTheme("colorful"); setDropdownOpen(false); }}
                    className="flex items-center gap-2 px-4 py-2  hover:bg-teal-500 hover:text-black cursor-pointer"
                  >
                    <Palette className="w-5 h-5" /> Colorful
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            {open ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <ul
          className={`flex flex-col gap-4 px-6 py-4 md:hidden ${theme === "dark"
            ? "bg-gray-800 text-white"
            : theme === "light"
              ? "bg-gray-200 text-gray-900"
              : "bg-black/40 text-white"
            }`}
        >
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      )}

      {/* Hero Section */}
      <section id="hero" className="flex flex-col-reverse md:flex-row items-center justify-center h-[80vh] px-6 md:px-16 gap-8">

        {/* Text Side */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Hi, I'm <span className="text-teal-400">Mehedi Hassan Niloy</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-md mx-auto md:mx-0">
            Frontend Developer
          </p>

          {/* Buttons */}
          <div className="mt-6 flex justify-center md:justify-start gap-4">

            {/* Resume Button */}
            <a
              href={resume}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 transition"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>

            {/* GitHub Button */}
            <a
              href="https://github.com/mehedi-hassan-niloy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-600 transition"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>

          </div>
        </div>

        {/* Image Side */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={image}
            alt="Profile"
            className="rounded-full shadow-lg border-4 border-teal-500 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover"
          />
        </div>

      </section>


      {/* About Section */}
      <section id="about" className="px-6 py-16 text-center md:text-left">
        <h3 className="text-3xl font-semibold mb-6">About Me</h3>
        <p className="opacity-80 leading-relaxed max-w-2xl mx-auto md:mx-0">
          I am a passionate web developer.As a front-end developer, my skills and passion contribute to a dynamic organization, where I can
          utilize my expertise in HTML5, CSS, Bootstrap, React, and Tailwind CSS to create robust and scalable web
          applications .
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-16 text-center">
        <h3 className="text-3xl font-semibold mb-10">My Services</h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Service 1 */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transition">
            <Monitor className="w-10 h-10 text-teal-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-teal-400">
              Responsive Web Development
            </h4>
            <p className="text-gray-400">Modern, mobile-friendly websites.</p>
            <p className="text-gray-400">Multi-page & single-page applications (SPA).</p>
            <p className="text-gray-400">E-commerce & business websites.</p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transition">
            <Code2 className="w-10 h-10 text-teal-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-teal-400">
              Frontend Framework & Library Development
            </h4>
            <p className="text-gray-400">React.js & Next.js application development.</p>
            <p className="text-gray-400">State management with Redux.</p>
            <p className="text-gray-400">Component-based scalable architecture.</p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transition">
            <Server className="w-10 h-10 text-teal-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-teal-400">
              API & Data Integration
            </h4>
            <p className="text-gray-400">REST & GraphQL API integration.</p>
            <p className="text-gray-400">Dynamic data rendering & form handling.</p>
            <p className="text-gray-400">Third-party API integration.</p>
          </div>
        </div>
      </section>

      {/* Project section */}

      <section id="projects" className="px-6 py-16 text-center">
        <h3 className="text-3xl font-semibold mb-10">Projects</h3>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">

          {/* Project 1 */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transition">
            <img src={image1} alt="Too Let" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h4 className="text-xl font-semibold text-teal-400 mb-2">Too Let</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Project Type: House Rent and Sell
            </p>

            <div className="flex justify-center gap-3 flex-wrap relative">
              <a href="https://moonknightll.web.app/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition flex items-center gap-2">
                <Globe size={18} /> Live
              </a>

              <div className="relative">
                <button onClick={() => setOpenGitDropdown1(!openGitDropdown1)} className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition flex items-center gap-2">
                  <Github size={18} /> GitHub <ChevronUp size={16} />
                </button>

                {openGitDropdown1 && (
                  <div className="absolute bottom-full mb-2 left-0 w-40 bg-gray-900 border border-gray-700 rounded-lg shadow-lg">
                    <a href="https://github.com/mehedi-hassan-niloy/moonknight" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-t-lg">Client Code</a>
                    <a href="https://github.com/mehedi-hassan-niloy/moonknight_backend" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-b-lg">Server Code</a>
                  </div>
                )}
              </div>

              <button onClick={() => setOpenModal1(true)} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-400 transition flex items-center gap-2">
                <Info size={18} /> Details
              </button>
            </div>

            {openModal1 && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
                <div className="bg-gray-900 text-gray-200 dark:bg-gray-800 rounded-2xl shadow-lg p-6 max-w-lg w-full max-h-[90vh] overflow-auto relative">
                  <button onClick={() => setOpenModal1(false)} className="absolute top-3 right-3 text-gray-400 hover:text-red-500"><X size={22} /></button>
                  <img src={image1} alt="Too Let" className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h2 className="text-2xl font-semibold mb-3">Too Let</h2>

                  <h3 className="text-lg font-semibold mb-2">Features:</h3>
                  <ul className="text-left mb-4 space-y-1">
                    <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> Admin panel for managing user queries.</li>
                    <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> Admin Be A Host Users Dashboard</li>
                    <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> Advanced search options using location.</li>
                    <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> Real Time messaging between admin, tenant, and house owner.</li>
                    <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> Property Listing Management</li>
                    <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> Personalized User Profiles and Reviews and Ratings</li>
                  </ul>

                  <h3 className="text-lg font-semibold mb-2">Technologies:</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="flex items-center gap-1 px-3 py-1 bg-gray-700 rounded-lg text-sm"><Code size={16} /> React</span>
                    <span className="flex items-center gap-1 px-3 py-1 bg-gray-700 rounded-lg text-sm"><Code size={16} /> Tailwind CSS</span>
                    <span className="flex items-center gap-1 px-3 py-1 bg-gray-700 rounded-lg text-sm"><Code size={16} /> Node.js</span>
                    <span className="flex items-center gap-1 px-3 py-1 bg-gray-700 rounded-lg text-sm"><Code size={16} /> MongoDB</span>
                    <span className="flex items-center gap-1 px-3 py-1 bg-gray-700 rounded-lg text-sm"><Code size={16} /> Images hosting of Firebase</span>
                    <span className="flex items-center gap-1 px-3 py-1 bg-gray-700 rounded-lg text-sm"><Code size={16} /> Mailgun</span>
                    <span className="flex items-center gap-1 px-3 py-1 bg-gray-700 rounded-lg text-sm"><Code size={16} /> Express js and JWT</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Project 2 */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transition">
            <img src={image3} alt="Sports Camp" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h4 className="text-xl font-semibold text-teal-400 mb-2">Sports Camp</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Project Type: Sports Course
            </p>

            <div className="flex justify-center gap-3 flex-wrap relative">
              <a href="https://sports-camp.web.app" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition flex items-center gap-2">
                <Globe size={18} /> Live
              </a>

              <div className="relative">
                <button onClick={() => setOpenGitDropdown2(!openGitDropdown2)} className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition flex items-center gap-2">
                  <Github size={18} /> GitHub <ChevronUp size={16} />
                </button>

                {openGitDropdown2 && (
                  <div className="absolute bottom-full mb-2 left-0 w-40 bg-gray-900 border border-gray-700 rounded-lg shadow-lg">
                    <a href="https://github.com/mehedi-hassan-niloy/Summer-camp" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-t-lg">Client Code</a>
                    <a href="https://github.com/mehedi-hassan-niloy/Summer-camp-server" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-b-lg">Server Code</a>
                  </div>
                )}
              </div>

              <button onClick={() => setOpenModal2(true)} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-400 transition flex items-center gap-2">
                <Info size={18} /> Details
              </button>
            </div>

            {openModal2 && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
                <div className="bg-gray-900 text-gray-200 dark:bg-gray-800 rounded-2xl shadow-lg p-6 max-w-lg w-full max-h-[90vh] overflow-auto relative">
                  <button onClick={() => setOpenModal2(false)} className="absolute top-3 right-3 text-gray-400 hover:text-red-500"><X size={22} /></button>
                  <img src={image3} alt="Sports Camp" className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h2 className="text-2xl font-semibold mb-3">Sports Camp</h2>

                  <h3 className="text-lg font-semibold mb-2">Features:</h3>
                  <ul className="text-left mb-4 space-y-1">
                    <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> Payment Getway impliment</li>
                    <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> Admin status change approve decline and send Feedback</li>
                    <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> Firebase Implementation</li>
                    <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> Payment history implementation</li>
                    <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> Add class instructor</li>
                  </ul>

                  <h3 className="text-lg font-semibold mb-2">Technologies:</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="flex items-center gap-1 px-3 py-1 bg-gray-700 rounded-lg text-sm"><Code size={16} /> React</span>
                    <span className="flex items-center gap-1 px-3 py-1 bg-gray-700 rounded-lg text-sm"><Code size={16} /> Tailwind CSS</span>
                    <span className="flex items-center gap-1 px-3 py-1 bg-gray-700 rounded-lg text-sm"><Code size={16} /> Firebase</span>
                    <span className="flex items-center gap-1 px-3 py-1 bg-gray-700 rounded-lg text-sm"><Code size={16} /> React Icons</span>
                    <span className="flex items-center gap-1 px-3 py-1 bg-gray-700 rounded-lg text-sm"><Code size={16} /> Tanstack query</span>
                    <span className="flex items-center gap-1 px-3 py-1 bg-gray-700 rounded-lg text-sm"><Code size={16} /> Axios</span>
                    <span className="flex items-center gap-1 px-3 py-1 bg-gray-700 rounded-lg text-sm"><Code size={16} /> Local forage animation</span>
                    <span className="flex items-center gap-1 px-3 py-1 bg-gray-700 rounded-lg text-sm"><Code size={16} /> Stripe</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Project 3 */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transition">
            <img src={image2} alt="EmaJhon" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h4 className="text-xl font-semibold text-teal-400 mb-2">EmaJhon</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Project Type: E-Commerce
            </p>

            <div className="flex justify-center gap-3 flex-wrap relative">
              <a href="https://dulcet-cuchufli-e9a756.netlify.app/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition flex items-center gap-2">
                <Globe size={18} /> Live
              </a>

              <div className="relative">
                <button onClick={() => setOpenGitDropdown3(!openGitDropdown3)} className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition flex items-center gap-2">
                  <Github size={18} /> GitHub <ChevronUp size={16} />
                </button>

                {openGitDropdown3 && (
                  <div className="absolute bottom-full mb-2 left-0 w-40 bg-gray-900 border border-gray-700 rounded-lg shadow-lg">
                    <a href="https://github.com/mehedi-hassan-niloy/ema-jhon-project" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-t-lg">Client Code</a>
                    <a href="" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-b-lg">Server Code</a>
                  </div>
                )}
              </div>

              <button onClick={() => setOpenModal3(true)} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-400 transition flex items-center gap-2">
                <Info size={18} /> Details
              </button>
            </div>

            {openModal3 && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
                <div className="bg-gray-900 text-gray-200 dark:bg-gray-800 rounded-2xl shadow-lg p-6 max-w-lg w-full max-h-[90vh] overflow-auto relative">
                  <button onClick={() => setOpenModal3(false)} className="absolute top-3 right-3 text-gray-400 hover:text-red-500"><X size={22} /></button>
                  <img src={image2} alt="EmaJhon" className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h2 className="text-2xl font-semibold mb-3">EmaJhon</h2>

                  <h3 className="text-lg font-semibold mb-2">Features:</h3>
                  <ul className="text-left mb-4 space-y-1">
                    <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> User not login this site proceed checkout button click redirect login page</li>
                    <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> Firebase Authentication use</li>
                    <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> Product save cart and data save will be chrome local storage</li>
                  </ul>

                  <h3 className="text-lg font-semibold mb-2">Technologies:</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="flex items-center gap-1 px-3 py-1 bg-gray-700 rounded-lg text-sm"><Code size={16} /> React</span>
                    <span className="flex items-center gap-1 px-3 py-1 bg-gray-700 rounded-lg text-sm"><Code size={16} /> Tailwind CSS , CSS</span>
                    <span className="flex items-center gap-1 px-3 py-1 bg-gray-700 rounded-lg text-sm"><Code size={16} /> Chrome local storage</span>
                    <span className="flex items-center gap-1 px-3 py-1 bg-gray-700 rounded-lg text-sm"><Code size={16} /> React flowbite, daisyUI</span>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>





      {/* Skills Section */}
      < section id="skills" className="px-6 py-16 text-center" >
        <h3 className="text-3xl font-semibold mb-10">My Skills</h3>

        <div className="flex flex-wrap justify-center gap-6">

          {/* HTML5 */}
          <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition w-24">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML5"
              className="w-12 h-12 mb-2"
            />
            <span className="text-white text-sm font-semibold">HTML5</span>
          </div>

          {/* CSS3 */}
          <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition w-24">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS3"
              className="w-12 h-12 mb-2"
            />
            <span className="text-white text-sm font-semibold">CSS3</span>
          </div>

          {/* Bootstrap */}
          <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition w-24">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
              alt="Bootstrap"
              className="w-12 h-12 mb-2"
            />
            <span className="text-white text-sm font-semibold">Bootstrap</span>
          </div>

          {/* React */}
          <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition w-24">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              className="w-12 h-12 mb-2"
            />
            <span className="text-white text-sm font-semibold">React</span>
          </div>

          {/* Tailwind */}
          <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition w-24">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
              alt="Tailwind"
              className="w-12 h-12 mb-2"
            />
            <span className="text-white text-sm font-semibold">Tailwind</span>
          </div>

          {/* JavaScript */}
          <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition w-24">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              className="w-12 h-12 mb-2"
            />
            <span className="text-white text-sm font-semibold">JavaScript</span>
          </div>


          {/* Next.js */}
          <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition w-24">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              alt="Next.js"
              className="w-12 h-12 mb-2"
            />
            <span className="text-white text-sm font-semibold">Next.js</span>
          </div>

          {/* Node.js */}
          <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition w-24">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
              className="w-12 h-12 mb-2"
            />
            <span className="text-white text-sm font-semibold">Node.js</span>
          </div>

          {/* MongoDB */}
          <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition w-24">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              alt="MongoDB"
              className="w-12 h-12 mb-2"
            />
            <span className="text-white text-sm font-semibold">MongoDB</span>
          </div>

          {/* Express.js */}
          <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition w-24">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              alt="Express.js"
              className="w-12 h-12 mb-2"
            />
            <span className="text-white text-sm font-semibold">Express.js</span>
          </div>

          {/* JWT */}
          <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition w-24">
            <img
              src="https://cdn-icons-png.flaticon.com/512/906/906334.png" // JWT generic icon
              alt="JWT"
              className="w-12 h-12 mb-2"
            />
            <span className="text-white text-sm font-semibold">JWT</span>
          </div>

          {/* Tools */}
          <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition w-24">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              alt="VS Code"
              className="w-12 h-12 mb-2"
            />
            <span className="text-white text-sm font-semibold">VS Code</span>
          </div>

          <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition w-24">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
              alt="npm"
              className="w-12 h-12 mb-2"
            />
            <span className="text-white text-sm font-semibold">npm</span>
          </div>

          <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition w-24">
            <img
              src="https://cdn-icons-png.flaticon.com/512/888/888857.png" // Chrome dev tools icon
              alt="Chrome DevTools"
              className="w-12 h-12 mb-2"
            />
            <span className="text-white text-sm font-semibold">DevTools</span>
          </div>

          {/* Interpersonal Skills */}
          <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition w-36">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // teamwork icon
              alt="Teamwork"
              className="w-12 h-12 mb-2"
            />
            <span className="text-white text-sm font-semibold text-center">
              Hardworking | Quick Learner | Team Work
            </span>
          </div>

        </div>
      </section >


      <section id="contact" className="px-6 py-16 bg-gray-900 text-white">
        <h3 className="text-3xl font-semibold mb-6 text-center">Contact Me</h3>
        <p className="text-center opacity-80 mb-10">
          Let's build something amazing together! Drop me a message.
        </p>

        <div className="max-w-3xl mx-auto">
          <form className="flex flex-col gap-6">
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
            />

            {/* Message */}
            <textarea
              rows="6"
              placeholder="Your Message"
              className="p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-6 py-3 bg-teal-500 rounded-lg shadow-lg hover:bg-teal-600 transition text-white font-semibold"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info with Icons */}
          <div className="mt-10 text-center space-y-3 text-gray-400 flex flex-col items-center gap-2">
            <p>
              Email:
              <a href="mailto:mehedihassanniloy07@gmail.com" className="text-teal-400 hover:underline ml-1">
                mehedihassanniloy07@gmail.com
              </a>
            </p>

            <p className="flex items-center gap-2">
              <a
                href="https://wa.me/qr/45ZQY4FELGYDH1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-500 rounded-lg shadow-lg hover:bg-green-600 flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                >
                  <path d="M380.9 97.1C339-2.5 261.8-24.9 194.4 22.4 125.6 70.2 96.2 161.1 104 247.6L0 512l270.5-103.9c84.7 7.7 175.7-21.6 223.5-90.4 47.3-67.3 24.9-144.5-97.1-221.6zM232 332c-21.7 0-42-6.6-59.2-19.1l-8.4-6.3-35.2 12 11.8-34.2-6.7-8.6C115.6 277.2 112 258 112 238c0-63.6 51.6-115.2 115.2-115.2 30.7 0 59.5 12 81.2 33.7 21.7 21.7 33.7 50.5 33.7 81.2C342 280.4 290.4 332 232 332z" />
                </svg>
                WhatsApp
              </a>
            </p>

            <p className="flex items-center gap-2">
              <Linkedin className="w-5 h-5 text-teal-400" />
              <a href="https://www.linkedin.com/in/mehedi-hassan-niloy-b26a832a2/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
                LinkedIn
              </a>
            </p>

            <p>Location: Dhaka, Bangladesh</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-black/40">
        <p className="text-gray-300 text-sm">
          © 2025 Mehedi Hassan Niloy. All rights reserved.
        </p>
      </footer >
    </div >
  );
}
