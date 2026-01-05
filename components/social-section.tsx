"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "./ui/button-group"

const certificates = [
  { id: "CERT-001", name: "Lorenzo Piloto", achievement: "Web Development Mastery", date: "Jan 2024", color: "from-white to-gray-50" },
  { id: "CERT-002", name: "Lorenzo Piloto", achievement: "UI/UX Design Excellence", date: "Feb 2024", color: "from-white to-slate-50" },
  { id: "CERT-003", name: "Lorenzo Piloto", achievement: "Full Stack Developer", date: "Mar 2024", color: "from-gray-50 to-white" },
  { id: "CERT-004", name: "Lorenzo Piloto", achievement: "Creative Innovation Award", date: "Apr 2024", color: "from-slate-50 to-gray-50" },
  { id: "CERT-005", name: "Lorenzo Piloto", achievement: "Digital Marketing Pro", date: "May 2024", color: "from-white to-neutral-50" },
  { id: "CERT-006", name: "Lorenzo Piloto", achievement: "React Expert Certification", date: "Jun 2024", color: "from-neutral-50 to-white" },
  { id: "CERT-007", name: "Lorenzo Piloto", achievement: "Brand Strategy Master", date: "Jul 2024", color: "from-gray-50 to-slate-50" },
]

const handIcons = [
  "/images/icon/icon-hand1.png",
  "/images/icon/icon-hand2.png",
  "/images/icon/icon-hand3.png",
  "/images/icon/icon-hand4.png",
  "/images/icon/icon-hand5.png",
  "/images/icon/icon-hand6.png",
]

export default function SocialSection() {
  const [currentIconIndex, setCurrentIconIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prev) => (prev + 1) % handIcons.length)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="social-section" className="relative bg-[#F5F1E8] text-black py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative h-32 flex items-center justify-center mt-16">
          {/* Replaced static image with animated icon switcher */}
          <div className="relative h-full w-auto max-h-[60px] aspect-square">
            {handIcons.map((icon, index) => (
              <div
                key={icon}
                className={`absolute inset-0 transition-opacity duration-0 ${
                  index === currentIconIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={icon || "/placeholder.svg"}
                  className="h-full w-full object-contain"
                  alt="Animated hand icon"
                />
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-2.5"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none leading-[2.25] text-lorenzo-dark lg:text-6xl">
            WHAT'S UP
          </h2>
          <h3 className="text-4xl md:text-6xl font-brier mt-2 lg:text-6xl leading-10 text-lorenzo-dark">ON VAULT</h3>
        </motion.div>
        <div className="flex pt-10 justify-center items-center">
        <ButtonGroup className="flex pt-6 justify-center items-center">
            <Button className="justify-center items-center">Get Started</Button> 
        </ButtonGroup>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative h-[600px] md:h-[700px] mb-16 flex items-center justify-center"
        >
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotate: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                rotate: (i - 3) * 6,
                scale: 1 - Math.abs(i - 3) * 0.02,
                x: (i - 3) * 90,
                y: Math.abs(i - 3) * 35,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2 + i * 0.1,
                type: "spring",
                stiffness: 60,
                damping: 12,
              }}
              viewport={{ once: true }}
              whileHover={{
                rotate: 0,
                scale: 1.1,
                zIndex: 20,
                y: -40,
                transition: { duration: 0.3 },
              }}
              className="absolute w-60 md:w-80 h-80 md:h-[480px] bg-[#F5F1E8] rounded-3xl shadow-2xl overflow-hidden cursor-pointer origin-bottom border-2 border-gray-300"
              style={{ zIndex: 10 - Math.abs(i - 3) }}
            >
              <div className={`relative w-full h-full ${cert.color} p-8 flex flex-col justify-between`}>
                {/* Decorative border */}
                <div className="absolute inset-4 border-2 border-black/20 rounded-2xl"></div>
                
                {/* Top ornament */}
                <div className="relative z-10 text-center">
                  <div className="inline-block bg-black/5 px-6 py-2 rounded-full border-2 border-black/15">
                    <p className="text-black text-sm font-bold tracking-wider">{cert.id}</p>
                  </div>
                </div>

                {/* Certificate content */}
                <div className="relative z-10 text-center space-y-4">
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto bg-black/5 rounded-full flex items-center justify-center border-2 border-black/15">
                      <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                    Certificate
                  </h3>
                  <div className="h-px w-24 mx-auto bg-black/30"></div>
                  <p className="text-black/70 text-sm uppercase tracking-widest">of Achievement</p>
                  
                  <div className="py-4">
                    <p className="text-black text-lg md:text-xl font-bold mb-2">{cert.name}</p>
                    <p className="text-black/80 text-base md:text-lg font-medium px-4">
                      {cert.achievement}
                    </p>
                  </div>
                </div>

                {/* Bottom section */}
                <div className="relative z-10 flex justify-between items-end text-black/70 text-xs md:text-sm">
                  <div>
                    <p className="font-semibold">Date Issued</p>
                    <p>{cert.date}</p>
                  </div>
                  <div className="text-right">
                    <div className="w-24 h-px bg-black/30 mb-1"></div>
                    <p className="text-xs">Authorized Signature</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
        </motion.div>
      </div>
    </section>
  )
}