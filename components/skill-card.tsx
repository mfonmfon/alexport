"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface SkillCardProps {
  title: string
  // description: string
  // icon: ReactNode
  // proficiency?: number
}

export default function SkillCard({ title}: SkillCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
      <Card className="border-0 shadow-md h-full bg-gray-800">
        <CardContent className="p-6 flex flex-col items-center text-center">
          {/* <div className="mb-4 text-primary bg-primary/5 p-4 rounded-full">{icon}</div> */}
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          {/* <p className="text-gray-300 mb-4 text-sm">{description}</p> */}
          <div className="w-full mt-auto">
            <div className="flex justify-between text-sm mb-1">
              {/* <span className="font-medium text-gray-300">Proficiency</span> */}
              {/* <span className="text-primary font-semibold">{proficiency}%</span> */}
            </div>
            {/* <Progress value={proficiency} className="h-2" /> */}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

