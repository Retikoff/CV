import ProjectCard from './ProjectCard'
import screenNotion from '../assets/screenNotion.png'
import screenRouting from '../assets/screenRouting.png'
import screenMine from '../assets/screenMine.png'
import screenMario from '../assets/screenMario.png'

export default function Projects({ gridPos }) {
  return (
    <div
      className={'px-6 flex flex-col gap-5 py-3 max-lg:items-center ' + gridPos}
    >
      <p className="text-3xl font-bold text-violet-500">Projects</p>
      <ProjectCard
        image={screenNotion}
        heading={'Notion'}
        description={
          'Simple "Notion" clone where user can log in/out, sign up, create notes, edit them and delete. Made using Vite, React router (SPA architecture), Redux, JSON server, Zod, Tailwind.'
        }
        link={'https://github.com/Retikoff/Notion'}
      />
      <ProjectCard
        image={screenRouting}
        heading={'Routing'}
        description={
          'Single page application with content from JSON placeholder. This project have simple UI, but I use Material design for it. Made using Vite, React router dom. '
        }
        link={'https://github.com/Retikoff/React-routing'}
      />
      <ProjectCard
        image={screenMario}
        heading={'Try to mario'}
        description={
          'Game inspired by "Mario game" and Youtube tutorial (link on GitHub). My first project on Godot Engine. All mechanics made using Godot script. '
        }
        link={'https://github.com/Retikoff/TryToMario'}
      />
      <ProjectCard
        image={screenMine}
        heading={'Minesweeper'}
        description={'Minesweeper game made using JavaScript.'}
        link={'https://github.com/Retikoff/Minesweeper'}
      />
    </div>
  )
}
