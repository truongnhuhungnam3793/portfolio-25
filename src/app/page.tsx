import Hero from "@/components/hero"
import About from "@/components/about"
import Header from "@/components/header"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <div className="h-[1234px]"></div>
    </>
  )
}
