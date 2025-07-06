import { motion } from 'framer-motion'
import Head from 'next/head'

export default function About() {
  const skills = {
    'Frontend': ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'D3.js'],
    'Backend': ['Python', 'Flask', 'Go', 'Node.js', 'Django', 'Express.js', 'gRPC'],
    'Data & Cloud': ['DuckDB', 'SQL', 'MongoDB', 'Kubernetes', 'Docker', 'AWS'],
    'Tools & Others': ['Git', 'Slack Bots', 'Matplotlib', 'Stripe API', 'SMOTE', 'Airflow']
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
              Software Developer passionate about scalable systems, cloud tech, and applied ML.
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
                  I'm a Computer Science student at UC Irvine and a software developer intern at IBM. 
                  My work spans backend systems, machine learning, and cloud-native applications.
                </p>
                <p>
                  At IBM, I’ve helped improve enterprise auditing systems across 3 secure environments 
                  using Go, gRPC, and Kubernetes. I also built microservices that support GDPR and HIPAA compliance.
                </p>
                <p>
                  Outside of internships, I’ve built full-stack apps for stock prediction, diabetes diagnosis, and car price estimation. 
                  I enjoy teaching others—having led C++ and Python courses—and love solving real-world problems with elegant code.
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
                    <p className="text-blue-600 dark:text-blue-400 font-medium">IBM</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Jun 2025 – Sep 2025</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Developed scalable backend services using Go and gRPC, improving API performance and enterprise logging across secure environments.
                </p>
              </div>

              {/* NeverEnding */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Software Engineer Intern
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">NeverEnding, Inc.</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Jun 2024 – Aug 2024</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Integrated Django-based marketplace with creative tools, implemented payment processing via Stripe & Google Wallet, 
                  and improved user workflows.
                </p>
              </div>

              {/* Coding Minds */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Lead Instructor
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">Coding Minds Academy</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Mar 2023 – Jan 2024</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Taught C++ and Python courses, developed 40% more advanced curriculums, and built tools to increase engagement and productivity.
                </p>
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
              Let’s build something great together or chat about tech!
            </p>
            <a
              href="mailto:soetomowilson@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </>
  )
}
