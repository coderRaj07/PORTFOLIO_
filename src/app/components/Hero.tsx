'use client'

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import {
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiOpenai,
  SiDocker,
  SiKubernetes,
  SiPrisma,
} from 'react-icons/si';
import { FaCubes } from 'react-icons/fa'; // For Arcjet (no official icon)
import { RiBracesFill } from 'react-icons/ri'; // For shadcn/ui (closest rep)
import { fadeInUp, fadeIn } from '@/utils/animations';

export default function Hero() {
  return (
    <section className="py-28 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="md:flex md:items-center md:justify-center md:gap-12">
          {/* Profile Image with Animation */}
          <motion.div
            className="flex justify-center mb-8 md:mb-0 md:justify-end md:w-1/3"
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <Image
              src="https://media.licdn.com/dms/image/v2/D4D03AQFlKoJbnFk5aQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1666082299691?e=1757548800&v=beta&t=5ffs8QKsPZwT_J4-vEzQwol6MMv9jZ3qwBz5fHxSlaU"
              alt="Profile"
              width={128}
              height={128}
              className="rounded-full w-32 h-32 object-cover shadow-xl ring-4 ring-primary/70 hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Content Section */}
          <div className="md:w-2/3 text-center md:text-left">
            {/* Availability Badge */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary uppercase tracking-wider"
            >
              Available for freelance & contracts
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              {...fadeInUp}
              transition={{ delay: 0.3 }}
            >
              Hi, I&apos;m{' '}
              <motion.span
                className="text-primary"
                {...fadeIn}
                transition={{ delay: 0.8 }}
              >
                Rajendra Bisoi
              </motion.span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6"
              {...fadeInUp}
              transition={{ delay: 0.4 }}
            >
              Full Stack Developer | Backend & AI Automation Enthusiast
            </motion.p>

            {/* Tech Stack Icons */}
            <motion.div
              className="flex justify-center md:justify-start flex-wrap gap-4 mb-6"
              {...fadeInUp}
              transition={{ delay: 0.45 }}
            >
              {[
                { icon: <SiNextdotjs />, label: 'Next.js' },
                { icon: <SiNodedotjs />, label: 'Node.js' },
                { icon: <SiPostgresql />, label: 'PostgreSQL' },
                { icon: <SiMongodb />, label: 'MongoDB' },
                { icon: <SiOpenai />, label: 'OpenAI' },
                { icon: <SiPrisma />, label: 'Prisma' },
                { icon: <RiBracesFill />, label: 'shadcn/ui' },
                { icon: <FaCubes />, label: 'Arcjet' },
                { icon: <SiDocker />, label: 'Docker' },
                { icon: <SiKubernetes />, label: 'Kubernetes' },
              ].map(({ icon, label }, index) => (
                <div
                  key={index}
                  className="group relative flex items-center justify-center w-10 h-10 text-xl text-primary bg-primary/10 dark:bg-primary/20 rounded-full hover:scale-110 transition-transform"
                >
                  {icon}
                  <span className="absolute bottom-[-1.5rem] scale-0 group-hover:scale-100 transition-transform text-xs px-2 py-0.5 bg-black text-white rounded-md whitespace-nowrap z-10">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>


            {/* Social Icons */}
            <motion.div
              className="flex justify-center md:justify-start space-x-4 mb-8"
              {...fadeInUp}
              transition={{ delay: 0.5 }}
            >
              {[
                { icon: <FaGithub />, link: 'https://github.com/coderraj07' },
                { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/rajendra-bisoi/' },
                { icon: <FaTwitter />, link: 'https://x.com/RajendraBisoi13' },
              ].map(({ icon, link }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col md:flex-row justify-center md:justify-start gap-4 mt-4"
              {...fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/about"
                  className="bg-primary inline-flex items-center gap-2 text-white px-8 py-3 rounded-xl shadow hover:bg-primary/80 transition-transform transform hover:scale-105"
                >
                  <span>About Me</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gray-500 md:w-auto text-white px-8 py-3 rounded-xl hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-500 transition-transform transform hover:scale-105"
                >
                  Let&apos;s Connect
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
