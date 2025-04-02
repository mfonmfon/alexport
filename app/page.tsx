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
import AlexHeroSectionBackgroundImage from "@/public/images/alexherosection.jpg"
import AlexAboutBackgroundImage from "@/public/images/SecondBackgroundImage.jpg"
import RootShivePortfolioImageBanckground from "/public/images/rootshive.jpg"
import MyChekkerPortfolioImageBanckground from "@/public/images/chekker.jpg"
import OwnNaijaPortfolioImageBanckground from "@/public/images/ownNaija.jpg"
import HomebasePortfolioImageBanckground from "@/public/images/homebase.jpg"
import AlumiumPortfolioImageBanckground from "@/public/images/alumini.jpg"

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
      <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={AlexAboutBackgroundImage}
            alt="Digital Creator"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ opacity, scale }}
          className="max-w-4xl mx-auto z-10 px-4 sm:px-6 lg:px-8"
        >
          <p className="text-primary font-medium mb-4 tracking-wide text-sm sm:text-base md:text-lg">
            DIGITAL CREATOR & DEVELOPER
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            Crafting Digital <br /> Experiences That <span className="text-primary">Inspire</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
            I create engaging digital solutions that connect brands with their audience and drive meaningful results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8 text-sm sm:text-base">
              View My Work
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-sm sm:text-base text-white border-white hover:bg-white/10">
              Contact Me
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ArrowDown className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Turning Ideas Into Digital Reality</h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                My name is Alexander Awharota Ogheneovo, I'm a Digital Creator  with a strong foundation in [ Copywriting , ConteReddit nt writing , technical writing,  design, social media management, storytelling , script writing and Sponsored ads]

                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  I'm dedicated to crafting compelling visuals with a vehement storytelling approach and user-centric designs that resonate with brands audience with proven measurable results.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-white">50+</h3>
                    <p className="text-gray-300">Projects Completed</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-white">30+</h3>
                    <p className="text-gray-300">Happy Clients</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-white">5+</h3>
                    <p className="text-gray-300">Years Experience</p>
                  </div>
                </div>
                
                <Button
                  className="rounded-full px-8"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/path-to-your-resume.pdf"; // Replace with the actual path to your resume file
                    link.download = "Resume.pdf"; // The name of the downloaded file
                    link.click();
                  }}
                >
                  Download Resume
                </Button>
              </div>
              
              <div className="relative">
                <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={AlexHeroSectionBackgroundImage }
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

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <p className="text-primary font-medium mb-2 tracking-wide">MY PORTFOLIO</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Projects</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore a selection of my recent work showcasing my expertise in design, development, and digital strategy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <ProjectCard
                title="Homebase"
                description="Homebase"
                category="Digital Creator"
                image={ HomebasePortfolioImageBanckground.src} //  use the `src` property of the imported image
                date="June 2023"
                client="TechVision Inc."
                tags={["Story Writing", "Copy writing", "Social Media Management"]}
                challenge="Crafted compelling visual content showcasing Homease's products and services, highlighting 
                their value proposition through storytelling and visual representation. ."
                solution=" Also Implemented 
                strategies to increase Homease's social media following and engagement, focusing on organic 
                growth and targeted content."
                technologies={["Story Writing", "Copy writing", "Social Media Management"]}
                projectUrl="#"
              />

              <ProjectCard
                title="OwnNaija"
                description="OwnNaija"
                category="Digital Creator"
                image={OwnNaijaPortfolioImageBanckground.src}
                date="April 2023"
                client="Fashion Forward"
                tags={["Story Writing", "Copy writing", "Social Media Management"]}
                challenge="Developed and executed a dynamic content calendar that boosted engagement and brand 
                awareness. This included creating visually appealing graphics, and engaging social media copy 
                tailored to Own9ja's target audience."
                solution="Also actively managed Own9ja's social media communities, responding to comments, DMs, and 
                fostering a positive online environment."
                technologies={["Social Media Manager", "Content Creator", "Content Strategist"]}
                projectUrl="#"
              />

              <ProjectCard
                title="Chekker"
                description="Chekker"
                category="Digital Creator"
                image={ MyChekkerPortfolioImageBanckground.src}
                date="March 2023"
                client="HealthTech"
                tags={["Social Media Manager", "Content Creation", "SEO"]}
                challenge="Developed and implemented strategies to enhance user engagement on Checker's digital 
                platforms, focusing on interactive content and community building that aligns with the health 
                sector."
                technologies={["Technical Writing ", "Content Strategy", "SEO"]}
                projectUrl="#"
              />
              <ProjectCard
                title="Rootshive"
                description="Rootshive"
                category="Digital Creator"
                image={RootShivePortfolioImageBanckground.src}
                date="February 2023"
                client="Fintech"
                tags={["Social Media Manager", "Content Creation", "SEO"]}
                challenge="Assisted in developing and refining Rootshive's digital brand identity, ensuring consistency 
                across all online platforms."
                solution="Also created content that fostered a sense of community among 
                Rootshive's target audience, encouraging interaction and participation."  
              />
              <ProjectCard
                title="Alumium"
                description="Alumium"
                category="Digital Creator"
                image={AlumiumPortfolioImageBanckground.src}
                date="January 2023"
                client="Innovate Products"
                challenge="Designed and executed digital campaigns to elevate Alumoni360's brand presence within the 
                Mineral technology sector. "
                solution="Also created informative and engaging content explaining smart 
                compliance in a clear and relatable manner, establishing Alumoni360 as a thought leader in its 
                industry."      
                tags={["Marketing", "Social Media", "Strategy"]}
              />
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <p className="text-white font-medium mb-2 tracking-wide">MY EXPERTISE</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Skills & Services</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                I offer a wide range of services to help businesses establish their digital presence and achieve their goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <SkillCard
                title="UI/UX Design"
              />
              <SkillCard
                title="Web Development"
              />
              <SkillCard
                title="Digital Strategy"
              />
              <SkillCard
                title="Brand Identity"
              />
              <SkillCard
                title="Mobile Development"
              />
              <SkillCard
                title="SEO Optimization"
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
                      <p className="text-gray-300">alexawharota723@gmail.com</p>
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
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-950 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">STUDIO<span className="text-primary">CRAFT</span></h3>
              <p className="text-gray-400 mb-4">
                Creating exceptional digital experiences that drive results and inspire audiences.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.597 0-2.917-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <span className="sr-only">Dribbble</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 01-1.727 3.884 8.508 8.508 0 01-5.586 2.274c-.595.061-1.128.138-1.621.221a18.633 18.633 0 00-2.23 1.054c-.652.341-1.153.85-1.42 1.506-.268.657-.063 1.133.22 1.401a8.451 8.451 0 011.119.584 a9.792 9.792 0 011.863.143 11.283 11.283 0 003.418-.582 8.514 8.514 0 004.782-2.352z" clipRule="evenodd" />
                  </svg>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  )
}

// export default Footer;

