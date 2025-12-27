import { Link } from '@tanstack/react-router'
import { MdLightMode } from 'react-icons/md'
import { LuLogs } from 'react-icons/lu'
import { IoPerson } from 'react-icons/io5'
import { GoProjectSymlink } from 'react-icons/go'
import { createThemeContext } from '@/Context/context'
import { scrolltoView } from '@/utils/utils'

const Nav = () => {
  const { LightTheme, setTheme, InView } = createThemeContext()
  const navlist = [
    { id: 'About', logo: <IoPerson size={15} /> },
    { id: 'Projects', logo: <GoProjectSymlink size={15} /> },
    { id: 'blogs', logo: <LuLogs size={15} /> },
  ]
  function Themeing() {
    localStorage.setItem('theme', !LightTheme ? 'Light' : 'dark')
    setTheme(!LightTheme)
  }

  return (
    <div
      className={`sticky top-3 z-50 w-full max-h-20 backdrop-blur-md p-2 rounded-md ${LightTheme ? 'bg-blue-500/15' : 'bg-gray-200/10'} transition-bg duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center mx-2">
        <h1
          className={`md:text-xl text-md font-extrabold tracking-[2px] ${LightTheme ? 'text-blue-500/50' : 'text-sky-600'}`}
        >
          <Link
            to="/"
            className={`${!InView && 'opacity-100 cursor-pointer'} opacity-0 cursor-default transition-opacity duration-600 ease-in-out`}
          >
            AM
          </Link>
        </h1>
        <div
          className={`${LightTheme ? 'text-black' : 'text-white'} flex items-center gap-3`}
        >
          {navlist.map((i, index) => (
            <span
              key={index}
              onClick={() => scrolltoView(i.id)}
              className="hover:scale-110 cursor-pointer relative group"
              title={i.id}
            >
              {i.logo}
            </span>
          ))}
          <button
            onClick={Themeing}
            className={`p-2 hover:bg-blue-500/20 transition-all ease-in-out rounded-sm cursor-pointer`}
          >
            {' '}
            <MdLightMode
              className={`scale-110 ${LightTheme ? 'text-blue-500' : 'text-white'} transtion duration-300 ease-in-out`}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Nav
