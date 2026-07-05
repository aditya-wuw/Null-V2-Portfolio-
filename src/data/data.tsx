import { FaFigma, FaNodeJs, FaPython, FaReact, FaRust } from 'react-icons/fa'
import {
  RiNextjsFill,
  RiReactjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
  RiVideoOnAiFill,
} from 'react-icons/ri'
import {
  SiAdobephotoshop,
  SiMongodb,
  SiPaloaltonetworks,
  SiRadixui,
  SiReacthookform,
  SiSupabase,
  SiTauri,
  SiTypescript,
  SiZod,
} from 'react-icons/si'
import { PiFileSql, PiProjectorScreenFill } from 'react-icons/pi'
import { GrGithub } from 'react-icons/gr'
import { DiLinux, DiReact } from 'react-icons/di'
import { assets } from '../Assets/assets'
import type {
  ContactData,
  DetailsData,
  HeroData,
  NavLink,
  ProjectsData,
  SkillsData,
  TextContentData,
} from './type'

export const navLinks: Array<NavLink> = [
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const heroData: HeroData = {
  name: 'Aditya Mandal',
  role: 'aka @Adi',
  about_ln1: (
    <p>
      <span className="font-bold">Full Stack Developer</span> based in{' '}
      <strong>West Bengal, India</strong>. Specializing in Next.js, React,
      TypeScript.
    </p>
  ),
  about_ln2: (
    <span>
      I'm a self-taught developer usually creating apps or sites leveraging web
      tech with simplicity in mind.
    </span>
  ),
  about_ln3:
    'I also occasionally draw 2D art, create manga that I plan to publish soon, and do game development from time to time.',
}

export const contactData: ContactData = {
  title: 'Contact Info',
  message:
    "Feel free to reach out if you're looking for a developer, have a question, or just want to connect.",
  email: 'nullfaceddevbusiness@gmail.com',
  gh: 'https://github.com/aditya-wuw',
  linkedIN: 'https://www.linkedin.com/in/aditya-mandal-a30347294',
}

export const details: DetailsData = {
  employment: '',
  certification: [
    {
      label: 'Web Dev',
      path: '/Web Development.pdf',
    },
  ],
  techstack: (
    <span className="flex gap-2 items-center">
      <RiNextjsFill className="hover:scale-115 scale-100 cursor-pointer" />
      <SiTypescript className="hover:scale-115 scale-100 cursor-pointer" />
      <RiReactjsFill className="hover:scale-115 scale-100 cursor-pointer" />
      <RiSupabaseFill className="hover:scale-115 scale-100 cursor-pointer" />
    </span>
  ),
}

const icon_size = 'w-5 h-5 md:w-7 md:h-7'

export const skillsData: SkillsData = {
  title: 'Skills',
  items: [
    { Name: 'Next.js', Comp: <RiNextjsFill className={icon_size} /> },
    {
      Name: 'React',
      Comp: <FaReact className={icon_size} />,
      color: 'group-hover:text-blue-300',
    },
    {
      Name: 'TypeScript',
      Comp: <SiTypescript className={icon_size} />,
      color: 'group-hover:text-blue-600',
    },
    {
      Name: 'Tailwind CSS',
      Comp: <RiTailwindCssFill className={icon_size} />,
      color: 'group-hover:text-blue-400',
    },
    {
      Name: 'Supabase',
      Comp: <SiSupabase className={icon_size} />,
      color: 'group-hover:text-green-700',
    },
    {
      Name: 'Zod',
      Comp: <SiZod className={icon_size} />,
      color: 'group-hover:text-blue-800',
    },
    {
      Name: 'React Form Hooks',
      Comp: <SiReacthookform className={icon_size} />,
      color: 'group-hover:text-red-500',
    },
    {
      Name: 'Radix UI',
      Comp: <SiRadixui className={icon_size} />,
      color: 'group-hover:text-black-500',
    },
    {
      Name: 'Node.js',
      Comp: <FaNodeJs className={icon_size} />,
      color: 'group-hover:text-green-500',
    },
    {
      Name: 'SQL',
      Comp: <PiFileSql className={icon_size} />,
      color: 'group-hover:text-sky-700',
    },
    {
      Name: 'MongoDB',
      Comp: <SiMongodb className={icon_size} />,
      color: 'group-hover:text-green-700',
    },
    {
      Name: 'Python',
      Comp: <FaPython className={icon_size} />,
      color: 'group-hover:text-sky-700',
    },
    { Name: 'Figma', Comp: <FaFigma className={icon_size} /> },
    {
      Name: 'Adobe Photoshop',
      Comp: <SiAdobephotoshop className={icon_size} />,
      color: 'group-hover:text-blue-800',
    },
    {
      Name: 'Linux',
      Comp: <DiLinux className={icon_size} />,
      color: 'group-hover:text-orange-800',
    },
    {
      Name: 'Rust',
      Comp: <FaRust className={icon_size} />,
      color: 'group-hover:text-orange-500',
    },
    {
      Name: 'Tauri',
      Comp: <SiTauri className={icon_size} />,
      color: 'group-hover:text-yellow-800',
    },
    { Name: 'Video Editing', Comp: <RiVideoOnAiFill className={icon_size} /> },
  ],
}

export const projectsData: ProjectsData = {
  title: 'Featured',
  items: [
    {
      title: "Smug Cat's Den",
      Link: 'smugcat',
      started: '2nd Feb 2026',
      ended: 'Today',
      contributors: [
        {
          label: 'aditya',
          profileUrl: '/Images_Optimized/Profile/logo_new.png',
          link: 'https://github.com/aditya-wuw',
        },
      ],
      description:
        'This is the online brand alias I maintain to release my open-source apps or products. The name comes from a motivation of some self-centered cats building something cool, haha.',
      additional_dec:
        'My vision is very ambitious, but I am currently narrowing it down to something more achievable.',
      image: assets.smgcat,
      tags: ['brand', 'alias'],
      links: [
        {
          label: 'Learn more',
          url: 'https://home.smgcat.site/',
        },
      ],
    },
    {
      title: 'Copy Chan',
      Link: 'Copy_History',
      started: '1st Dec',
      ended: '23rd Dec 2025',
      contributors: [
        {
          label: 'aditya',
          profileUrl: '/Images_Optimized/Profile/logo_new.png',
          link: 'https://github.com/aditya-wuw',
        },
      ],
      description:
        'I needed a Windows-like clipboard manager as I switched to Linux, so I made my own setup.',
      additional_dec:
        'Copy Chan is a cross-platform desktop clipboard/history manager with an emoji and symbols picker, built with Tauri (Rust) and React + Vite. Primarily made and optimized for Linux.',
      image: assets.copychan,
      tags: [
        <DiReact size={18} />,
        <FaRust size={18} />,
        <SiTauri size={18} />,
        <RiTailwindCssFill size={18} />,
        'solo',
      ],
      links: [
        {
          label: 'Repo',
          url: 'https://github.com/Smug-Cat-s-Den/Copy-Chan',
        },
      ],
    },
    {
      title: 'Music Player Component',
      Link: 'Player',
      started: '1st Feb',
      ended: '8th Feb 2025',
      contributors: [
        {
          label: 'aditya',
          profileUrl: '/Images_Optimized/Profile/logo_new.png',
          link: 'https://github.com/aditya-wuw',
        },
      ],
      description:
        'Fully hand-coded the logic of the displayed music player right next to the skills tab.',
      additional_dec:
        'Initially used to showcase my favorite music, but I removed them due to copyright issues. I have also been learning to produce music since the start of 2026, so the music player may showcase some of my own tracks in the future.',
      image: assets.msplayer,
      tags: [<DiReact size={18} />, <RiTailwindCssFill size={18} />],
      links: [
        {
          label: 'Repo',
          url: 'https://github.com/aditya-wuw/Null-V2-Portfolio-/blob/master/src/components/Mount/Profile/MusicEmbed.tsx',
        },
      ],
    },
    {
      title: 'Koneko AI',
      Link: 'Mogger_AI',
      status: '',
      started: '20th Dec 2025',
      ended: '10th Jan 2026',
      contributors: [
        {
          label: 'aditya',
          profileUrl: '/Images_Optimized/Profile/logo_new.png',
          link: 'https://github.com/aditya-wuw',
        },
      ],
      description:
        'AI-powered web app that generates personalized mock tests and notes to help students prepare effectively for exams.',
      additional_dec:
        'Send a prompt and start preparing as it creates a virtual mock test simulation for you.',
      image: assets.Kokeno,
      tags: [
        'NEXT',
        <RiTailwindCssFill size={18} />,
        <SiSupabase className="h-4 w-4" />,
        'Solo',
      ],
      links: [
        {
          label: 'Demo',
          url: 'https://mogger-mog-your-exams.vercel.app/',
        },
      ],
    },
    {
      title: 'FireShip Discord bot',
      Link: 'FireShip_Discord_bot',
      description:
        'FireShip bot is a Discord bot designed to keep users up to date with the latest videos.',
      additional_dec:
        'Fireship is awesome, so I made this bot to stay instantly updated with channel uploads.',
      dedicated_dec: (
        <div>
          <b className="text-lg">FireShipBot</b> is an automation tool built to
          fetch the latest videos from the Fireship YouTube channel and send
          instant updates to a Discord server. Instead of manually checking
          YouTube, this bot makes sure the community never misses a new upload.
          <section className="mx-5">
            <h1 className="text-2xl font-bold mt-5 mb-2 flex gap-2 items-center">
              <PiProjectorScreenFill />
              Project Idea
            </h1>
            <p className="text-lg">
              As a fan of Fireship’s short, fast-paced tech videos, I often
              wanted a quick way to know when a new one was out. So I created
              FireShipBot, a cron job–powered bot that automatically checks for
              new uploads and pushes them into Discord without needing YouTube
              notifications.
            </p>
          </section>
          <section className="mx-5">
            <h1 className="text-2xl font-bold mt-5 mb-2 flex gap-2 items-center">
              <SiPaloaltonetworks />
              How It Works
            </h1>
            <p className="text-lg">
              The bot runs on a 24-hour cron schedule. It calls the YouTube Data
              API to check for the latest Fireship video, compares it with the
              last stored entry, and if there’s a new upload, sends an embedded
              message to a Discord server via a webhook. This way, the whole
              server stays updated automatically.
            </p>
          </section>
        </div>
      ),
      image: assets.Fireship,
      tags: [<FaNodeJs size={18} />, 'Express', 'YTV3'],
      links: [
        {
          label: 'none',
          url: 'none',
        },
        {
          label: <GrGithub className="w-6 h-6" />,
          url: 'https://github.com/aditya-wuw/FireShipBot',
        },
      ],
    },
    {
      title: 'HMS-dashboard',
      Link: 'HMS_dashboard',
      status: '',
      description:
        'Tasked with building an Admin Hospital Management System Dashboard. This is a full-stack project demo.',
      additional_dec:
        'A robust full-stack dashboard built during a hackathon challenge.',
      dedicated_dec: (
        <div>
          <b className="text-lg">HMS Dashboard</b> is a healthcare management
          system built during an online hackathon. It was designed to provide an
          all-in-one interface for patient records, doctor scheduling, and
          hospital analytics in a clean, user-friendly dashboard.
          <section className="mx-5">
            <h1 className="text-2xl font-bold mt-5 mb-2 flex gap-2 items-center">
              <PiProjectorScreenFill />
              Project Idea
            </h1>
            <p className="text-lg">
              The idea came during a hackathon where we had to solve a
              real-world problem in healthcare. We realized hospitals often face
              trouble in organizing patient data and schedules, so we aimed to
              design a dashboard that simplifies hospital workflows with modern
              UI/UX.
            </p>
          </section>
          <section className="mx-5">
            <h1 className="text-2xl font-bold mt-5 mb-2 flex gap-2 items-center">
              <SiPaloaltonetworks />
              How It Works
            </h1>
            <p className="text-lg">
              The HMS Dashboard integrates patient registration, appointment
              booking, doctor availability, and hospital statistics in one
              platform. It was built using React and backend APIs, focusing on
              speed and clarity. Doctors and admins can log in, manage data, and
              track insights all from one dashboard.
            </p>
            <p className="text-md italic">
              (Prototype built in 24 hours for the hackathon challenge)
            </p>
          </section>
        </div>
      ),
      image: assets.screenshot5,
      tags: [
        <RiReactjsFill size={18} />,
        'Express',
        <span className="flex items-center gap-1">
          <SiMongodb size={18} />
          <h1>MongoDB</h1>
        </span>,
      ],
      links: [
        {
          label: 'Demo',
          url: 'https://hms-dashboard-1.onrender.com/',
        },
        {
          label: <GrGithub className="w-6 h-6" />,
          url: 'https://github.com/aditya-wuw/HMS-Dashboard',
        },
      ],
    },
  ],
}

export const TextContent: TextContentData = {
  title: 'Thank you for Visiting',
  content: ':3',
  by: 'Null faced dev',
}
