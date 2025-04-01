"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Code, Mail, Palette, Lightbulb, Globe, PenTool, Smartphone, Database } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillCard from "@/components/skill-card"
import ContactForm from "@/components/contact-form"
import Navbar from "@/components/navbar"
import TestimonialCard from "@/components/testimonial-card"
import ProcessStepper from "@/components/process-stepper"
import AlexHeroSectionImage from "../public/images/alexherosection.jpg"
import Homebase from "../public/images/homebase.jpg"
import Alumini from "../public/images/alumini.jpg"
import Chekker from "../public/images/chekker.jpg"
import OwnNaija from "../public/images/ownNaija.jpg"
import RootshiveImage from "../public/images/rootshive.jpg"
import SecondBackgroundImage from "../public/images/SecondBackgroundImage.jpg"
export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])

  return (
    <div ref={ref} className="min-h-screen bg-black font-sans">
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center px-2 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={SecondBackgroundImage}
            alt="Digital Creator"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 0.3 }}
          style={{ opacity, scale }}
          className="max-w-4xl mx-auto z-10"
        >
          <p className="text-white font-medium mb-4 tracking-wide">I'M ALEX A DIGITAL CREATOR </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            Crafting Digital <br /> Experiences That <span className="text-primary">Inspire</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
            I create engaging digital solutions that connect brands with their audience and drive meaningful results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8 text-base">
              View My Work
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-base text-white border-white hover:bg-white/10">
              Contact Me
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ArrowDown className="h-8 w-8 text-white" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-medium mb-2 tracking-wide">ABOUT ME</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Alex Awharota Ogheneovo</h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  I'm a Digital Creator  with a strong foundation in [ Copywriting, ConteReddit nt writing, technical writing, design, social media management, storytelling, script writing and Sponsored ads].
                 I specialize in creating immersive digital experiences that help brands stand out in today's
                  competitive landscape.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                I'm dedicated to crafting compelling visuals with a vehement storytelling approach and user-centric designs that resonate with brands audience with proven measurable results.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-white">20+</h3>
                    <p className="text-gray-300">Projects Completed</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-white">20+</h3>
                    <p className="text-gray-300">Happy Clients</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-white">3+</h3>
                    <p className="text-gray-300">Years Experience</p>
                  </div>
                  {/* <div>
                    <h3 className="font-bold text-xl mb-2 text-white">15+</h3>
                    <p className="text-gray-300">Awards Received</p>
                  </div> */}
                </div>
                
                <Button className="rounded-full px-8">Download Resume</Button>
              </div>
              
              <div className="relative">
                <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={AlexHeroSectionImage}
                    alt="Portrait"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gray-800 p-6 rounded-lg shadow-xl">
                  <p className="font-bold text-lg mb-1 text-white">5+ Years Experience</p>
                  <p className="text-gray-300">In Digital Creation</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section with Stepper
      <section id="process" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <p className="text-primary font-medium mb-2 tracking-wide">MY PROCESS</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How I Work</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                I follow a structured approach to ensure every project is delivered on time, on budget, and exceeds expectations.
              </p>
            </div>
            
            <ProcessStepper />
          </motion.div>
        </div>
      </section> */}

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              {/* <p className="text-white font-medium mb-2 tracking-wide">MY PORTFOLIO</p> */}
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My Recent Projects</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore a selection of my recent work showcasing my expertise in design, development, and digital strategy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProjectCard
                title="Homebase"
                description="Homebase"
                category="Digital Creator"
                image= {Homebase}
                date="June2024 - Jan2025"
                client="Homebase"
                tags={["Branding", "Content Creation", "Digital Strategy"]}
                fullDescription=""
                challenge="Crafted compelling visual content showcasing Homease's products and services, highlighting 
their value proposition through storytelling and visual representation."
                solution="Also Implemented 
strategies to increase Homease's social media following and engagement, focusing on organic 
growth and targeted content."
                results="The rebrand was met with overwhelmingly positive feedback from clients and stakeholders. TechVision reported a 35% increase in brand recognition and a 20% improvement in lead generation within the first three months after launch."
                technologies={["Adobe Creative Suite", "Figma", "Brand Strategy", "Typography"]}
                projectUrl="#"
              />

              <ProjectCard
                title="Rootshive"
                description={`Business management Platform.`}
                category="Digital Creator"
                image={RootshiveImage}
                date="April 2024 Till Date"
                client="Fintech"
                tags={["Content Writer", "Social Media Manager", "Content Creator"]}
                fullDescription={`The Rootshive is a business management Platform.`}
                challenge={`Assisted in developing and refining Rootshive's digital brand identity, ensuring consistency 
                across all online platforms. Also created content that fostered a sense of community among 
                Rootshive's target audience, encouraging interaction and participation.`}
                // solution="We designed and developed a custom e-commerce platform with a focus on visual storytelling, intuitive navigation, and streamlined checkout process. The platform includes features like virtual try-on, personalized recommendations, and real-time inventory updates."
                // results="Since launch, Fashion Forward has seen a 45% increase in online sales, 30% reduction in cart abandonment, and significant improvement in customer satisfaction scores. The platform has successfully scaled to handle seasonal traffic spikes."
                technologies={["Content Creating ", "Content Writing", "Social Media Management", "SEO", "Branding"]}
                projectUrl="#"
              />

              <ProjectCard
                title="Chekker"
                description="HealthTech."
                category="Digital Creator"
                image={Chekker}
                date="April 2024 Till Date"
                client="HealthTech"
                tags={["Content Writing", "Social Media Management", "SEO"]}
                fullDescription="A comprehensive UI/UX design project for FitLife's fitness tracking mobile application. The project focused on creating an intuitive, engaging interface that would motivate users to achieve their fitness goals."
                challenge="Developed and implemented strategies to enhance user engagement on Checker's digital 
