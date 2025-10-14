import { Separator } from "../lightswind/separator"
import { motion } from "framer-motion"

export const AboutSection = () => {
  return (
    <motion.div
      id="about"
      className="text-foreground max-w-7xl mx-auto w-full px-6 py-12 space-y-4"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="text-muted-foreground text-sm max-w-3xl">
        As a Frontend Web Developer with over 7 years of experience, I have
        strong skills in frontend web development using technologies such as
        ReactJS, Next.js, JavaScript, TypeScript, CSS3, HTML5, and Tailwindcss.
        I am also familiar with content management systems (CMS) like WordPress,
        Ec-cube, and Shopify. I am capable of working independently or
        collaborating with team members, and I can manage project requirements
        analysis.
      </p>
      <Separator />
    </motion.div>
  )
}
