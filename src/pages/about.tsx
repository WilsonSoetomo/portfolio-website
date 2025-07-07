import { motion } from 'framer-motion'
import Head from 'next/head'

export default function About() {
  const skills = {
    'Frontend': ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    'Backend': ['Node.js', 'Python', 'Flask', 'Express', 'gRPC'],
    'Data & Cloud': ['DuckDB', 'PostgreSQL', 'Kubernetes', 'Docker', 'AWS'],
    'Tools & Others': ['Git', 'Linux', 'Apache Airflow', 'Prometheus', 'Helm']
  }

  return (
    <>
      <Head>
        <title>About - Wilson Soetomo</title>
        <meta name="description" content="About Wilson Soetomo - Software Developer and IBM Intern" />
      </Head>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Software Developer passionate about building scalable solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Background
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I&apos;m a software developer currently interning at IBM, where I work on cloud-native
                  solutions and data engineering projects. My passion lies in building scalable,
                  efficient applications that solve real-world problems.
                </p>
                <p>
                  I specialize in full-stack development with a focus on modern technologies like
                  React, TypeScript, Python, and cloud-native tools. My experience includes working
                  with DuckDB for analytical workloads, Kubernetes for container orchestration,
                  and building microservices architectures.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring new technologies, contributing to
                  open-source projects, or sharing knowledge with the developer community. I believe
                  in writing clean, maintainable code and following best practices in software engineering.
                </p>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Skills & Technologies
              </h2>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Experience
            </h2>
            <div className="space-y-8">
              {/* IBM */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Software Developer Intern
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      IBM · Lowell, MA (Hybrid)
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Jun 2025 – Sep 2025
                  </span>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Developed backend services using Go and gRPC, reducing API response latency by 35%.</li>
                  <li>Designed microservices for data auditing across 3 enterprise environments, boosting debugging efficiency by 40%.</li>
                  <li>Built secure data pipelines compliant with GDPR and HIPAA, improving traceability of access logs by 50%.</li>
                </ul>
              </div>

              {/* NeverEnding */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Software Engineer Intern
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      NeverEnding, Inc. · Remote
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Jun 2024 – Aug 2024
                  </span>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Integrated Django with 2D character tools and marketplace, increasing engagement by 30%.</li>
                  <li>Led Slack-based standups and check-ins, improving team contribution by 40%.</li>
                  <li>Optimized payment flow using Stripe and Google Wallet, boosting purchase rates by 10%.</li>
                </ul>
              </div>

              {/* Coding Minds */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Lead Instructor
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      Coding Minds Academy · Irvine, CA
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Mar 2023 – Jan 2024
                  </span>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Expanded Python and C++ curricula by 40%, increasing student engagement by 16%.</li>
                  <li>Streamlined tutor-parent communications using Slack bots, improving accountability and performance.</li>
                  <li>Designed interactive learning strategies that boosted retention and participation by 25%.</li>
                </ul>
              </div>
            </div>
          </motion.div>


          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Interested in working together or learning more about my work?
            </p>
            <a
              href="mailto:wilson.soetomo@example.com"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>
    </>
  )
}
