import { MdGridView } from 'react-icons/md'
import { FaList } from 'react-icons/fa6'
import { Link, useNavigate } from '@tanstack/react-router'
import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { createThemeContext } from '@/Context/context'
import { projectsData } from '@/data/data'

const Projects = React.memo(() => {
  const { LightTheme } = createThemeContext()
  const Route = useNavigate()
  function Navigate(link: string) {
    Route({ to: `/projects/${link}` })
  }
  const [islist, setislist] = useState(false)
  const [disabled, setdisabled] = useState(false)
  const [duration, setduration] = useState(0)

  const check_WindowSize = () => {
    setislist(window.innerWidth > 1024)
    setdisabled(window.innerWidth < 1280)
    if (disabled) {
      setduration(1)
    }
  }

  useEffect(() => {
    check_WindowSize()
    window.addEventListener('resize', check_WindowSize)
    return () => {
      window.removeEventListener('resize', check_WindowSize)
    }
  }, [])

  const handleClick = () => {
    setduration(0.13)
    setislist((prev) => !prev)
  }

  return (
    <div
      className={`p-px select-none  ${LightTheme ? 'bg-linear-to-l from-neutral-500 text-black  rounded-xl ' : 'bg-linear-to-r from-neutral-500 text-white  rounded-xl'}`}
    >
      <div
        className={`p-3 rounded-xl ${LightTheme ? 'bg-white' : 'bg-black text-white  rounded-xl'}`}
      >
        <div>
          <div className="flex justify-between w-full mx-1 px-2">
            <h1 className="font-bold text-xl">Projects</h1>
            <button
              className={`${disabled && 'hidden'} scale-115 cursor-pointer hover:scale-120 transition-scale duration-200 ease-in-out`}
              onClick={handleClick}
            >
              {islist ? <MdGridView /> : <FaList />}
            </button>
          </div>
        </div>
        <section
          className={`project_section mt-4 gap-3 grid place-items-center h-full ${!islist ? 'grid-cols-1' : 'xl:grid-cols-2'}`}
        >
          {projectsData.items.map((item, i) => (
            <motion.div
              className={`project_comp relative ${LightTheme ? 'bg-white' : 'bg-black'} min-h-55 max-h-60 w-full h-55  overflow-hidden rounded-xl`}
              key={i}
              layout
              whileInView={{
                y: [20, 0],
              }}
              transition={{ duration: duration, ease: 'easeInOut' }}
            >
              <div className="Image_comp h-[40%]">
                <a
                  href={
                    item.links[0]?.url !== 'none'
                      ? item.links[0].url
                      : undefined
                  }
                  className="h-full"
                  aria-disabled={item.links[0]?.url === 'none'}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="object-cover object-center cursor-pointer hover:scale-105 scale-100 transition duration-300 ease-in-out w-full h-full"
                  />
                </a>
              </div>
              <div
                className="p-3 select-none cursor-pointer  "
                onClick={() => Navigate(item.Link)}
                title={'view details ' + item.title}
              >
                <h1 className="text-xl font-bold">{item.title}</h1>
                <h1 className="lg:text-sm text-xs">{item.description}</h1>
                {!islist && !disabled && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                  >
                    {item.additional_dec}
                  </motion.div>
                )}
              </div>
              <div className="px-3 mt-4 flex gap-2 items-center justify-between mr-1 absolute w-full bottom-3 z-10">
                <div className="flex gap-2 items-center">
                  {item.links.map(
                    (l, lindex) =>
                      l.label !== 'none' && (
                        <Link
                          key={lindex}
                          to={l.url}
                          target="_blank"
                          className={`${typeof l.label === 'string' && 'bg-blue-600 px-2 py-1 rounded-md text-sm'}`}
                        >
                          {l.label}
                        </Link>
                      ),
                  )}
                </div>
                <div className="flex gap-2 text-xs items-center">
                  {item.tags.map((p, index) => (
                    <div
                      key={index}
                      className={`p-1 rounded-md ${LightTheme ? 'bg-blue-400' : 'bg-blue-700'}`}
                    >
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  )
})

export default Projects
