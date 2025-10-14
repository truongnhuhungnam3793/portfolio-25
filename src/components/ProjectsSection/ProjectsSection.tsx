"use client"

import { useState } from "react"
import { DragOrderList } from "../lightswind/DragOrderList"
import { motion } from "framer-motion"

export const ProjectsSection = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Ai Resume Analyzer",
      subtitle:
        "Analyze your resume and get a score of your skills and experience.",
      date: "2024",
      link: "https://ai-resume-analyzer-murex-five.vercel.app/",
      image: "/project-1.png",
    },
    {
      id: 2,
      title: "Countries Information",
      subtitle: "Get information about countries around the world.",
      date: "2023",
      link: "https://countries-app-inky.vercel.app/",
      image: "/project-2.png",
    },
    {
      id: 3,
      title: "AI Image Editor",
      subtitle: "Edit your images with AI.",
      date: "2022",
      link: "https://ai-image-editor-saas-virid.vercel.app/",
      image: "/project-3.png",
    },
    {
      id: 4,
      title: "Gaming Landing Page",
      subtitle: "A gaming landing page with a modern design.",
      date: "2021",
      link: "https://awwwards-liard.vercel.app/",
      image: "/project-4.png",
    },
  ])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ when: "beforeChildren", staggerChildren: 0.1 }}
    >
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.h2
          className="text-3xl font-bold text-foreground mb-8 text-center"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Projects
        </motion.h2>
        <DragOrderList items={projects} />
      </section>
    </motion.div>
  )
}
