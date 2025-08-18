"use client"

import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import RegistrationModal from "../components/register-modal"

export default function LandingPage2() {
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
    <div className="min-h-screen bg-gray-900">
      <div className="flex justify-center pt-6 pb-4">
        <div className="bg-gray-800 rounded-full px-6 py-3 border border-gray-700 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-white font-semibold text-sm">2-3-4 SENTABR 20:00</span>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-sm mx-auto px-4">
        <h1 className="text-2xl font-black text-white text-center leading-tight bg-red-600 rounded-xl p-2 mb-4 ">
          "DANGASALIKDAN QUTUL VA XOTIRJAM HAYOTDA YASHA"
        </h1>

        <p className="text-center text-lg font-bold text-white mb-6">IMAN AHMEDOVADAN 3 KUNLIK BEPUL MAXSUS DARS</p>



        {/* Professional Photo */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Image
              src="/photo.jpg"
              alt="Iman Ahmedova"
              width={280}
              height={320}
              className="rounded-2xl shadow-lg"
              style={{ width: "280px", height: "320px", objectFit: "cover" }}
              priority
            />
          </div>
        </div>
        <div className="mb-6">
          <button
            onClick={handleRegister}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-4 px-6 rounded-xl transition-colors duration-200 shadow-lg flex items-center justify-center gap-2"
          >
            BEPUL QATNASHISH
            <span className="bg-white text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
              →
            </span>
          </button>
          <p className="text-center text-sm text-gray-400 mt-2">Bepul qatnashish uchun bosing</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-black text-white text-center mb-6">ONLAYN BEPUL DARSDA SIZ:</h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Qanday qilib maqsadlarni rejaga aylantirish va ularni kichik qismlarga bo'lish orqali amalga oshirish;
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Qanday qilib daromadni to'g'ri taqsimlash orqali chiqimlarni kamaytirish va pulni to'g'ri boshqarish;
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Vaqtingizni to'g'ri tizimlab, o'zingizga, oilangizga, ishingizga va yaqinlaringizga vaqt ajratishni
                hamda ko'plab foydali bilimlarni bepul o'rganasiz.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA Button */}
        <div className="pb-8">
          <button
            onClick={handleRegister}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-4 px-6 rounded-xl transition-colors duration-200 shadow-lg flex items-center justify-center gap-2"
          >
            YOPIQ TELEGRAM KANALGA QO`SHILISH 
            <span className="bg-white text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
              →
            </span>
          </button>

          <p className="text-center text-sm text-gray-400 mt-2">Bepul qatnashish uchun bosing</p>
          <br />
          <div className="bg-gray-800 rounded-xl p-4 mb-6 border border-gray-700">
            <div className="flex justify-center mb-3">
              <Image
                src="/photo.jpg"
                alt="Iman Ahmedova Logo"
                width={80}
                height={80}
                className="rounded-full shadow-md"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
            </div>
            <h3 className="font-bold text-white text-center mb-3">IMAN AHMEDOVA</h3>
            <ul className="text-xs text-gray-300 space-y-1">
              <li>• Oilaviy munosabatlar va bolalar psixologi</li>
              <li>• Prezidentimiz tomonidan taqdirlangan 30 yillik ko'krak nishoni sohibasi</li>
              <li>• 3 yillik tajriba</li>
              <li>• 50.000 dan ortiq o'quvchilar</li>
              <li>• Psixologlar assotsiatsiyasi a'zosi</li>
              <li>• PHD mustaqil izlanuvchisi</li>
            </ul>
          </div>

          {/* Main CTA Button */}
          <div className="mb-6">
            <button
              onClick={handleRegister}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-4 px-6 rounded-xl transition-colors duration-200 shadow-lg flex items-center justify-center gap-2"
            >
              JONLI ISHTIROK ETISH
              <span className="bg-white text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                →
              </span>
            </button>
            <p className="text-center text-sm text-gray-400 mt-2">Bepul qatnashish uchun bosing</p>
          </div>
        </div>
      </div>

      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} />
    </div>
  )
}
