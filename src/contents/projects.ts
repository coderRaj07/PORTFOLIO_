import { Project } from "@/types";


export const projects: Project[] = [
      {
        title: 'AI Finance Platform',
        description: 'A full-stack AI-powered finance tracking platform that helps users monitor spending habits, get intelligent insights, and receive real-time alerts on overspending.',
        technologies: ['Next.js', 'Shadcn', 'Inngest', 'Prsima', 'PostgreSQl', 'Stripe', 'TypeScript', 'Tailwind CSS', 'Arcjet', 'Clerk'],
        githubLink: 'https://github.com/coderRaj07/ai_finance',
        demoLink: 'https://ai-finance-sepia.vercel.app/',
        image: 'https://image.thum.io/get/width/800/https://ai-finance-sepia.vercel.app'
      }, 
      {
        title: 'Crypto Trading Platform',
        description: 'Worked on the core backend part of this project in my previous company, that includes queue managements of Bulk order managements, AWS infrastructure management',
        technologies: ['Nest.js', 'MongoDB','Web3', 'Redis', 'Cronjobs', 'BullMQ', 'Webhook', 'REST APIs', 'Role-based Access', 'AWS', 'Docker', 'Kubernetes'],
        githubLink: '', // Likely private if it's for a company
        demoLink: 'https://app.sector51.ai/dashboard',
        image: 'https://image.thum.io/get/width/800/https://app.sector51.ai/dashboard'
      },      
      {
        title: 'Cold Emailing Automation System',
        description: 'An end-to-end cold emailing system built using n8n, designed to send personalized outreach emails in smart batches. It uses Google Sheets as a lead source, webhooks to trigger workflows, JavaScript code nodes for logic, and conditional branching (if/else) to dynamically handle delivery, retries, and status tracking. Emails are split into batches with delays to avoid spam filters and improve deliverability.',
        technologies: ['n8n', 'Google Sheets', 'Webhooks', 'JavaScript', 'Email Automation'],
        githubLink: 'https://github.com/coderRaj07/COLD_EMAIL_AUTOMATION', 
        demoLink: 'https://n8n-0css.onrender.com/workflow/iTQ6isWFRmVfDweM',     // Replace with real demo URL if available
        image: '/COLD_EMAIL_AUTOMATION.png'
      }
  ];