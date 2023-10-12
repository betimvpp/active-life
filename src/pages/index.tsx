"use client"

import AllBodyParts from "@/Components/HomeComponents/AllBodyParts"
import { CenterContainer } from "@/Components/HomeComponents/CenterContainer"
import { HeroContainer } from "@/Components/HomeComponents/HeroContainer"
import { JoinUsBar } from "@/Components/HomeComponents/JoinUsBar"
import { Pricing } from "@/Components/HomeComponents/Pricing"
import { Footer } from "@/Components/LayoutComponents/Footer"
import { Header } from "@/Components/LayoutComponents/Header"

export default function Home() {

  return (
    <>
    <main className="w-screen h-screen overflow-x-hidden">
    <Header />
      <CenterContainer />
      <AllBodyParts />
      <HeroContainer />
      <JoinUsBar />
      <Pricing />  
      <Footer />
    </main>
    </>
  )
}
