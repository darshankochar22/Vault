"use client"

import { useEffect, useRef, useState } from "react"
import { useScroll, useTransform, useInView } from "framer-motion"

export default function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [signatureDrawn, setSignatureDrawn] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.6], [1.2, 1, 0.2])
  const imageY = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 0, -200])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6], [0, 1, 1, 0])

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setSignatureDrawn(true), 800)
    }
  }, [isInView])

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const sectionHeight = rect.height
        const scrolled = -rect.top
        const progress = Math.min(Math.max(scrolled / sectionHeight, 0), 1)
        setScrollProgress(progress)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getTextTransform = () => {
    if (scrollProgress < 0.2) {
      const progress = scrollProgress / 0.2
      return {
        opacity: progress,
        transform: `translateX(${(1 - progress) * -50}px)`,
      }
    }
    return {
      opacity: 1,
      transform: "translateX(0px)",
    }
  }

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen bg-black py-24 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-balance leading-[1.1] xl:text-8xl text-white">
            <span className="font-brier leading-[1.1] text-8xl">COLLECT</span> ACHIEVEMENTS,
            <br />
            <span className="font-brier leading-[1.1]">SHOWCASE</span> EXCELLENCE,
            <br />
            PRESERVE YOUR
            <br />
            PROFESSIONAL <span className="font-brier leading-[1.1]">LEGACY</span>
            <br />
            IN YOUR DIGITAL
            <br />
            CERTIFICATE <span className="font-brier leading-[1.1]">VAULT</span>
          </h2>
        </div>
      </div>
    </section>
  )
}