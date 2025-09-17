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
import React from "react";
import {  Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

  const goToPage = () => {
    navigate("/signup"); // ✅ works now
  };
  
  const goToLogin = () => {
    navigate("/login");
  };

export default function Header() {
 const navigate = useNavigate(); // ✅ hook

  const goToPage = () => {
    navigate("/signup"); // ✅ works now
  };
  
  const goToLogin = () => {
    navigate("/login");
  };




  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-around p-7 gap-[100px] bg-white/30 ">
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
        <h2 className=" font-bold bg-gradient-to-r from-black via-blue-500 to-indigo-500 bg-clip-text text-transparent text-xl">
          LegalFault
        </h2>
      </div>

      {/* Nav */}
      <nav className="text-gray-500 flex gap-14 text-[19px]">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#how">How It Works</a>
        <a href="#pricing">Pricing</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Auth */}
      <div className="flex gap-10 items-center text-[19px]">
        <h2 onClick={goToLogin} className="text-[#194de8]">LogIn</h2>
        <button   onClick={goToPage}  className="bg-[#194de8] text-white p-2 w-[140px] items-center rounded-md">
          Get Started
        </button>
      </div>
    </header>
  );
}
