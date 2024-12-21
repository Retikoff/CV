export default function WorkExperience({ gridPos }) {
  return (
    <div className={'flex flex-col gap-3 px-6 py-10 ' + gridPos}>
      <p className="text-3xl font-bold text-violet-500">Work Experience</p>
      <div className="grid grid-cols-[20%_80%] grid-rows-1 px-2">
        <p className="italic text-lg ">2023 - Present</p>
        <p className="text-lg">
          Studying at the university. Trying freelance. At the same time,
          independently studying game development. Participating in hackathons
          and game jams with groupmates.
        </p>
      </div>
    </div>
  )
}
