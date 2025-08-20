"use client"

import LandingPage2 from "../components/landing-page-2"
import LandingPage1 from "../components/landing-page-3"
import dynamic from "next/dynamic"
import LandingPage3 from "../components/landing-page"

const LandingPageComponent = dynamic(() => import("../components/landing-page"), {
  ssr: false,
  loading: () => null,
})

export default function Page() {
  return (
    <div>
      <LandingPage3 />
    </div>
  )
}
