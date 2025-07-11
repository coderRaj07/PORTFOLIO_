'use client'

import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  cardHover,
  cardHoverSmall
} from '@/utils/animations'

const cardClasses = "bg-white dark:bg-dark/50 p-6 rounded-xl shadow-md transition-all"

export default function About() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white dark:from-[#0d0d0d] dark:to-black py-20">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Main Heading */}
        <motion.h1
          className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
          {...fadeInDown}
        >
          About Me
        </motion.h1>

        {/* Bio Section */}
        <motion.section
          className="mb-24 max-w-3xl mx-auto text-center"
          {...fadeInUp}
        >
          <p className="text-lg text-secondary">
            I&apos;m a passionate Full Stack Developer with expertise in building modern web applications.
            With a strong foundation in both frontend and backend technologies, I create seamless
            user experiences and robust server-side solutions.
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className="mb-24"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          <motion.h2 className="text-3xl font-bold mb-8 text-center" {...fadeInUp}>
            Skills
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Frontend Card */}
            <motion.div className={cardClasses} variants={fadeInLeft} {...cardHover}>
              <FaCode className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2 text-sm">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Tanstack', 'Shadcn'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Backend Card */}
            <motion.div className={cardClasses} variants={fadeInUp} {...cardHover}>
              <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2 text-sm">
                {['Node.js', 'Nest.js', 'Fastify', 'Express', 'PostgreSQL', 'MongoDB', 'Redis', 'Django'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Tools Card */}
            <motion.div className={cardClasses} variants={fadeInRight} {...cardHover}>
              <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2 text-sm">
                {['Git', 'GitHub', 'Docker', 'Kubernetes', 'AWS', 'CI/CD'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section className="mb-24" {...fadeIn} transition={{ delay: 0.4 }}>
          <motion.h2 className="text-3xl font-bold mb-8 text-center" {...fadeInUp}>
            Experience
          </motion.h2>

          <motion.div
            className="max-w-3xl mx-auto space-y-10"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Metaverse Ventures */}
            <motion.div className={cardClasses} variants={fadeInUp} {...cardHoverSmall}>
              <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
              <p className="text-primary text-sm mb-4">Metaverse Ventures • Nov 2023 - Present</p>
              <ul className="text-secondary list-disc list-inside space-y-2 text-sm">
                <li>Migrated legacy Node.js codebases to scalable NestJS services.</li>
                <li>Built REST APIs for trading, NFT listings, and order management.</li>
                <li>Set up BullMQ + cron jobs for async job handling.</li>
                <li>Implemented OAuth2, JWT, and RBAC for secure access.</li>
                <li>Integrated Moralis, Alchemy, Stripe APIs for blockchain workflows.</li>
                <li>Used Redis for caching & throughput gains.</li>
                <li>Led Zlayer MVP backend and CI/CD setup with GitHub Actions.</li>
              </ul>
            </motion.div>

            {/* TraceX */}
            <motion.div className={cardClasses} variants={fadeInUp} {...cardHoverSmall}>
              <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
              <p className="text-primary text-sm mb-4">TraceX Technologies • Jan 2023 - Sep 2023</p>
              <ul className="text-secondary list-disc list-inside space-y-2 text-sm">
                <li>Developed and maintained RESTful APIs.</li>
                <li>Built responsive interfaces with modern JavaScript frameworks.</li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Education Section */}
        <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
          <motion.h2 className="text-3xl font-bold mb-8 text-center" {...fadeInUp}>
            Education
          </motion.h2>
          <motion.div
            className="max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div className={cardClasses} variants={fadeInUp} {...cardHoverSmall}>
              <h3 className="text-xl font-semibold mb-2">B.Tech in Computer Science</h3>
              <p className="text-primary text-sm mb-2">IIIT Bhubaneswar • 2019 - 2023</p>
              <p className="text-secondary text-sm">
                Graduated with honors. Specialized in software engineering and web development.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </section>
  )
}
