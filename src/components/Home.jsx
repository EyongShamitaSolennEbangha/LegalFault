// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// export default function ParticleBackground() {
//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);
//   }, []);

//   const particlesConfig = {
//     autoPlay: true,
//     background: { color: { value: "transparent" } },
//     fpsLimit: 120,
//     fullScreen: { enable: true, zIndex: 0 },
//     interactivity: {
//       events: {
//         onClick: { enable: true, mode: "push" },
//         onHover: { enable: true, mode: "grab", parallax: { enable: true, force: 60, smooth: 10 } },
//       },
//       modes: { push: { quantity: 4 }, grab: { distance: 400, links: { opacity: 1 } } },
//     },
//     particles: {
//       color: { value: "#ffffff" },
//       links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
//       move: { enable: true, speed: 2, outModes: { default: "out" } },
//       number: { value: 100, density: { enable: true, width: 1920, height: 1080 } },
//       opacity: { value: { min: 0.1, max: 0.5 }, animation: { enable: true, speed: 3 } },
//       shape: { type: "circle" },
//       size: { value: { min: 1, max: 10 }, animation: { enable: true, speed: 20 } }
//     }
//   };

//   return <Particles id="tsparticles" init={particlesInit} options={particlesConfig} />

// }



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for hamburger/close icons

export default function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const goToPage = () => navigate("/signup");
  const goToLogin = () => navigate("/login");

  return (
    <header
      id="Header"
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-around p-7 sm:gap-[10px] md:gap-[20px] gap-[100px] bg-white/30"
    >
      {/* Gradient bottom border */}
      <span
        className="absolute left-0 bottom-0 w-full h-[1px] 
                   bg-gradient-to-r 
                   from-white via-blue-300 to-white 
                   opacity-80 rounded"
      ></span>

      {/* Logo */}
      <div className="flex gap-2 items-center">
        <h2 className="text-white bg-[#194de8] font-semibold p-4 rounded-xl">
          LF
        </h2>
        <h2 className="font-bold bg-gradient-to-r from-black via-blue-500 to-indigo-500 bg-clip-text text-transparent text-xl">
          LegalFault
        </h2>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex text-gray-500 gap-14 text-[19px]">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#how">How</a>
        <a href="#pricing">Pricing</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Desktop Auth */}
      <div className="hidden md:flex gap-10 items-center text-[19px]">
        <h2 onClick={goToLogin} className="text-[#194de8] cursor-pointer">
          LogIn
        </h2>
        <button
          onClick={goToPage}
          className="bg-[#194de8] text-white p-2 w-[140px] items-center rounded-md"
        >
          Get Started
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-[#194de8]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-[200px] flex flex-col items-center gap-3 py-4 bg-white shadow-md md:hidden text-[17px]">
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#how" onClick={() => setIsOpen(false)}>How</a>
          <a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>

          <h2
            onClick={() => { goToLogin(); setIsOpen(false); }}
            className="text-[#194de8] cursor-pointer"
          >
            LogIn
          </h2>
          <button
            onClick={() => { goToPage(); setIsOpen(false); }}
            className="bg-[#194de8] text-white p-2 w-[140px] rounded-md"
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
