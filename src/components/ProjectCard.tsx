import { motion } from 'framer-motion'
import { ExternalLinkIcon, GithubIcon } from 'lucide-react'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
  image?: string
}

const ProjectCard = ({ title, description, tech, github, live, image }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
    >
      {/* Project Image */}
      {image && (
        <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <Image 
            src={image} 
            alt={title} 
            width={400}
            height={192}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((techItem, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium"
            >
              {techItem}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex space-x-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <GithubIcon size={16} />
              <span className="text-sm">Code</span>
            </a>
          )}
          
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ExternalLinkIcon size={16} />
              <span className="text-sm">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard 