'use client'

import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall
} from '@/utils/animations'

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section
        className="mb-16"
        {...fadeInUp}
      >
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a passionate Full Stack Developer with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, I create seamless
          user experiences and robust server-side solutions.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2
          className="section-title"
          {...fadeInUp}
        >
          Skills
        </motion.h2>
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Prisma</li>
              <li>Tanstack</li>
              <li>Tailwind CSS</li>
              <li>Shadcn</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Nest.js</li>
              <li>Express</li>
              <li>Fastify</li>
              <li>Django</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Redis</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>AWS</li>
              <li>CI/CD</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2
          className="section-title"
          {...fadeInUp}
        >
          Experience
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
            <p className="text-primary mb-2">Metaverse Ventures • Nov 2023 - Present</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Migrated legacy Node.js codebases into modular, scalable NestJS services, improving maintainability and development velocity.</li>
              <li>Designed and optimized RESTful APIs for trading, NFT listings, and bulk order operations with serialized, paginated responses for high-performance delivery.</li>
              <li>Built asynchronous job processing and recurring tasks using BullMQ queues and cron jobs for syncing blockchain events, auto-cleanups, and periodic automation.</li>
              <li>Implemented secure authentication and authorization using JWT, OAuth2, and role-based access control (RBAC) across protected endpoints.</li>
              <li>Integrated external APIs such as Moralis, Alchemy, and Stripe to support real-time blockchain data sync, NFT metadata ingestion, and payment workflows.</li>
              <li>Applied Redis caching and concurrency controls to reduce latency by 60% and improve high-load throughput.</li>
              <li>Spearheaded Zlayer Protocol MVP, contributing 70%+ of backend logic and setting up CI/CD automation via GitHub Actions within 2 months.</li>
              <li>Worked closely with DevOps to optimize Docker and Kubernetes deployments for consistent production delivery.</li>
            </ul>

          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
            <p className="text-primary mb-2">TraceX Technologies• Jan 2023 - Sep 2023</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Developed and maintained RESTful APIs</li>
              <li>Built responsive user interfaces with modern JavaScript frameworks</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2
          className="section-title"
          {...fadeInUp}
        >
          Education
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Bachelor of Technology in Computer Science</h3>
            <p className="text-primary mb-2">International Institute of Information Technology (IIIT), Bhubaneswar • 2019 - 2023</p>
            <p className="text-secondary">
              Graduated with honors. Focused on software engineering and web development.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
} 