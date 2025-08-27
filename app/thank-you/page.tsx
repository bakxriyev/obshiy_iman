"use client"

import Image from "next/image"

export default function ThankYouPage() {
  const handleJoinTelegram = () => {
    window.open("https://t.me/+mXVtX1pA26Y1MzJi", "_blank")
    setTimeout(() => {
      window.location.href = "/"
    }, 500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-2xl w-full">
        {/* Main heading */}
        <h1 className="text-xl md:text-2xl font-bold mb-6 leading-tight text-gray-800">
          Bepul 3 kunlik darsimda ishtirok etish uchun
        </h1>

        {/* Instructions */}
        <div className="mb-8 px-4">
          <p className="text-lg md:text-xl text-gray-800 mb-6 leading-relaxed">
            Pastdagi <span className="font-bold text-blue-600">"Obuna Bo'lish"</span> tugmasiga bosing va Telegram kanalga kirib 
            <span className="font-bold text-green-600"> «Подписаться»</span> ni ham bosing!
          </p>
        </div>

        {/* Main CTA Button */}
        <div className="flex flex-col items-center mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-green-500 animate-bounce"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg> 
          <br />
          <button
            onClick={handleJoinTelegram}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-xl md:text-2xl py-4 px-8 md:px-12 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 w-full max-w-sm relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center">
              {/* Telegram Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              OBUNA BO'LISH
            </span>

            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20 transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-700"></div>
          </button>

          {/* Additional instruction */}
          <p className="text-sm text-gray-600 mt-4 max-w-xs">
            Tugmani bosgandan keyin Telegram ochiladi va "Подписаться" tugmasini bosishni unutmang!
          </p>
        </div>

        {/* Arrow indicators */}
        <div className="flex justify-center items-center mb-6 space-x-4">
          {/* Left arrow */}
          

          {/* Down arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-green-500 animate-bounce"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>

        
        </div>

        {/* Main Image */}
        <div className="relative mb-8">
          <Image 
            src="/scren.jpg" 
            alt="Telegram Channel" 
            width={300}
            height={300}
            className="w-full max-w-xs mx-auto rounded-2xl shadow-2xl"
          />
        </div>

        {/* Decorative elements */}
        <div className="mt-8 flex justify-center space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-75"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-150"></div>
        </div>
      </div>
    </div>
  )
}
