"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const users = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Software Engineer",
    company: "Tech Corp",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=800&fit=crop&q=90",
  },
  {
    id: 2,
    name: "Arjun Patel",
    role: "Cloud Architect",
    company: "AWS Solutions",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=800&fit=crop&q=90",
  },
  {
    id: 3,
    name: "Ananya Reddy",
    role: "Data Scientist",
    company: "DataLabs",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop&q=90",
  },
  {
    id: 4,
    name: "Rohan Kumar",
    role: "DevOps Engineer",
    company: "CloudOps",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop&q=90",
  },
  {
    id: 5,
    name: "Kavya Iyer",
    role: "Security Specialist",
    company: "CyberSafe",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=800&fit=crop&q=90",
  },
  {
    id: 6,
    name: "Aditya Singh",
    role: "ML Engineer",
    company: "AI Innovations",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&q=90",
  },
  {
    id: 7,
    name: "Sneha Gupta",
    role: "Platform Engineer",
    company: "Container Co",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=800&fit=crop&q=90",
  },
  {
    id: 8,
    name: "Vikram Malhotra",
    role: "Frontend Lead",
    company: "WebDev Pro",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&q=90",
  },
  {
    id: 9,
    name: "Ishita Joshi",
    role: "AI Researcher",
    company: "DeepMind Labs",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=800&fit=crop&q=90",
  },
  {
    id: 10,
    name: "Karan Mehta",
    role: "System Architect",
    company: "Enterprise Systems",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=800&fit=crop&q=90",
  },
  {
    id: 11,
    name: "Neha Kapoor",
    role: "Backend Developer",
    company: "API Masters",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=800&fit=crop&q=90",
  },
  {
    id: 12,
    name: "Siddharth Verma",
    role: "Performance Engineer",
    company: "SpeedTech",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&h=800&fit=crop&q=90",
  },
  {
    id: 13,
    name: "Divya Nair",
    role: "Database Admin",
    company: "DataVault Inc",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=800&fit=crop&q=90",
  },
  {
    id: 14,
    name: "Rahul Desai",
    role: "API Developer",
    company: "REST Solutions",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&h=800&fit=crop&q=90",
  },
  {
    id: 15,
    name: "Pooja Agarwal",
    role: "QA Engineer",
    company: "TestLabs",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&h=800&fit=crop&q=90",
  },
  {
    id: 16,
    name: "Amit Bhatia",
    role: "Solutions Architect",
    company: "MicroServe",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=800&fit=crop&q=90",
  },
  {
    id: 17,
    name: "Riya Chopra",
    role: "DevOps Lead",
    company: "CI/CD Systems",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=800&fit=crop&q=90",
  },
  {
    id: 18,
    name: "Akash Rao",
    role: "Scrum Master",
    company: "Agile Corp",
    avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&h=800&fit=crop&q=90",
  },
  {
    id: 19,
    name: "Shreya Das",
    role: "Full Stack Dev",
    company: "WebStack Pro",
    avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&h=800&fit=crop&q=90",
  },
  {
    id: 20,
    name: "Varun Shah",
    role: "Startup CTO",
    company: "InnovateTech",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop&q=90",
  },
]

export default function UserVault() {
  const [hoveredUser, setHoveredUser] = useState<number | null>(null)

  return (
    <section id="vault" className="relative min-h-screen text-white py-24 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight">
            <br />
            <span className="font-brier text-8xl">VAULT</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {users.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.03, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredUser(user.id)}
              onMouseLeave={() => setHoveredUser(null)}
              style={{
                gridRow: index % 4 === 1 ? "span 1" : "auto",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square overflow-hidden rounded-2xl  
                           transition-all duration-300"
              >
                <div className="absolute inset-0">
                  <Image
                    src={user.avatar || "/placeholder.svg"}
                    alt={user.name}
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <p className="text-sm md:text-base font-bold text-white transition-colors duration-300">
                    {user.name}
                  </p>
                  <p className="text-xs md:text-sm text-white/70 group-hover:text-white/90 mt-1">
                    {user.role}
                  </p>
                  <p className="text-xs group-hover:scale-105 transition-all duration-300 inline-block mt-1">
                    {user.company}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}