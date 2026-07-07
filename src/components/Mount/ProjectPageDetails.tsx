import { PiProjectorScreenFill } from 'react-icons/pi'
import { SiPaloaltonetworks } from 'react-icons/si'
import type { ProjectDetailsType } from '@/data/type'

const ProjectPageDetails = ({
  Desc,
  ProjectIdea,
  HowItWorks,
}: ProjectDetailsType) => {
  return (
    <div>
      <p>{Desc}</p>
      <section className="mx-5">
        <h1 className="text-2xl font-bold mt-5 mb-2 flex gap-2 items-center">
          <PiProjectorScreenFill />
          Project Idea
        </h1>
        <p className="text-lg">{ProjectIdea}</p>
      </section>
      <section className="mx-5">
        <h1 className="text-2xl font-bold mt-5 mb-2 flex gap-2 items-center">
          <SiPaloaltonetworks />
          How It Works
        </h1>
        <p className="text-lg">{HowItWorks}</p>
      </section>
    </div>
  )
}

export default ProjectPageDetails
