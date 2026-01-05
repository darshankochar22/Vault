"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

const galleryImages = [
  {
    src: "https://i.etsystatic.com/11323145/r/il/b42ba8/1468518084/il_fullxfull.1468518084_fufo.jpg",
    alt: "Professional Development Certificate",
    aspect: "aspect-[4/3]",
    title: "Cloud Computing",
  },
  {
    src: "data:image/jpeg;base64,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",
    alt: "Technical Certification",
    aspect: "aspect-[3/4]",
    title: "Full Stack Development",
  },
  {
    src: "data:image/jpeg;base64,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",
    alt: "Achievement Certificate",
    aspect: "aspect-[4/3]",
    title: "Data Science",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXIpMJCWjTIEnntbzCTrX2jz2WS0CXR1Kb-NX8q5MlkRSR-ozrWKeotpR3v5W2f--Qi0M&usqp=CAU",
    alt: "Training Certificate",
    aspect: "aspect-[3/4]",
    title: "Machine Learning",
  },
  {
    src: "https://img.freepik.com/free-psd/elegant-certificate-template-with-vintage-floral-ornaments_69286-525.jpg?semt=ais_hybrid&w=740&q=80",
    alt: "Completion Certificate",
    aspect: "aspect-[4/3]",
    title: "Cybersecurity",
  },
  {
    src: "https://i.pinimg.com/736x/ef/8b/6b/ef8b6b6d6658d65d16381db333a2788b.jpg",
    alt: "Excellence Certificate",
    aspect: "aspect-[3/4]",
    title: "Project Management",
  },
  {
    src: "https://static.vecteezy.com/system/resources/thumbnails/008/089/253/small/certificate-gold-appreciation-achievement-template-award-achievement-clean-creative-certificate-recognition-excellence-certificate-border-completion-template-certificate-design-template-vector.jpg",
    alt: "Professional Certificate",
    aspect: "aspect-[4/3]",
    title: "UI/UX Design",
  },
  {
    src: "https://en.pimg.jp/043/723/888/1/43723888.jpg",
    alt: "Achievement Award",
    aspect: "aspect-[3/4]",
    title: "DevOps Engineering",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ5qizl7DucEloXEDq0oIUiPM8Dow_ZijULQ&s",
    alt: "Mastery Certificate",
    aspect: "aspect-[4/3]",
    title: "Blockchain Technology",
  },
  {
    src: "https://img.freepik.com/free-psd/elegant-certificate-template-with-abstract-gradient-waves_69286-537.jpg?semt=ais_hybrid&w=740&q=80",
    alt: "Completion Award",
    aspect: "aspect-[3/4]",
    title: "Mobile Development",
  },
  {
    src: "https://img.freepik.com/premium-vector/certificate-diploma-vintage-retro-template_217752-629.jpg",
    alt: "Recognition Certificate",
    aspect: "aspect-[4/3]",
    title: "Database Management",
  },
  {
    src: "https://i.pinimg.com/474x/62/ab/89/62ab8965705a5800b95b761da5111a10.jpg",
    alt: "Training Completion",
    aspect: "aspect-[3/4]",
    title: "API Development",
  },
]
export default function MasonryGallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  // Background transition: Dark Green -> Dark Green -> White
  const backgroundColor = useTransform(scrollYProgress, [0, 0.6, 0.9], ["#000000", "#ccc", "#ffffff"])

  // Y Movement: Move grid up to reveal all images
  // Starts at 0vh and moves up to -150vh to show bottom images
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "-150vh"])

  const column1 = galleryImages.filter((_, i) => i % 3 === 0)
  const column2 = galleryImages.filter((_, i) => i % 3 === 1)
  const column3 = galleryImages.filter((_, i) => i % 3 === 2)

  return (
    <section
      ref={sectionRef}
      id="masonry-gallery"
      className="relative"
      style={{
        height: "400vh",
      }}
    >
      <motion.div className="sticky top-0 h-screen w-full overflow-hidden" style={{ backgroundColor }}>
        <motion.div style={{ y }} className="relative w-full max-w-[1400px] mx-auto px-4 md:px-8 py-20">
          <div className="flex flex-col md:flex-row gap-8 w-full">
            {/* Column 1 */}
            <div className="flex flex-col gap-8 w-full md:w-1/3">
              {column1.map((image, index) => (
                <MasonryCard key={`col1-${index}`} image={image} index={index * 3} />
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-8 w-full md:w-1/3">
              {column2.map((image, index) => (
                <MasonryCard key={`col2-${index}`} image={image} index={index * 3 + 1} />
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-8 w-full md:w-1/3">
              {column3.map((image, index) => (
                <MasonryCard key={`col3-${index}`} image={image} index={index * 3 + 2} />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function MasonryCard({ image, index }: { image: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative overflow-hidden rounded-xl shadow-2xl transition-all duration-500 bg-gray-900/20 border-2 border-transparent w-full ${image.aspect}`}
    >
      <Image
        src={image.src || "/placeholder.svg"}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-700"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={95}
      />
    </motion.div>
  )
}
