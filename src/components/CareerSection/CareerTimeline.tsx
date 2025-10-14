import { ScrollTimeline } from "../lightswind/scroll-timeline"
import { Briefcase, Award, Layers, Users, Globe } from "lucide-react"

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "2022 – Present",
      title: "Technical leader, Front-end Developer",
      subtitle: "Saigontoyo JSC",
      description:
        "Created and maintained base front-end projects using React.js and Next.js, serving as a foundation for new web applications across various teams.\n\n Developed and optimized the front-end architecture by establishing core components, routing, and state management patterns that are reusable across multiple projects.\n\n Enhanced performance of the base front-end projects by implementing best practices such as code splitting, lazy loading, and asset optimization, improving page speed by 30%.\n\n Integrated RESTful APIs into the base project, utilizing Redux and Context API for efficient state management and data flow.\n\n Led the development of a library of reusable components within the base project, enabling faster feature development and consistent UI across applications.\n\n Conducted code reviews for all projects derived from the base front-end template, ensuring adherence to coding standards and best practices.\n\n Worked in an Agile environment, playing a key role in sprint planning, stand-ups, and retrospectives to ensure smooth project execution and delivery.",
      icon: <Award className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2021 – 2022",
      title: "Front-end Developer",
      subtitle: "YUGO Vietnam Company Limited",
      description:
        "Developed and optimized base front-end project templates using React.js and Next.js, providing a scalable and maintainable foundation for multiple web applications across the organization.\n\n Collaborated with cross-functional teams, including UX/UI designers and back-end developers, to ensure seamless integration and consistency across all projects built on the base template.\n\n Enhanced performance of web applications by implementing lazy loading, code splitting, and optimizing assets, resulting in a 30% increase in page speed. \n\n Integrated RESTful APIs to manage data fetching and state management, utilizing Redux and Context API for efficient state handling.\n\n Led the development of key features for a customer-facing dashboard, improving user interaction.\n\n Conducted code reviews and provided mentorship to junior developers, ensuring adherence to best practices and maintaining high code quality.\n\n Worked in an Agile environment, actively participating in sprint planning, daily stand-ups, and retrospectives to ensure project milestones were met on time.",
      icon: <Award className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2018 – 2021",
      title: "Frontend Developer",
      subtitle: "BPOTech JSC",
      description:
        "Created and maintained base front-end projects using React.js and Next.js, serving as a foundation for new web applications across various teams, resulting in a 40% reduction in setup time for development.\n\n Assisted in the migration of legacy websites to modern JavaScript frameworks, improving site performance and user experience.\n\n Worked closely with design teams to implement pixel-perfect layouts and interactive components, enhancing client satisfaction.\n\n Participated in Agile development processes, contributing to sprint planning and daily stand-ups to ensure timely delivery of projects.",
      icon: <Users className="h-4 w-4 mr-2 text-primary" />,
    },
  ]

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Career Journey"
        subtitle="An evolving path of leadership, innovation, and impact"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  )
}
