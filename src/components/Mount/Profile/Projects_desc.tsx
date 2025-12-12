import { Link } from '@tanstack/react-router'
import { RxTimer } from 'react-icons/rx'
import { createThemeContext } from '@/Context/context'
import { OngoingProjects } from '@/data/data'

export default function Projects_desc() {
  const { LightTheme } = createThemeContext()

  return (
    <header
      className={`select-none p-3 mt-5 relative overflow-hidden ${LightTheme ? 'bg-white text-black border border-black/30 rounded-xl' : 'bg-black text-white border border-white/30 rounded-xl'} bottom-3 relative`}
    >
      <h1 className="text-xl font-bold">MVPs & Contributions</h1>
      <div className="mt-2 flex flex-col gap-5">
        {OngoingProjects.map((OP, index) => (
          <div key={index} className="relative">
            {OP.image && (
              <div className="md:h-40 h-20 bg-red-300 overflow-hidden rounded-tl-2xl rounded-tr-2xl">
                <img
                  src={OP.image}
                  alt={OP.title}
                  loading="lazy"
                  className="object-cover object-center cursor-pointer hover:scale-105 scale-100 transition duration-300 ease-in-out w-full h-full"
                />
              </div>
            )}
            <div className="font-bold text-2xl mt-3">{OP.title}</div>
            <div className="py-2 flex justify-between items-center">
              <div className="flex items-center md:text-md text-sm gap-2">
                <RxTimer size={20} />
                {OP.started} - Ongoing
              </div>
              <div className="flex items-center gap-2 font-bold md:text-md text-sm">
                {OP.contributers.map(
                  (c, CIndex) =>
                    c.profileUrl && (
                      <Link to={c.link} target="_blank" key={CIndex}>
                        <img
                          src={c.profileUrl}
                          alt={c.label}
                          width={30}
                          height={30}
                          loading="lazy"
                          className="rounded-full object-cover object-center"
                        />
                      </Link>
                    ),
                )}
              </div>
            </div>
            <div className="text-md mb-3">
              <div>{OP.description}</div>
              <div>{OP.additional_dec}</div>
            </div>
            <div className="flex gap-2 justify-between items-center py-2 md:text-sm text-xs">
              <div className="flex gap-2 items-center">
                {OP.links.map(
                  (l, lindex) =>
                    l.label !== 'none' && (
                      <Link
                        key={lindex}
                        to={l.url}
                        target="_blank"
                        className={`${typeof l.label === 'string' && 'bg-blue-600 px-2 py-1 rounded-md'}`}
                      >
                        {l.label}
                      </Link>
                    ),
                )}
              </div>
              <div className="flex gap-2">
                {OP.tags.map((tag, tagindex) => (
                  <div
                    key={tagindex}
                    className="bg-blue-600 px-2 py-1 rounded-md"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </header>
  )
}
