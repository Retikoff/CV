export default function Stack({ gridPos }) {
  return (
    <div className={'flex flex-col gap-1 px-5 ' + gridPos}>
      <p className="text-3xl font-bold text-violet-500">Stack</p>
      <div className="grid grid-cols-3 grid-rows-1 px-2">
        <ul>
          <span className="font-semibold text-xl">WEB:</span>
          {STACK_WEB.map((content, i) => (
            <li key={i} className="text-lg">
              {content}
            </li>
          ))}
        </ul>
        <ul>
          <span className="font-semibold text-xl">GameDev:</span>
          {STACK_GAMEDEV.map((content, i) => (
            <li key={i} className="text-lg">
              {content}
            </li>
          ))}
        </ul>
        <ul>
          <span className="font-semibold text-xl">Other:</span>
          {STACK_OTHER.map((content, i) => (
            <li key={i} className="text-lg">
              {content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const STACK_WEB = [
  'HTML, CSS, JS',
  'React (Vite)',
  'Redux',
  'JSON server, MSSQL',
  'Tailwind',
]

const STACK_GAMEDEV = [
  'Unity',
  'Godot (GDScript)',
  'SFML (C++)',
  'Aseprite, Photoshop',
]

const STACK_OTHER = [
  'Git, GitHub, GitLab',
  'C++',
  'Figma',
  'Linux (Ubuntu)',
  'Wolfram Mathematica',
]
