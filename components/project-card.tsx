"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, Calendar, User2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useModal } from "@/contexts/modal-context"
import ProjectDetail from "@/components/project-detail"

interface ProjectCardProps {
  title: string
  description: string
  category: string
  image: string
  date?: string
  client?: string
  tags?: string[]
  fullDescription?: string
  challenge?: string
  solution?: string
  results?: string
  technologies?: string[]
  projectUrl?: string
}

export default function ProjectCard({
  title,
  description,
  category,
  image,
  date = "2023",
  client = "Client Name",
  tags = ["Design", "Development"],
  fullDescription,
  challenge,
  solution,
  results,
  technologies,
  projectUrl,
}: ProjectCardProps) {
  const { openModal } = useModal()

  const handleViewProject = () => {
    openModal({
      title: "Project Details",
      content: (
        <ProjectDetail
          title={title}
          description={description}
          category={category}
          image={image}
          date={date}
          client={client}
          tags={tags}
          fullDescription={fullDescription}
          challenge={challenge}
          solution={solution}
          results={results}
          technologies={technologies}
          projectUrl={projectUrl}
        />
      ),
      size: "lg",
    })
  }

  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
      <Card
        className="overflow-hidden border-0 shadow-xl group h-full bg-gray-800 cursor-pointer"
        onClick={handleViewProject}
      >
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-sm px-3 py-1 text-sm font-medium rounded-full">
            {category}
          </div>
        </div>
        <CardContent className="p-6 flex flex-col">
          <div className="flex justify-between items-center mb-3 text-xs text-gray-400">
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <User2 className="h-3 w-3 mr-1" />
              <span>{client}</span>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-white">{title}</h3>
          <p className="text-gray-300 mb-4 text-sm leading-relaxed">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="font-normal text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center text-sm font-medium text-primary mt-auto group-hover:translate-x-1 transition-transform">
            <span>View Project</span>
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

