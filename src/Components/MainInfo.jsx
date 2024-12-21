import photo from '../assets/photo.png'

export default function MainInfo({ gridPos }) {
  return (
    <div
      className={
        'grid grid-cols-[auto_1fr] grid-rows-1 gap-4 w-auto m-5 ' + gridPos
      }
    >
      <img
        src={photo}
        className="col-start-1 col-end-2 row-start-1 row-end-2 h-60 rounded-md max-sm:h-40"
      />
      <div className="col-start-2 col-end-3 row-start-1 row-end-2 flex flex-col gap-3">
        <p className="text-5xl font-bold text-violet-500">Retikov Andrew</p>
        <p className="text-2xl ">Software Engineer</p>
      </div>
    </div>
  )
}
