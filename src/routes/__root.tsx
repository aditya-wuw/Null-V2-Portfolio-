import { Outlet, createRootRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { createThemeContext } from '@/Context/context'
import Loader from '@/components/Loader'
import Nav from '@/components/Nav'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export const Route = createRootRoute({
  component: layOuts,
})

function layOuts() {
  const { LightTheme } = createThemeContext()
  const [loading, setloading] = useState(true)
  const ContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setloading(false)
  }, [])

  useGSAP(
    () => {
      if (loading) return

      const smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.2,
        effects: true,
        normalizeScroll: true,
      })

      return () => {
        smoother.kill()
      }
    },
    { scope: ContainerRef, dependencies: [loading] },
  )

  if (loading) {
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <Loader />
      </div>
    )
  }

  return (
    <div>
      <Nav />
      <div
        ref={ContainerRef}
        id="smooth-wrapper"
        className={`${
          LightTheme ? 'bg-white' : 'bg-black'
        } transition-colors duration-300 ease-in-out w-full h-screen overflow-hidden`}
      >
        /* 4. CONTENT ELEMENT: Must be a clean block container. Do NOT add
        h-screen or overflow properties here. We apply the grid background
        classes here so it tiles indefinitely as you scroll down. */
        <div
          id="smooth-content"
          className={`w-full min-h-screen ${
            LightTheme ? 'bg-white Grind-black' : 'bg-black Grind-white'
          }`}
        >
          <div className="min-[4240px]:mx-115 min-[3840px]:mx-15 min-[1280px]:mx-30 mx-4 flex justify-center pt-px">
            <div className="2xl:w-[50vw] max-[1024px]:w-[99vw] w-full">
              <section>
                <Outlet />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
