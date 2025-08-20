"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"

interface RegistrationModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: { full_name: string; phone_number: string }) => void
}

const countryCodes = [
  { code: "+998", country: "🇺🇿 Uzbekistan", length: 13 },
  { code: "+1", country: "🇺🇸 USA", length: 12 },
  { code: "+7", country: "🇷🇺 Russia", length: 12 },
  { code: "+44", country: "🇬🇧 UK", length: 13 },
  { code: "+49", country: "🇩🇪 Germany", length: 13 },
  { code: "+33", country: "🇫🇷 France", length: 12 },
  { code: "+39", country: "🇮🇹 Italy", length: 13 },
  { code: "+34", country: "🇪🇸 Spain", length: 12 },
  { code: "+86", country: "🇨🇳 China", length: 13 },
  { code: "+81", country: "🇯🇵 Japan", length: 13 },
  { code: "+82", country: "🇰🇷 South Korea", length: 13 },
  { code: "+91", country: "🇮🇳 India", length: 13 },
  { code: "+90", country: "🇹🇷 Turkey", length: 13 },
  { code: "+971", country: "🇦🇪 UAE", length: 13 },
  { code: "+966", country: "🇸🇦 Saudi Arabia", length: 13 },
]

export default function RegistrationModal({ isOpen, onClose, onSubmit }: RegistrationModalProps) {
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0])
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: countryCodes[0].code,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const phoneInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      setFormData({
        full_name: "",
        phone_number: selectedCountry.code,
      })
      setError(null)
    }
  }, [isOpen, selectedCountry])

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCountry = countryCodes.find((c) => c.code === e.target.value) || countryCodes[0]
    setSelectedCountry(newCountry)
    setFormData((prev) => ({
      ...prev,
      phone_number: newCountry.code,
    }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setError(null)

    if (name === "phone_number") {
      const numericValue = value.replace(/[^\d+]/g, "")

      if (numericValue.length > selectedCountry.length) {
        return
      }

      if (!numericValue.startsWith(selectedCountry.code)) {
        const newValue = selectedCountry.code + numericValue.replace(selectedCountry.code, "")
        if (newValue.length <= selectedCountry.length) {
          setFormData((prev) => ({ ...prev, [name]: newValue }))
        }
      } else {
        setFormData((prev) => ({ ...prev, [name]: numericValue }))
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, prefix: string) => {
    const input = e.currentTarget
    const selectionStart = input.selectionStart || 0

    if (e.key === "Backspace" && selectionStart <= prefix.length) {
      e.preventDefault()
      return
    }

    const allowedKeys = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
      "Enter",
      "Home",
      "End",
    ]

    if (!allowedKeys.includes(e.key) && !e.ctrlKey && !e.metaKey) {
      e.preventDefault()
    }

    if (e.key === "a" && e.ctrlKey) {
      e.preventDefault()
      setTimeout(() => {
        input.setSelectionRange(prefix.length, input.value.length)
      }, 0)
    }
  }

  const handleSelect = (e: React.SyntheticEvent<HTMLInputElement>, prefix: string) => {
    const input = e.currentTarget
    const selectionStart = input.selectionStart || 0
    if (selectionStart < prefix.length) {
      setTimeout(() => {
        input.setSelectionRange(prefix.length, input.selectionEnd || prefix.length)
      }, 0)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (formData.phone_number.length !== selectedCountry.length) {
      setError(`Telefon raqami noto'g'ri formatda. ${selectedCountry.code}XXXXXXXXX formatida kiriting.`)
      setLoading(false)
      return
    }

    const expectedDigits = selectedCountry.length - selectedCountry.code.length
    const phoneRegex = new RegExp(`^\\${selectedCountry.code}\\d{${expectedDigits}}$`)
    if (!phoneRegex.test(formData.phone_number)) {
      setError(`Telefon raqami noto'g'ri formatda. ${selectedCountry.code}XXXXXXXXX formatida kiriting.`)
      setLoading(false)
      return
    }

    if (!formData.full_name.trim()) {
      setError("Iltimos, ismingizni kiriting.")
      setLoading(false)
      return
    }

    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "https://orqa.imanakhmedovna.uz"

      console.log("Sending data to backend:", backendUrl, formData)

      const response = await fetch(`https://orqa.imanakhmedovna.uz/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          full_name: formData.full_name.trim(),
          phone_number: formData.phone_number,
          tg_user: "",
        }),
      })

      console.log("Response status:", response.status)

      if (!response.ok) {
        const errorText = await response.text()
        console.error("Server error response:", errorText)

        if (response.status === 400) {
          setError("Ma'lumotlar noto'g'ri formatda yuborildi. Iltimos, qaytadan urinib ko'ring.")
        } else if (response.status === 409) {
          setError("Bu telefon raqami allaqachon ro'yxatdan o'tgan.")
        } else if (response.status >= 500) {
          setError("Server xatoligi yuz berdi. Iltimos, keyinroq urinib ko'ring.")
        } else {
          setError("Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.")
        }
        setLoading(false)
        return
      }

      const result = await response.json()
      console.log("Success response:", result)

      onSubmit({
        full_name: formData.full_name,
        phone_number: formData.phone_number,
      })
    } catch (err) {
      console.error("Registration error:", err)
      setError("Internet aloqasi bilan bog'liq muammo. Iltimos, qaytadan urinib ko'ring.")
      setLoading(false)
    }
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const input = e.target
    setTimeout(() => {
      input.selectionStart = input.selectionEnd = input.value.length
    }, 0)
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedText = e.clipboardData.getData("text")
    const numericText = pastedText.replace(/[^\d+]/g, "")

    if (pastedText !== numericText) {
      e.preventDefault()
      const input = e.currentTarget
      const currentValue = input.value
      const selectionStart = input.selectionStart || 0
      const selectionEnd = input.selectionEnd || 0

      if (selectionStart < selectedCountry.code.length) {
        return
      }

      const newValue = currentValue.substring(0, selectionStart) + numericText + currentValue.substring(selectionEnd)

      setFormData((prev) => ({
        ...prev,
        phone_number: newValue,
      }))

      setTimeout(() => {
        input.selectionStart = input.selectionEnd = selectionStart + numericText.length
      }, 0)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative bg-[#041a2e] rounded-2xl p-8 max-w-md w-full mx-4 border border-[#4db5ff]/20 mt-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="absolute -top-16 left-0 right-0 bg-gradient-to-r from-[#041a2e] to-[#0a4a8c] text-white py-3 px-4 rounded-t-xl text-center font-bold text-lg shadow-lg transform transition-transform duration-500">
          Davom etish uchun ma'lumotlaringizni kiriting
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="full_name" className="text-white/80 text-sm flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2 text-[#4db5ff]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Ismingiz:
            </label>
            <input
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#0a2a4a]/60 border border-[#4db5ff]/20 rounded-lg focus:ring-2 focus:ring-[#4db5ff]/50 text-white placeholder-white/50"
              placeholder="Ismingizni kiriting"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone_number" className="text-white/80 text-sm flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2 text-[#4db5ff]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Telefon raqamingiz:
            </label>
            <div className="flex gap-2">
              <select
                id="country_code"
                value={selectedCountry.code}
                onChange={handleCountryChange}
                className="px-3 py-3 bg-[#0a2a4a]/60 border border-[#4db5ff]/20 rounded-lg focus:ring-2 focus:ring-[#4db5ff]/50 text-white text-sm min-w-[140px]"
              >
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code} className="bg-[#0a2a4a] text-white">
                    {country.country.split(" ")[0]} {country.code}
                  </option>
                ))}
              </select>
              <input
                id="phone_number"
                name="phone_number"
                ref={phoneInputRef}
                type="tel"
                inputMode="numeric"
                pattern="[+][0-9]*"
                maxLength={selectedCountry.length}
                value={formData.phone_number}
                onChange={handleChange}
                onKeyDown={(e) => handleKeyDown(e, selectedCountry.code)}
                onSelect={(e) => handleSelect(e, selectedCountry.code)}
                onFocus={handleFocus}
                onPaste={handlePaste}
                required
                className="flex-1 px-4 py-3 bg-[#0a2a4a]/60 border border-[#4db5ff]/20 rounded-lg focus:ring-2 focus:ring-[#4db5ff]/50 text-white placeholder-white/50"
                placeholder={`${selectedCountry.code} XX XXX XX XX`}
              />
            </div>
            <div className="text-xs text-white/60 text-right">
              {formData.phone_number.length}/{selectedCountry.length}
            </div>
          </div>

          <button type="submit" disabled={loading} className="relative w-full">
            <div className="relative bg-[#4db5ff] rounded-lg py-3 px-6 flex items-center justify-center">
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#041a2e]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span className="text-[#041a2e] font-bold">Yuborilmoqda...</span>
                </>
              ) : (
                <span className="text-[#041a2e] font-bold">Yopiq kanalga qo'shilish</span>
              )}
            </div>
          </button>
        </form>
      </div>
    </div>
  )
}
