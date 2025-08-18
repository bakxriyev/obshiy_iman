"use client"

import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import RegistrationModal from "./register-modal"

export default function LandingPage1() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const handleRegister = () => {
    setIsModalOpen(true)
  }

  const handleModalSubmit = (data: { full_name: string; phone_number: string; }) => {
    console.log("Registration data:", data)
    setIsModalOpen(false)
    router.push("/thank-you")
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-md mx-auto px-4 py-3">
        <div className="flex justify-center mb-3">
          <div className="bg-black/50 rounded-full px-4 py-2 flex items-center gap-2 border border-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-white text-sm font-medium">2-3-4 sentabr | 20:00</span>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-300 text-sm mb-2">Iman Ahmedovadan 3 kunlik BEPUL maxsus dars</p>

          <h1 className="text-white text-xl font-bold mb-4 leading-tight">
            DANGASALIK VA QO'RQUVLARINGIZNI YENGMASDAN BARAKALI VA XOTIRJAM HAYOTDA YASHAY OLMAYSIZ
          </h1>

          <div className="mb-4">
            <h2 className="text-yellow-400 text-lg font-semibold uppercase">"Dangasalikdan qutul va xotirjam hayotda yasha"</h2>
          </div>

          <div className="relative mb-4 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl blur-lg"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-1">
                <Image
                  src="/iman.png"
                  alt="Iman Ahmedova"
                  width={200}
                  height={250}
                  className="w-48 h-60 object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleRegister}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base py-3 rounded-lg mb-6 flex items-center justify-center gap-2 transition-colors"
          >
            YOPIQ KANALGA QO'SHILISH
            <span className="bg-white text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-xs">
              →
            </span>
          </button>

          <p className="text-gray-400 text-sm mb-8">Bepul qatnashish uchun bosing</p>

        

          <div className="mb-8">
            <h2 className="text-white font-bold text-xl mb-6">ONLAYN BEPUL DARSDA SIZ:</h2>

            <div className="space-y-4 uppercase">
              <div className="flex items-start gap-3 bg-gray-800/50 rounded-lg p-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed text-left">
                  dangasalikning ichki-ruhiy sabablarini bilib olasiz
                </p>
              </div>

              <div className="flex items-start gap-3 bg-gray-800/50 rounded-lg p-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed text-left">
                  nega doim katta ishtiyoq bilan boshlagan ishlaringizni oxiriga yetkazolmay to'xtab qolishi sabablarini
                  bilib olasiz
                </p>
              </div>

              <div className="flex items-start gap-3 bg-gray-800/50 rounded-lg p-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed text-left">
                  qanday qilib birgina dangasalik va qo'rquvlarni yengish orqali hayotimizda katta o'zgarishlar bo'lishi
                  mumkinligini bilib olasiz
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleRegister}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            DARSDA JONLI QATNASHISH
            <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm">
              →
            </span>
          </button>
          <p className="text-gray-400 text-sm mb-8">Bepul qatnashish uchun bosing</p>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-gray-800">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gray-700">
                  <Image
                    src="/photo.jpg"
                    alt="Iman Akhmedova"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 30%" }}
                  />
                </div>
                <h3 className="text-white font-bold text-xl mb-6 font-sans">IMAN AKHMEDOVA</h3>
                <div className="text-white/90 font-sans leading-relaxed space-y-3 text-left">
                  <p>• Oilaviy munosabatlar va bolalar psixologi</p>
                  <p>• Prezidentimiz tomonidan taqdirlangan 30 yillik ko'krak nishoni sohibasi</p>
                  <p>• 3 yillik tajriba</p>
                  <p>• 50.000 dan ortiq o'quvchilar</p>
                  <p>• Psixologlar assotsiatsiyasi a'zosi</p>
                  <p>• PHD mustaqil izlanuvchisi</p>
                </div>
              </div>
            </div>
          <button
            onClick={handleRegister}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            MAXSUS KANALGA QO'SHILISH
            <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm">
              →
            </span>
          </button>
          <p className="text-gray-400 text-sm mb-8">Bepul qatnashish uchun bosing</p>
        </div>
      </div>

      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} />
    </div>
  )
}
