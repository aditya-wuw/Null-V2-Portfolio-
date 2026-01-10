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

export const navLinks = [
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const heroData = {
  name: 'Aditya Mandal',
  role: 'aka @NulledFacedDev',
  about_ln1: (
    <p>
      <span className="font-bold">Full-Stack Developer</span> and college
      student based in <strong>West Bengal, India</strong>.
    </p>
  ),
  about_ln2: (
    <span>
      I'm a self-taught developer usually creating apps or sites leveraging
      <strong> React-NEXT JS/TS, TanStack and Supabase</strong> for development
      and <strong>using TailwindCSS and Motion </strong>
      for styling.
    </span>
  ),
  about_ln3:
    'Currently exploring game development and content creation on the side',
}

export const contactData = {
  title: 'Contact Info',
  message:
    "Feel free to reach out if you're looking for a developer, have a question, or just want to connect.",
  email: 'nullfaceddevbusiness@gmail.com',
  gh: 'https://github.com/aditya-wuw',
  linkedIN: 'https://www.linkedin.com/in/aditya-mandal-a30347294',
  // CV: assets.CV,
}

export const details = {
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
export const skillsData = {
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
export const OngoingProjects = [
  {
    title: 'Copy Chan',
    Link: 'Copy_History',
    started: '1st Dec',
    ended: '23th Dec 2025',
    // required
    contributers: [
      {
        label: 'aditya',
        profileUrl: '/Images_Optimized/Profile/logo_new.png',
        link: 'https://github.com/aditya-wuw',
      },
    ],
    description:
      'I needed a windows like Clipboard manager as I switched to Linux so I made my own Clipboard Manager, Copy Chan is a cross-platform desktop clipboard/history manager with a Emoji and symbols picker, built with Tauri (Rust) and React + Vite. Primarily made and optimized for linux.',
    additional_dec: null,
    image: null,
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
        url: 'https://github.com/aditya-wuw/CopyHistoryLinux',
      },
    ],
  },
  {
    title: 'Koneko AI',
    Link: 'Mogger_AI',
    started: '20th dec 2025',
    ended: '10th jan 2026',
    contributers: [
      {
        label: 'aditya',
        profileUrl: '/Images_Optimized/Profile/logo_new.png',
        link: 'https://github.com/aditya-wuw',
      },
    ],
    description:
      'AI-powered web app that generates personalized mock tests and notes to help students prepare effectively for exams and studying.send a prompt and start preparing as it creates a virtual mock test simulation for you.',
    image: null,
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
]
export const projectsData = {
  title: 'Projects',
  items: [
    {
      title: 'FireShip Discord bot',
      Link: 'FireShip_Discord_bot',
      description:
        'FireShip bot is a Discord bot designed to keep users up to date with the latest videos',
      additional_dec:
        'Fire ship is the goat and no one can deny that. So, I made this bot to get up to date with the channel',
      dedicated_dec: (
        <p>
          <b className="text-lg">FireShipBot</b> is an automation tool built to
          fetch the latest videos from the Fireship YouTube channel and send
          instant updates to a Discord server. Instead of manually checking
          YouTube, this bot makes sure the community never misses a new upload.
          <section className="mx-5">
            <h1 className="text-2xl font-bold mt-5 mb-2 flex gap-2 items-center">
              <PiProjectorScreenFill />
              Project idea
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
              How it works
            </h1>
            <p className="text-lg">
              The bot runs on a 24-hour cron schedule. It calls the YouTube Data
              API to check for the latest Fireship video, compares it with the
              last stored entry, and if there’s a new upload, sends an embedded
              message to a Discord server via a webhook. This way, the whole
              server stays updated automatically.
            </p>
          </section>
        </p>
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
      description:
        'Was tasked to build a Admin Hospital Management System Dashboard, it is a full stack demo',
      additional_dec: 'yeah average Dev ah project what else I can say',
      dedicated_dec: (
        <p>
          <b className="text-lg">HMS Dashboard</b> is a healthcare management
          system built during an online hackathon. It was designed to provide an
          all-in-one interface for patient records, doctor scheduling, and
          hospital analytics in a clean, user-friendly dashboard.
          <section className="mx-5">
            <h1 className="text-2xl font-bold mt-5 mb-2 flex gap-2 items-center">
              <PiProjectorScreenFill />
              Project idea
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
              How it works
            </h1>
            <p className="text-lg">
              The HMS Dashboard integrates patient registration, appointment
              booking, doctor availability, and hospital statistics in one
              platform. It was built using React and backend APIs, focusing on
              speed and clarity. Doctors and admins can log in, manage data, and
              track insights all from one dashboard.
            </p>
            <p className="text-md italic">
              (prototype built in 24 hours for the hackathon)
            </p>
          </section>
        </p>
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
          label: 'View',
          url: 'https://hms-dashbord-1.onrender.com/',
        },
        {
          label: <GrGithub className="w-6 h-6" />,
          url: 'https://github.com/aditya-wuw/HMS-Dashbord',
        },
      ],
    },
  ],
}

export const TextContent = {
  title: 'Thank you for Visiting',
  content: ':3',
  by: 'Null faced dev',
}
