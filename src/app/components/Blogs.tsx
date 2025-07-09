'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaCalendarAlt, FaClock } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations'

interface BlogPost {
  title: string
  link: string
  pubDate: string
  snippet: string
}

const LIMIT = 20

export default function Blogs() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const fetchPosts = async () => {
    setLoading(true)
    const res = await fetch(`/api/medium?offset=${offset}&limit=${LIMIT}`)
    const data = await res.json()

    if (data.posts.length < LIMIT) setHasMore(false)
    setPosts(prev => [...prev, ...data.posts])
    setOffset(prev => prev + LIMIT)
    setLoading(false)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          {...fadeInUp}
        >
          Latest Blog Posts
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {posts.map((blog, index) => (
            <motion.article
              key={index}
              className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <Link href={blog.link} target="_blank" rel="noopener noreferrer">
                <motion.h3 
                  className="text-xl font-semibold mb-2 hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {blog.title}
                </motion.h3>
              </Link>
              <motion.p 
                className="text-gray-600 dark:text-gray-300 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {blog.snippet}
              </motion.p>
              <motion.div 
                className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.span className="flex items-center" whileHover={{ scale: 1.05 }}>
                  <FaCalendarAlt className="mr-2" />
                  {new Date(blog.pubDate).toLocaleDateString()}
                </motion.span>
                <motion.span className="flex items-center" whileHover={{ scale: 1.05 }}>
                  <FaClock className="mr-2" />
                  ~3 min read
                </motion.span>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        {/* Load More button */}
        {hasMore && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={fetchPosts}
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Load More'}
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
