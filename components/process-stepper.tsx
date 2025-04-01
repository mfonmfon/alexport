"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Lightbulb, Palette, Code, Rocket, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Step {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

export default function ProcessStepper() {
  const [activeStep, setActiveStep] = useState(1)

  const steps: Step[] = [
    {
      id: 1,
      title: "Discovery",
      description: "Understanding your goals, audience, and requirements through in-depth consultation.",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      id: 2,
      title: "Design",
      description: "Creating wireframes and visual designs that align with your brand and objectives.",
      icon: <Palette className="h-6 w-6" />,
    },
    {
      id: 3,
      title: "Development",
      description: "Building your solution with clean code and attention to performance and accessibility.",
      icon: <Code className="h-6 w-6" />,
    },
    {
      id: 4,
      title: "Delivery",
      description: "Launching your project with thorough testing and ongoing support to ensure success.",
      icon: <Rocket className="h-6 w-6" />,
    },
  ]

  return (
    <div className="w-full">
      {/* Desktop Stepper (Horizontal) */}
      <div className="hidden md:block">
        <div className="flex items-start justify-between">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={cn(
                "relative flex flex-col items-center w-full",
                index === steps.length - 1
                  ? ""
                  : "after:content-[''] after:absolute after:top-7 after:w-full after:h-0.5 after:bg-gray-700 after:left-1/2",
              )}
            >
              <button
                onClick={() => setActiveStep(step.id)}
                className={cn(
                  "relative z-10 flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300",
                  activeStep >= step.id ? "bg-primary text-white" : "bg-gray-800 text-gray-400",
                )}
              >
                {activeStep > step.id ? <Check className="h-6 w-6" /> : step.icon}
              </button>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: activeStep === step.id ? 1 : 0.7,
                  y: activeStep === step.id ? 0 : 5,
                }}
                transition={{ duration: 0.3 }}
                className={cn("mt-4 text-center max-w-[200px]", activeStep === step.id ? "scale-105" : "scale-100")}
              >
                <h3 className={cn("font-bold text-lg mb-1", activeStep === step.id ? "text-primary" : "text-gray-300")}>
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400">{step.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Stepper (Vertical) */}
      <div className="md:hidden">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={cn(
              "relative",
              index !== steps.length - 1
                ? "pb-8 before:content-[''] before:absolute before:left-7 before:top-14 before:h-full before:w-0.5 before:bg-gray-700"
                : "",
            )}
          >
            <div className="flex items-start">
              <button
                onClick={() => setActiveStep(step.id)}
                className={cn(
                  "relative z-10 flex items-center justify-center w-14 h-14 rounded-full mr-4 transition-all duration-300",
                  activeStep >= step.id ? "bg-primary text-white" : "bg-gray-100 text-gray-400",
                )}
              >
                {activeStep > step.id ? <Check className="h-6 w-6" /> : step.icon}
              </button>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: activeStep === step.id ? 1 : 0.7,
                  x: activeStep === step.id ? 0 : -5,
                }}
                transition={{ duration: 0.3 }}
                className="pt-2"
              >
                <h3 className={cn("font-bold text-lg mb-1", activeStep === step.id ? "text-primary" : "text-gray-700")}>
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-12 space-x-4">
        <button
          onClick={() => setActiveStep((prev) => Math.max(prev - 1, 1))}
          disabled={activeStep === 1}
          className="px-4 py-2 border border-gray-600 rounded-md disabled:opacity-50 disabled:cursor-not-allowed text-white"
        >
          Previous
        </button>
        <button
          onClick={() => setActiveStep((prev) => Math.min(prev + 1, steps.length))}
          disabled={activeStep === steps.length}
          className="px-4 py-2 bg-primary text-white rounded-md flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

