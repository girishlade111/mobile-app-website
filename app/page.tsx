"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Edit3, HelpCircle, Folder, Lock, BarChart3, Bell, User } from "lucide-react"
import { useEffect, useState } from "react"

export default function NotesAppLanding() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 md:w-80 lg:w-96 h-64 md:h-80 lg:h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/4 left-0 w-48 md:w-56 lg:w-64 h-48 md:h-56 lg:h-64 bg-cyan-400/20 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      {/* Header */}
      <header
        className={`flex justify-between items-center p-4 md:p-6 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
      >
        <div></div>
        <div className="flex items-center gap-2 md:gap-4">
          <span className="text-white font-medium text-sm md:text-base animate-fade-in-delay-1 cursor-pointer">Rucript</span>
          <Badge
            variant="secondary"
            className="bg-white/20 text-white border-white/30 px-3 py-1 md:px-5 md:py-2 font-medium text-sm cursor-pointer md:text-base animate-fade-in-delay-2 hover:bg-white/30 transition-all duration-300"
          >
            Linear
          </Badge>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 md:px-6 lg:px-12 xl:px-16 py-8 lg:py-4 gap-12 md:gap-16 lg:gap-8 xl:gap-12 max-w-7xl mx-auto">
        {/* Phone Mockup */}
        <div
          className={`relative flex-shrink-0 order-2 lg:order-1 ${isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}
          style={{
            transition: "opacity 1s ease-out 0.3s, transform 1s ease-out 0.3s",
          }}
        >
          <div className="w-64 h-[512px] md:w-72 md:h-[576px] lg:w-80 lg:h-[640px] bg-black rounded-[2.5rem] lg:rounded-[3rem] p-1.5 lg:p-2 shadow-2xl hover:shadow-3xl transition-shadow duration-500 animate-phone-float">
            <div className="w-full h-full bg-gradient-to-b from-orange-300 to-orange-400 rounded-[2rem] lg:rounded-[2.5rem] relative overflow-hidden">
              {/* Status Bar */}
              <div
                className={`flex justify-between items-center px-4 lg:px-6 pt-3 lg:pt-4 pb-2 transition-all duration-500 delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
              >
                <span className="text-black font-semibold text-sm lg:text-base">9:41</span>
                <div className="flex items-center gap-1">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-black rounded-full animate-pulse-dot delay-100"></div>
                    <div className="w-1 h-1 bg-black rounded-full animate-pulse-dot delay-200"></div>
                    <div className="w-1 h-1 bg-black rounded-full animate-pulse-dot delay-300"></div>
                    <div className="w-1 h-1 bg-black rounded-full animate-pulse-dot delay-400"></div>
                  </div>
                  <div className="w-5 lg:w-6 h-2.5 lg:h-3 border border-black rounded-sm">
                    <div className="w-3 lg:w-4 h-1 lg:h-1.5 bg-black rounded-sm m-0.5 animate-battery-fill"></div>
                  </div>
                </div>
              </div>

              {/* App Header */}
              <div
                className={`px-4 lg:px-6 py-3 lg:py-4 transition-all duration-500 delay-800 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
              >
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="w-8 lg:w-10 h-8 lg:h-10 bg-white/30 rounded-full flex items-center justify-center animate-icon-bounce">
                    <FileText className="w-4 lg:w-5 h-4 lg:h-5 text-white" />
                  </div>
                  <h1 className="text-white text-xl lg:text-2xl font-bold">Notes</h1>
                </div>
              </div>

              {/* Notes Section */}
              <div className="px-4 lg:px-6 py-2">
                <h2
                  className={`text-white text-base lg:text-lg font-semibold mb-3 lg:mb-4 transition-all duration-500 delay-900 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                >
                  Notes
                </h2>

                {/* Note Items with Enhanced Animations */}
                <div className="space-y-2 lg:space-y-3">
                  {/* Note 1 - Edit/Pencil */}
                  <div
                    className={`flex items-center gap-2 lg:gap-3 bg-white/20 rounded-lg lg:rounded-xl p-2 lg:p-3 hover:bg-white/30 hover:scale-105 cursor-pointer group`}
                    style={{
                      opacity: 0,
                      transform: "translateX(-48px) scale(0.9) rotateY(-15deg)",
                      animation: isLoaded
                        ? "noteSlideInBouncy 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.9s forwards, noteHover 3s ease-in-out 3.9s infinite"
                        : "none",
                      transition: "background-color 0.3s ease, transform 0.3s ease",
                    }}
                  >
                    <div className="w-6 lg:w-8 h-6 lg:h-8 bg-orange-500 rounded-full flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-orange-400 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                      <Edit3 className="w-3 lg:w-4 h-3 lg:h-4 text-white relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </div>
                    <div className="flex-1 relative">
                      <div
                        className="h-1.5 lg:h-2 bg-white/40 rounded w-3/4 relative overflow-hidden"
                        style={{
                          animation: isLoaded ? "loadingBarFill 1.0s ease-out 1.1s forwards" : "none",
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-white/80 rounded transform -translate-x-full animate-shimmer"></div>
                      </div>
                    </div>
                    <span
                      className="text-white/60 text-xs lg:text-sm transition-all duration-300 group-hover:text-white group-hover:translate-x-1"
                      style={{
                        animation: isLoaded ? "arrowBounce 0.5s ease-out 1.7s" : "none",
                      }}
                    >
                      {">"}
                    </span>
                  </div>

                  {/* Note 2 - Question Mark */}
                  <div
                    className={`flex items-center gap-2 lg:gap-3 bg-white/20 rounded-lg lg:rounded-xl p-2 lg:p-3 hover:bg-white/30 hover:scale-105 cursor-pointer group`}
                    style={{
                      opacity: 0,
                      transform: "translateX(-48px) scale(0.9) rotateY(-15deg)",
                      animation: isLoaded
                        ? "noteSlideInBouncy 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 1.05s forwards, noteHover 3s ease-in-out 4.05s infinite"
                        : "none",
                      transition: "background-color 0.3s ease, transform 0.3s ease",
                    }}
                  >
                    <div className="w-6 lg:w-8 h-6 lg:h-8 bg-yellow-500 rounded-full flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-yellow-400 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                      <HelpCircle className="w-3 lg:w-4 h-3 lg:h-4 text-white relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </div>
                    <div className="flex-1 relative">
                      <div
                        className="h-1.5 lg:h-2 bg-white/40 rounded w-2/3 relative overflow-hidden"
                        style={{
                          animation: isLoaded ? "loadingBarFill 1.0s ease-out 1.25s forwards" : "none",
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-white/80 rounded transform -translate-x-full animate-shimmer delay-200"></div>
                      </div>
                    </div>
                    <span
                      className="text-white/60 text-xs lg:text-sm transition-all duration-300 group-hover:text-white group-hover:translate-x-1"
                      style={{
                        animation: isLoaded ? "arrowBounce 0.5s ease-out 1.85s" : "none",
                      }}
                    >
                      {">"}
                    </span>
                  </div>

                  {/* Note 3 - Folder */}
                  <div
                    className={`flex items-center gap-2 lg:gap-3 bg-white/20 rounded-lg lg:rounded-xl p-2 lg:p-3 hover:bg-white/30 hover:scale-105 cursor-pointer group`}
                    style={{
                      opacity: 0,
                      transform: "translateX(-48px) scale(0.9) rotateY(-15deg)",
                      animation: isLoaded
                        ? "noteSlideInBouncy 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 1.2s forwards, noteHover 3s ease-in-out 4.2s infinite"
                        : "none",
                      transition: "background-color 0.3s ease, transform 0.3s ease",
                    }}
                  >
                    <div className="w-6 lg:w-8 h-6 lg:h-8 bg-green-500 rounded-full flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-green-400 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                      <Folder className="w-3 lg:w-4 h-3 lg:h-4 text-white relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </div>
                    <div className="flex-1 relative">
                      <div
                        className="h-1.5 lg:h-2 bg-white/40 rounded w-1/2 relative overflow-hidden"
                        style={{
                          animation: isLoaded ? "loadingBarFill 1.0s ease-out 1.4s forwards" : "none",
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-white/80 rounded transform -translate-x-full animate-shimmer delay-400"></div>
                      </div>
                    </div>
                    <span
                      className="text-white/60 text-xs lg:text-sm transition-all duration-300 group-hover:text-white group-hover:translate-x-1"
                      style={{
                        animation: isLoaded ? "arrowBounce 0.5s ease-out 2s" : "none",
                      }}
                    >
                      {">"}
                    </span>
                  </div>

                  {/* Note 4 - Lock */}
                  <div
                    className={`flex items-center gap-2 lg:gap-3 bg-white/20 rounded-lg lg:rounded-xl p-2 lg:p-3 hover:bg-white/30 hover:scale-105 cursor-pointer group`}
                    style={{
                      opacity: 0,
                      transform: "translateX(-48px) scale(0.9) rotateY(-15deg)",
                      animation: isLoaded
                        ? "noteSlideInBouncy 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 1.35s forwards, noteHover 3s ease-in-out 4.35s infinite"
                        : "none",
                      transition: "background-color 0.3s ease, transform 0.3s ease",
                    }}
                  >
                    <div className="w-6 lg:w-8 h-6 lg:h-8 bg-gray-500 rounded-full flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gray-400 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                      <Lock className="w-3 lg:w-4 h-3 lg:h-4 text-white relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </div>
                    <div className="flex-1 relative">
                      <div
                        className="h-1.5 lg:h-2 bg-white/40 rounded w-3/5 relative overflow-hidden"
                        style={{
                          animation: isLoaded ? "loadingBarFill 1.0s ease-out 1.55s forwards" : "none",
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-white/80 rounded transform -translate-x-full animate-shimmer delay-600"></div>
                      </div>
                    </div>
                    <span
                      className="text-white/60 text-xs lg:text-sm transition-all duration-300 group-hover:text-white group-hover:translate-x-1"
                      style={{
                        animation: isLoaded ? "arrowBounce 0.5s ease-out 2.15s" : "none",
                      }}
                    >
                      {">"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Navigation */}
              <div
                className={`absolute bottom-6 lg:bottom-8 left-0 right-0 px-4 lg:px-6 transition-all duration-500 delay-1400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <div className="flex justify-around items-center bg-white/20 rounded-xl lg:rounded-2xl py-2 lg:py-3 backdrop-blur-sm">
                  <BarChart3 className="w-5 lg:w-6 h-5 lg:h-6 text-white/60 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer" />
                  <Bell className="w-5 lg:w-6 h-5 lg:h-6 text-white hover:scale-110 transition-all duration-300 cursor-pointer animate-bell-ring" />
                  <User className="w-5 lg:w-6 h-5 lg:h-6 text-white/60 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer" />
                </div>
              </div>

              {/* Home Indicator */}
              <div className="absolute bottom-1.5 lg:bottom-2 left-1/2 transform -translate-x-1/2 w-24 lg:w-32 h-0.5 lg:h-1 bg-black/30 rounded-full animate-pulse-slow"></div>
            </div>
          </div>
        </div>

        {/* Content - Mobile First */}
        <div
          className={`flex-1 max-w-xl lg:max-w-2xl text-center lg:text-left order-1 lg:order-2 lg:ml-8 xl:ml-12 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{
            transition: "opacity 1s ease-out 0.5s, transform 1s ease-out 0.5s",
          }}
        >
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 md:mb-8 animate-text-reveal">
            <span className="inline-block animate-slide-up delay-600">Build a Cool Note</span>
            <br />
            <span className="inline-block animate-slide-up delay-800">Mobile App</span>
          </h1>

          <div
            className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start transition-all duration-500 delay-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 md:px-8 md:py-6 text-base md:text-lg rounded-full font-semibold w-full sm:w-auto hover:scale-105 hover:shadow-lg transition-all duration-300 animate-button-glow-green"
            >
              Build Mode
            </Button>
            <Button
              size="lg"
              className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-4 md:px-8 md:py-6 text-base md:text-lg rounded-full font-semibold w-full sm:w-auto hover:scale-105 hover:shadow-lg transition-all duration-300 animate-button-glow-orange"
            >
              Stay App
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
        }
        
        @keyframes phone-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes pulse-dot {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes battery-fill {
          0% { width: 25%; }
          100% { width: 75%; }
        }
        
        @keyframes icon-bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes icon-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        
        @keyframes loading-bar {
          0% { width: 0%; opacity: 0.3; }
          100% { opacity: 1; }
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(2px); }
        }
        
        @keyframes bell-ring {
          0%, 100% { transform: rotate(0deg); }
          10%, 30%, 50%, 70%, 90% { transform: rotate(-10deg); }
          20%, 40%, 60%, 80% { transform: rotate(10deg); }
        }
        
        @keyframes slide-up {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0px); opacity: 1; }
        }
        
        @keyframes text-reveal {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0px); }
        }
        
        @keyframes button-glow-green {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
          50% { box-shadow: 0 0 30px rgba(34, 197, 94, 0.5); }
        }
        
        @keyframes button-glow-orange {
          0%, 100% { box-shadow: 0 0 20px rgba(251, 146, 60, 0.3); }
          50% { box-shadow: 0 0 30px rgba(251, 146, 60, 0.5); }
        }
        
        @keyframes fade-in-delay-1 {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0px); }
        }
        
        @keyframes fade-in-delay-2 {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0px); }
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }
        
        .animate-phone-float {
          animation: phone-float 4s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-dot {
          animation: pulse-dot 2s ease-in-out infinite;
        }
        
        .animate-battery-fill {
          animation: battery-fill 2s ease-out;
        }
        
        .animate-icon-bounce {
          animation: icon-bounce 2s ease-in-out infinite;
        }
        
        .animate-icon-pulse {
          animation: icon-pulse 3s ease-in-out infinite;
        }
        
        .animate-loading-bar {
          animation: loading-bar 1.5s ease-out;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        
        .animate-bell-ring {
          animation: bell-ring 2s ease-in-out infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-text-reveal {
          animation: text-reveal 1s ease-out;
        }
        
        .animate-button-glow-green {
          animation: button-glow-green 3s ease-in-out infinite;
        }
        
        .animate-button-glow-orange {
          animation: button-glow-orange 3s ease-in-out infinite;
        }
        
        .animate-fade-in-delay-1 {
          animation: fade-in-delay-1 0.8s ease-out 0.5s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in-delay-2 0.8s ease-out 0.7s forwards;
          opacity: 0;
        }

        @keyframes noteSlideInBouncy { /* Renamed for clarity */
          0% { 
            opacity: 0; 
            transform: translateX(-48px) scale(0.8) rotateY(-20deg); 
          }
          100% { 
            opacity: 1; 
            transform: translateX(0px) scale(1) rotateY(0deg); 
          }
        }

        @keyframes noteHover {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
            box-shadow: 0 2px 8px rgba(255,255,255,0.1); 
          }
          50% { 
            transform: translateY(-2px) scale(1.01); 
            box-shadow: 0 4px 16px rgba(255,255,255,0.2); 
          }
        }

        @keyframes loadingBarFill {
          0% { 
            width: 0%; 
            opacity: 0.3; 
            background: linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.4) 100%);
          }
          50% {
            opacity: 0.7;
            background: linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.6) 100%);
          }
          100% { 
            opacity: 1; 
            background: linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.6) 100%);
          }
        }

        @keyframes arrowBounce {
          0% { transform: translateX(0px) scale(1); opacity: 0.6; }
          50% { transform: translateX(4px) scale(1.1); opacity: 1; }
          100% { transform: translateX(0px) scale(1); opacity: 0.6; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
