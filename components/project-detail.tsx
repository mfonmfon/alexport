"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, User2, Tag } from "lucide-react"

interface ProjectDetailProps {
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

export default function ProjectDetail({
  title,
  description,
  category,
  image,
  date = "2023",
  client = "Client Name",
  tags = ["Design", "Development"],
  fullDescription = "This is a detailed description of the project that explains the scope and objectives in more detail.",
  challenge = "The client needed a modern digital solution that would help them stand out in a competitive market while improving user engagement and conversion rates.",
  solution = "We developed a comprehensive strategy and implemented a custom solution that addressed all the client's requirements while adding innovative features to enhance the user experience.",
  results = "The project resulted in a 40% increase in user engagement, 25% improvement in conversion rates, and significant positive feedback from users and stakeholders.",
  technologies = ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  projectUrl = "#",
}: ProjectDetailProps) {
  return (
    <div className="text-white overflow-y-auto max-h-[80vh]">
      <div className="relative h-[300px] w-full mb-6 rounded-lg overflow-hidden">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-sm px-3 py-1 text-sm font-medium rounded-full">
          {category}
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-300 mb-4">{description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm text-gray-300">
                <span className="font-medium text-white">Date:</span> {date}
              </span>
            </div>
            <div className="flex items-center">
              <User2 className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm text-gray-300">
                <span className="font-medium text-white">Client:</span> {client}
              </span>
            </div>
            <div className="flex items-center col-span-2">
              <Tag className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm text-gray-300">
                <span className="font-medium text-white">Technologies:</span> {technologies.join(", ")}
              </span>
            </div>
          </div>
        </div>

        {/* <div>
          <h3 className="text-lg font-semibold mb-2 text-primary">Project R</h3>
          <p className="text-gray-300 mb-4">{fullDescription}</p>
        </div> */}

        <div>
          <h3 className="text-lg font-semibold mb-2 text-primary">What I Did</h3>
          <p className="text-gray-300 mb-4">{challenge}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-primary"></h3>
          <p className="text-gray-300 mb-4">{solution}</p>
        </div>

        {/* <div>
          <h3 className="text-lg font-semibold mb-2 text-primary">Results</h3>
          <p className="text-gray-300 mb-4">{results}</p>
        </div> */}

        <div className="pt-4">
          <Button className="w-full flex items-center justify-center" asChild>
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              Visit Project <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

