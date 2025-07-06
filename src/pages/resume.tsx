import { useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

export default function Resume() {
  const openResumeInNewWindow = () => {
    // Open resume in a new window/tab
    window.open('/resume.pdf', '_blank')
  }

  useEffect(() => {
    // Automatically open resume in new window when page loads
    openResumeInNewWindow()
  }, [])

  return (
    <>
      <Head>
        <title>Resume - Wilson Soetomo</title>
        <meta name="description" content="Download Wilson Soetomo's resume" />
      </Head>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-8">
            <svg className="w-16 h-16 mx-auto text-blue-600 mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Opening Resume...
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Your resume should open in a new tab. If it doesn't, 
              <button 
                onClick={openResumeInNewWindow}
                className="text-blue-600 dark:text-blue-400 hover:underline ml-1"
              >
                click here
              </button>
            </p>
            <div className="mt-8">
              <button
                onClick={() => window.history.back()}
                className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Go Back
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
} 