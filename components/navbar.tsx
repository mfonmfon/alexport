"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    // Set up intersection observer to detect which section is in view
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => {
      observer.observe(section)
    })

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-gray-900/95 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            href="#home"
            className="text-xl font-bold tracking-tight"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("home")
            }}
          >
            <span className={cn("transition-colors", isScrolled ? "text-white" : "text-white")}>
              ALEX<span className="text-white">PORT</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
                className={cn(
                  "text-sm font-medium transition-colors relative py-1",
                  activeSection === item.id
                    ? "text-primary"
                    : isScrolled
                      ? "text-gray-300 hover:text-primary"
                      : "text-white hover:text-primary",
                  activeSection === item.id &&
                    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary",
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button size="sm" className="rounded-full px-6" onClick={() => scrollToSection("contact")}>
              Hire Me
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? (
              <X className={cn("h-6 w-6", isScrolled ? "text-white" : "text-white")} />
            ) : (
              <Menu className={cn("h-6 w-6", isScrolled ? "text-white" : "text-white")} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                  className={cn(
                    "font-medium py-2 transition-colors",
                    activeSection === item.id ? "text-primary" : "text-gray-300",
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button size="sm" className="rounded-full px-6 w-full mt-2" onClick={() => scrollToSection("contact")}>
                Hire Me
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

