import { FaClock, FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { createThemeContext } from '@/Context/context'
import { contactData } from '@/data/data'

const Footer = () => {
  const { LightTheme } = createThemeContext()
  const lastupdated = '28th Dec'
  return (
    <div
      className={`p-3 rounded-t-2xl text-center ${LightTheme ? 'bg-white text-black border border-black/30' : 'bg-black text-white border border-white/30'}`}
    >
      <h1 className="flex items-center justify-center gap-1 mb-1">
        <FaClock className={`${LightTheme ? 'text-black' : 'text-white'}`} />{' '}
        {lastupdated + ' ' + new Date().getFullYear()}
        <div className="flex gap-1 ml-2">
          <a href={contactData.gh} target="_blank">
            <FaGithub className="w-4 h-4 cursor-pointer hover:scale-115 scale-100 transition-scale duration-300 ease-in-out" />
          </a>
          <a href={contactData.linkedIN} target="_blank">
            <FaLinkedin className="w-4 h-4 cursor-pointer hover:scale-115 scale-100 transition-scale duration-300 ease-in-out" />
          </a>
          <a
            href={`mailto:${contactData.email}`}
            className="transition-scale duration-200 ease-in-out flex items-center  gap-1 break-all text-md"
          >
            <MdEmail className="w-4 h-4 cursor-pointer hover:scale-115 scale-100 transition-scale duration-300 ease-in-out" />{' '}
          </a>
        </div>
      </h1>
      <h1 className="max-lg:text-sm">
        Persona is a trademark of © ATLUS and © SEGA
      </h1>
    </div>
  )
}

export default Footer