platforms, focusing on interactive content and community building that aligns with the health 
sector.."
                // solution="We created a clean, modern UI design with custom illustrations, intuitive navigation, and gamified elements to boost engagement. The design includes personalized dashboards, progress tracking visualizations, and social features to build community."
                results="User testing showed a 95% satisfaction rate with the new interface. After implementation, FitLife reported a 40% increase in daily active users and a 60% improvement in user retention compared to their previous app version."
                technologies={["Figma", "Prototyping", "User Testing", "Illustration", "Animation"]}
                projectUrl="#"
              />
              <ProjectCard
                title="OwnNaija"
                description="OwnNaija."
                category="Digital Creator"
                challenge="Developed and executed a dynamic content calendar that boosted engagement and brand 
                awareness. This included creating visually appealing graphics, and engaging social media copy 
                tailored to Own9ja's target audience."
                solution="Also actively managed Own9ja's social media communities, responding to comments, DMs, and 
                fostering a positive online environment."
                image={OwnNaija}
                date="February 2023"
                client="Capital Finance"
                tags={["Social Media Manager", "Content Creator", "SEO"]}
              />
              <ProjectCard
                title="Alumoni360"
                description="Alumoni360"
                category="Social Media Manager"
                challenge="Designed and executed digital campaigns to elevate Alumoni360's brand presence within the 
Mineral technology sector. "
                  solution="Also created informative and engaging content explaining smart 
compliance in a clear and relatable manner, establishing Alumoni360 as a thought leader in its 
industry."
                image={Alumini}
                date="January 2023"
                client="Innovate Products"
                tags={["Marketing", "Social Media", "Strategy"]}
              />
              {/* <ProjectCard
                title="Interactive Dashboard"
                description="Data visualization dashboard with real-time analytics, custom charts, and user-friendly interface."
                category="Digital Creator"
                image={OwnNaija}
                date="December 2022"
                client="Data Insights"
                tags={["Dashboard", "Data Viz", "Frontend"]}
              /> */}
            </div>
            
            <div className="text-center mt-16">
              <Button variant="outline" size="lg" className="rounded-full px-8">
                View All Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <p className="text-primary font-medium mb-2 tracking-wide">MY EXPERTISE</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Skills & Services</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                I offer a wide range of services to help businesses establish their digital presence and achieve their goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SkillCard
                title="Content Creation"
                // icon={<Palette className="h-8 w-8" />}
                // proficiency={95}
              />
              <SkillCard
                title="Copywriting"
                // icon={<Code className="h-8 w-8" />}
                // proficiency={90}
              />
              <SkillCard
                title="Digital Strategies"
                // icon={<Lightbulb className="h-8 w-8" />}
                // proficiency={85}
              />
              <SkillCard
                title="Brand Identity"
                // description="Crafting unique and memorable brand identities that resonate with target audiences and stand out in the market."
                // icon={<PenTool className="h-8 w-8" />}
                // proficiency={88}
              />
              <SkillCard
                title="Mobile Development"
                // description="Creating native and cross-platform mobile applications with intuitive interfaces and smooth performance."
                // icon={<Smartphone className="h-8 w-8" />}
                // proficiency={82}
              />
              <SkillCard
                title="SEO Optimization"
                // description="Improving website visibility and search engine rankings to drive organic traffic and increase conversions."
                // icon={<Globe className="h-8 w-8" />}
                // proficiency={80}
              />
            </div>
          </motion.div>
        </div>
      </section>

     

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p className="text-primary font-medium mb-2 tracking-wide">GET IN TOUCH</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Let's Work Together</h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Have a project in mind or want to discuss how I can help your business? I'm just a message away.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 text-white">Email</h3>
                      <p className="text-gray-300">hello@studiocraftdigital.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 text-white">Website</h3>
                      <p className="text-gray-300">www.studiocraftdigital.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 text-white">Social Media</h3>
                      <div className="flex space-x-4 mt-2">
                        <Link href="#" className="text-gray-300 hover:text-primary transition-colors">Twitter</Link>
                        <Link href="#" className="text-gray-300 hover:text-primary transition-colors">Instagram</Link>
                        <Link href="#" className="text-gray-300 hover:text-primary transition-colors">LinkedIn</Link>
                        <Link href="#" className="text-gray-300 hover:text-primary transition-colors">Dribbble</Link>
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
              </div>
              
              
              <div>
                <ContactForm />
              </div>
            </div>
          </motion.div>
        </div>
        <div>
                  
        <footer className="py-12 bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              STUDIO<span className="text-primary">CRAFT</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Creating exceptional digital experiences that drive results and inspire audiences.
            </p>
            <div className="flex space-x-4">
              {/* Twitter Link */}
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              {/* Instagram Link */}
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
        </div>
        
      </section>
      
      
      </div>
    
  
)
}
 
