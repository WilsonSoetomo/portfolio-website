import { motion } from 'framer-motion'
import Head from 'next/head'
import ProjectCard from '@/components/ProjectCard'

const projects = [
    {
      title: "Stock Predictor App",
      description:
        "A Flask-based application that predicts stock prices using linear regression and random forests. Includes interactive dashboards built with D3.js and Matplotlib for financial forecasting.",
      tech: ["Python", "Flask", "D3.js", "Matplotlib", "Scikit-Learn"],
      github: "https://github.com/wilsonsoetomo/stock-predictor",
      live: "https://stock-predictor.demo.com"
    },
    {
      title: "DuckDB Sidecar Exporter",
      description:
        "A Kubernetes sidecar that exports DuckDB analytics as Prometheus metrics. Built with Flask and integrated into IBM's data pipeline for cloud-native observability.",
      tech: ["Python", "Flask", "DuckDB", "Kubernetes", "Prometheus", "Docker"],
      github: "https://github.com/wilsonsoetomo/duckdb-exporter",
      live: "https://duckdb-exporter.demo.com"
    },
    {
      title: "Diabetes Classifier Analysis",
      description:
        "Machine learning pipeline for diagnosing diabetes using kNN, logistic regression, and neural networks. Applied SMOTE balancing for imbalanced classes and achieved 88% accuracy.",
      tech: ["Python", "Scikit-Learn", "SMOTE", "Pandas", "Matplotlib"],
      github: "https://github.com/wilsonsoetomo/diabetes-classifier",
      live: "https://diabetes-analysis.demo.com"
    },
    {
      title: "Car Value API App",
      description:
        "RESTful Flask API using the CarQuery API to estimate car values based on make, model, year, and condition. Paired with a responsive React frontend supporting real-time form validation.",
      tech: ["Flask", "React", "REST API", "CarQuery API", "Bootstrap"],
      github: "https://github.com/wilsonsoetomo/car-value-api",
      live: "https://carvalue.demo.com"
    },
    {
      title: "NeverEnding Marketplace Integration",
      description:
        "Integrated Django backend with NeverEnding's 2D avatar marketplace. Enabled Stripe and Google Wallet payments and boosted performance by 50% through async API improvements.",
      tech: ["Django", "Stripe", "Google Wallet", "JavaScript"],
      github: "https://github.com/wilsonsoetomo/neverending-marketplace",
      live: "https://neverending.demo.com"
    },
    {
      title: "Portfolio Website",
      description:
        "Modern portfolio website built with Next.js, Tailwind, and Framer Motion. Fully responsive, deployed via Vercel, and showcases animations, dark mode, and scalable design.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
      github: "https://github.com/wilsonsoetomo/portfolio",
      live: "https://wilsonsoetomo.com"
    }
  ]  

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Wilson Soetomo</title>
        <meta name="description" content="Projects and work by Wilson Soetomo - Software Developer and IBM Intern" />
      </Head>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A collection of projects showcasing my work in full-stack development, 
              cloud-native solutions, and data engineering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  github={project.github}
                  live={project.live}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Interested in working together?
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