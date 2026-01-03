import { assets } from '../Assets/assets'

export const Notes_blog = [
  {
    title: 'Creating a Minecraft Server for my Friends',
    link: 'Minecraft_Server_blog',
    banner: assets.minecraft_,
    description: (
      <article className="flex flex-col gap-4">
        <article>
          I was playing Minecraft with my friends, we enjoy building creative
          things and let's just say our epic creations deserve better than a
          random server crash, less simulation distance so that our farms takes
          a holiday trip with Jet2holidays or my pal Steve's TNT obsession{' '}
          <i className="text-blue-500">
            (please don't summon wither I beg you)
          </i>
        </article>
        <article>
          So, I got an idea. What if I grab a Raspberry Pi and dive into
          building a self-hosted Minecraft Java Edition server with some spicy
          flair - a custom Java API for Google Drive backups, a web interface
          for my crew to control it, and a downtime schedule to keep my Pi from
          turning into Crispy Pi ^O^
        </article>
        <article>
          I'm planning to test all the logic on a Virtual environment 1st and
          then setup on a Raspberry Pi 4, also planning to create a custom logic
          to Zip and upload world files to a google drive for backup
        </article>
        <article>
          <b>Update! </b>
          <span className="text-red-500">
            I had to stop the project as I couldn't find a Raspberry Pi for the
            project but still I managed to build my own server and host it using
            the Mojhang SDK and also added custom logic for saving the world
            data. But it was a very fun project to work with.
          </span>
        </article>
      </article>
    ),
    date: '19th Oct 2025',
    posted: true,
    edited: true,
  },
  {
    title: 'My perspective of using AI',
    link: 'about_ai',
    banner: assets.vro,
    description: (
      <article className="flex flex-col gap-4">
        <article>
          I've been on the "AI hype train" for a while. I have to agree that AI
          has changed the way we code and think, in good ways and bad ways. The
          good thing is that now we have a mentor in our pocket 24/7 , and we
          can get advice from it whenever we want. The bad thing is that it's
          stealing everything that has ever existed on the internet, which
          involves art, code, and practically anything you can think of that has
          ever been public.
        </article>
        <article>
          I Think of AI as a digital butler to handle my low-impact, mundane
          tasks Like generating boilerplate code, brainstorming ideas etc.., So
          I can focus on the truly creative and strategic work. While Learning
          somthing new AI guides me towards the right direction, if I don't know
          the best practice then I can easily learn it from AI with just a
          prompt which makes learning very fast as we can directly adress the
          problems to it and get the solution or hint.
        </article>
        <article>
          The problem is, if AI dose everything then I'll become lazy. Even
          though it helps with productivity, it also gives you creative burnout
          and less creative freedom. I believe what makes something unique is
          the uneven and random ideas from humanity, which make something truly
          remarkable. AI can only visually recreate the work, but it can't
          portray the emotional burden or the late-night thinking that went into
          a specific change, which is what makes it truly remarkable
        </article>
      </article>
    ),
    date: '25th Aug 2025',
    posted: true,
    edited: false,
  },
]
