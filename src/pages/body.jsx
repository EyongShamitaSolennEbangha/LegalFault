import React from "react";
import LegalVaultDashboard from "../components/live";
import Header from "../components/Home";
import Card from "../components/Card";
import Square from "../components/Square";
import Cards from "../components/cards";
import How from "../components/howitwork";
import Pricing from "../components/Pricing";
import Testimony from "../components/Testimony"
import Fotter from "../components/Fotter";
import { CiStar } from "react-icons/ci";
import { GiProgression } from "react-icons/gi";
import { MdEnhancedEncryption } from "react-icons/md";
import { IoDocumentAttach } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { ImPower } from "react-icons/im";
import { CiMobile2 } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import {  Lock, CheckCircle, Clock, Eye } from 'lucide-react';
import { Zap, Globe,  } from 'lucide-react';
import { FileText, FolderOpen, Search, Shield, Smartphone, Users } from 'lucide-react';

export default function Body() {
  const features = [
    {
      badge: "AI-Powered • 10x faster",
      badgeColor: "bg-blue-50 text-blue-600",
      icon: FileText,
      iconBg: "bg-gradient-to-br from-blue-100 to-purple-100",
      iconColor: "text-blue-500",
      title: "Smart Document Digitization",
      description:
        "AI-powered OCR technology converts physical documents to searchable digital format with 99.9% accuracy.",
    },
    {
      badge: "Auto-Sort • 90% time saved",
      badgeColor: "bg-blue-50 text-blue-600",
      icon: FolderOpen,
      iconBg: "bg-gradient-to-br from-blue-100 to-purple-100",
      iconColor: "text-blue-500",
      title: "Intelligent Organization",
      description:
        "Auto-categorization and smart tagging system learns from your usage patterns for effortless organization.",
    },
    {
      badge: "Instant Results • <1s response",
      badgeColor: "bg-blue-50 text-blue-600",
      icon: Search,
      iconBg: "bg-gradient-to-br from-blue-100 to-purple-100",
      iconColor: "text-blue-500",
      title: "Advanced Search Engine",
      description:
        "Find any document instantly with our powerful full-text search, metadata filtering, and smart suggestions.",
    },
    {
      badge: "Zero-Knowledge • 100% secure",
      badgeColor: "bg-blue-50 text-blue-600",
      icon: Shield,
      iconBg: "bg-gradient-to-br from-blue-100 to-purple-100",
      iconColor: "text-blue-500",
      title: "Enterprise Security",
      description:
        "Bank-level AES-256 encryption, zero-knowledge architecture, and compliance with legal industry standards.",
    },
    {
      badge: "Offline Sync • 24/7 access",
      badgeColor: "bg-blue-50 text-blue-600",
      icon: Smartphone,
      iconBg: "bg-gradient-to-br from-blue-100 to-purple-100",
      iconColor: "text-blue-500",
      title: "Mobile-First Access",
      description:
        "Native mobile apps and responsive design ensure seamless access to your documents anywhere, anytime.",
    },
    {
      badge: "Team Ready • Unlimited sharing",
      badgeColor: "bg-blue-50 text-blue-600",
      icon: Users,
      iconBg: "bg-gradient-to-br from-blue-100 to-purple-100",
      iconColor: "text-blue-500",
      title: "Secure Collaboration",
      description:
        "Granular permissions, secure sharing links, and real-time collaboration tools for teams and clients.",
    },
  ];

  return (
    <>
      {/* Reusable Header */}
      <Header />

      {/* Body */}
      <main id="home" className="pt-44">
        <div id="trusted" className="flex items-center bg-white shadow-md w-fit gap-[10px] p-3 rounded-full ml-10">
          <p>Trusted by 500+ law firms worldwide</p>
          <h3 className="flex text-yellow-500">
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
          </h3>
        </div>

        <div id="bodyflex" className="flex justify-around ">
          <div className="ml-10">
            <h1 id="secure" className="text-9xl bg-gradient-to-r from-black via-purple-500 to-indigo-500 bg-clip-text text-transparent font-extrabold">
              Secure Legal Document Hub Made Simple
            </h1>

            <h2 id="secure2" className="text-2xl mt-10 text-gray-600 leading-loose ">
              Upload, organize, and securely manage all your legal <br />
              documents in one place.
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent font-bold">
                {" "}
                No technical expertise <br /> required
              </span>
              — just simple, powerful document <br /> management.
            </h2>

            <div id="secure3"   className="flex gap-7 mt-5">
              <button className="bg-gradient-to-r from-blue-400 to-indigo-500 p-4 w-[240px] text-white font-semibold rounded-md">
                Start Free trial
              </button>
              <button className="bg-white shadow-md p-4 w-[240px] font-semibold rounded-md">
                Live Demo
              </button>
            </div>
          </div>

          <div className="mr-10">
            <LegalVaultDashboard />
          </div>
        </div>

        {/* Stats Section */}
        <div id="secure77" className="flex items-center justify-evenly w-[1000px] p-[50px] bg-white shadow-xl mt-[60px] mx-auto">
          <div>
            <h3 className="ml-5 text-blue-600 text-2xl">
              <GiProgression />
            </h3>
            <h2 className="text-3xl text-[#194de8] font-bold">99.9%</h2>
            <p className="text-xl text-gray-700 font-medium">uptime</p>
          </div>
          <div>
            <h3 className="ml-7 text-blue-600 text-2xl">
              <MdEnhancedEncryption />
            </h3>
            <h2 className="text-3xl text-[#194de8] font-bold">256-bit</h2>
            <p className="text-xl text-gray-700 font-medium">Encryption</p>
          </div>
          <div>
            <h3 className="ml-5 text-blue-600 text-2xl">
              <IoDocumentAttach />
            </h3>
            <h2 className="text-3xl text-[#194de8] font-bold">15M+</h2>
            <p className="text-xl text-gray-700 font-medium">Documents</p>
          </div>
          <div>
            <h3 className="ml-5 text-blue-600 text-2xl">
              <MdSupportAgent />
            </h3>
            <h2 className="text-3xl text-[#194de8] font-bold">24/7</h2>
            <p className="text-xl text-gray-700 font-medium">Support</p>
          </div>
        </div>

        {/* Features Section */}
        <div id="secure7" className="bg-[#f7fbff] flex flex-col items-center justify-center text-center p-[30px] mt-20">
          <div id="secure8" className="flex items-center space-x-2 border-[1px] p-3 rounded-full text-blue-600">
            <ImPower />
            <h2>Powerful Features</h2>
          </div>

          <div className="text-7xl font-bold mt-6">
            <h2 id="secure9">
              Everything You Need <br />
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent font-bold">
                Built for Legal Teams
              </span>
            </h2>
          </div>

          <div className="mt-12 max-w-2xl">
            <h2 id="secure10" className="text-gray-600 text-base font-semibold">
              Our comprehensive document management system is designed
              specifically for legal <br /> professionals, with the features you
              need to work efficiently and securely.
            </h2>
          </div>

          <div id="features" className="mt-20">
            <Card />
          </div>
          <div className="mt-20">
            <Cards/>
          </div>
          <div id="" className="mt-20">
            <Square />
          </div>
          <div id="how">
            <How/>
          </div>
          <div id="pricing">
            <Pricing />
          </div>
          <div id="testimonials"><Testimony /></div>
          <div id="contact">
            <Fotter />
          </div>
        </div>
      </main>
    </>
  );
}
