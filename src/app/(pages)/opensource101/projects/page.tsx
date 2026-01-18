'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import Decorations from '@/components/ui/home/Decorations'

type Project = {
  name: string
  description: string
  url: string
  stack: string[]
}

export default function OpenSourceProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const colorPalettes = [
    {
      bg: 'bg-white/5',
      border: 'border-cyan-500/20',
      hoverBorder: 'hover:border-cyan-400/60',
      hoverBg: 'hover:bg-white/10',
      gradientFrom: 'from-cyan-500/0',
      gradientVia: 'via-cyan-500/5',
      text: 'text-cyan-100',
      badgeBg: 'bg-cyan-500/20',
      badgeBorder: 'border-cyan-400/50',
      hoverText: 'group-hover:text-cyan-200',
    },
    {
      bg: 'bg-white/5',
      border: 'border-purple-500/20',
      hoverBorder: 'hover:border-purple-400/60',
      hoverBg: 'hover:bg-white/10',
      gradientFrom: 'from-purple-500/0',
      gradientVia: 'via-purple-500/5',
      text: 'text-purple-100',
      badgeBg: 'bg-purple-500/20',
      badgeBorder: 'border-purple-400/50',
      hoverText: 'group-hover:text-purple-200',
    },
    {
      bg: 'bg-white/5',
      border: 'border-green-500/20',
      hoverBorder: 'hover:border-green-400/60',
      hoverBg: 'hover:bg-white/10',
      gradientFrom: 'from-green-500/0',
      gradientVia: 'via-green-500/5',
      text: 'text-green-100',
      badgeBg: 'bg-green-500/20',
      badgeBorder: 'border-green-400/50',
      hoverText: 'group-hover:text-green-200',
    },
    {
      bg: 'bg-white/5',
      border: 'border-pink-500/20',
      hoverBorder: 'hover:border-pink-400/60',
      hoverBg: 'hover:bg-white/10',
      gradientFrom: 'from-pink-500/0',
      gradientVia: 'via-pink-500/5',
      text: 'text-pink-100',
      badgeBg: 'bg-pink-500/20',
      badgeBorder: 'border-pink-400/50',
      hoverText: 'group-hover:text-pink-200',
    },
    {
      bg: 'bg-white/5',
      border: 'border-yellow-500/20',
      hoverBorder: 'hover:border-yellow-400/60',
      hoverBg: 'hover:bg-white/10',
      gradientFrom: 'from-yellow-500/0',
      gradientVia: 'via-yellow-500/5',
      text: 'text-yellow-100',
      badgeBg: 'bg-yellow-500/20',
      badgeBorder: 'border-yellow-400/50',
      hoverText: 'group-hover:text-yellow-200',
    },
  ]

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/shubham-dev4me/opensource101/main/projects.json',
        )

        if (!response.ok) {
          throw new Error('Unable to load projects.json from GitHub.')
        }

        const rawText = await response.text()

        let jsonData: any

        try {
          const cleaned = rawText
            .replace(/`/g, '')
            .replace(/,\s*([}\]])/g, '$1')

          jsonData = JSON.parse(cleaned)
        } catch (parseError: any) {
          throw new Error('Failed to parse projects.json. Please check its format.')
        }

        let rawList: any[] = []

        if (Array.isArray(jsonData) && jsonData.length > 0 && jsonData[0] && typeof jsonData[0] === 'object') {
          rawList = Object.values(jsonData[0] as Record<string, unknown>)
        } else if (Array.isArray(jsonData)) {
          rawList = jsonData
        } else if (jsonData && typeof jsonData === 'object') {
          rawList = Object.values(jsonData as Record<string, unknown>)
        }

        if (!rawList.length) {
          setProjects([
            {
              name: 'opensource101',
              description: 'Main repository for the Open Source 101 initiative.',
              url: 'https://github.com/shubham-dev4me/opensource101',
              stack: [],
            },
          ])
          setLoading(false)
          return
        }

        const mapped: Project[] = rawList.map((item: any) => {
          const name = typeof item?.name === 'string' ? item.name : 'Untitled project'
          const description =
            typeof item?.description === 'string'
              ? item.description
              : 'Project details coming soon.'
          const url =
            typeof item?.repository === 'string'
              ? item.repository
              : 'https://github.com/shubham-dev4me/opensource101'
          const stackArray = Array.isArray(item?.stack) ? item.stack : []
          const stack = stackArray.map((s: any) => String(s))

          return {
            name,
            description,
            url,
            stack,
          }
        })

        setProjects(mapped)
        setLoading(false)
      } catch (e: any) {
        setError(e.message || 'Failed to load projects.')
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  const normalizedQuery = searchQuery.trim().toLowerCase()
  const filteredProjects =
    !normalizedQuery
      ? projects
      : projects.filter((project) => {
          const inName = project.name.toLowerCase().includes(normalizedQuery)
          const inDescription = project.description.toLowerCase().includes(normalizedQuery)
          const inStack = project.stack.some((tech) => tech.toLowerCase().includes(normalizedQuery))
          return inName || inDescription || inStack
        })

  return (
    <div className="min-h-screen bg-black text-white">
      <Decorations />
      <div className="mt-5 relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Open Source 101 Projects
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            Explore the live projects under the Open Source 101 initiative. Each project is a
            hands-on opportunity to learn, contribute, and build with the community.
          </p>
        </motion.div>

        {loading && (
          <div className="flex justify-center items-center h-40">
            <div className="w-10 h-10 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {!loading && error && (
          <div className="max-w-md mx-auto bg-white/5 border border-red-500/40 rounded-2xl p-6 text-center">
            <p className="text-sm text-red-200 mb-2">Unable to load projects right now.</p>
            <p className="text-xs text-gray-300">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div>
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects by name, tech stack, or description"
                  className="w-full rounded-xl bg-white/5 border border-cyan-500/30 px-4 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/70 focus:border-cyan-400/70"
                />
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M17 10.5A6.5 6.5 0 104 10.5 6.5 6.5 0 0017 10.5z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {filteredProjects.length === 0 ? (
              <div className="text-center text-sm text-gray-300 mt-4">
                No projects found. Try a different search.
              </div>
            ) : (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.06 },
                  },
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer"
              >
                {filteredProjects.map((project, index) => {
                  const palette = colorPalettes[index % colorPalettes.length]
                  return (
                    <motion.a
                      key={project.name}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.4, delay: index * 0.03 }}
                      className={clsx(
                        'relative group rounded-2xl p-5 overflow-hidden transition-all duration-300',
                        palette.bg,
                        palette.border,
                        palette.hoverBorder,
                        palette.hoverBg,
                      )}
                    >
                      <div
                        className={clsx(
                          'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer',
                          palette.gradientFrom,
                          palette.gradientVia,
                        )}
                      />
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-3">
                          <h2 className={clsx("text-lg font-semibold text-white cursor-pointer", palette.hoverText)}>
                            {project.name}
                          </h2>
                        </div>
                        {project.stack && project.stack.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.stack.map((tech) => (
                              <span
                                key={tech}
                                className={clsx(
                                  'text-xs px-2 py-1 rounded-full cursor-pointer',
                                  palette.badgeBg,
                                  palette.badgeBorder,
                                  palette.text,
                                )}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                        <p className="text-sm text-gray-300 mb-4 flex-grow cursor-pointer">
                          {project.description}
                        </p>
                        <div className={clsx("flex items-center text-sm font-medium cursor-pointer", palette.text, palette.hoverText, "transition-colors")}>
                          View Project
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-4 h-4 ml-1"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </motion.a>
                  )
                })}
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
