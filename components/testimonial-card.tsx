"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  position: string
  company: string
}

export default function TestimonialCard({ quote, author, position, company }: TestimonialCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <Card className="border-0 shadow-md h-full bg-gray-800">
        <CardContent className="p-8 relative">
          <Quote className="h-10 w-10 text-primary/20 absolute top-6 right-6" />
          <p className="text-gray-300 mb-6 font-light italic leading-relaxed">"{quote}"</p>
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
              <span className="text-gray-500 font-bold text-lg">{author.charAt(0)}</span>
            </div>
            <div>
              <h4 className="font-semibold text-white">{author}</h4>
              <p className="text-sm text-gray-400">
                {position}, {company}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

