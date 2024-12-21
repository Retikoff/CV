import MainInfo from './Components/MainInfo'
import Projects from './Components/Projects'
import SideInfo from './Components/SideInfo'
import Stack from './Components/Stack'
import WorkExperience from './Components/WorkExperience'

function App() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="grid grid-cols-[70%_30%] grid-rows-[auto_auto_auto_auto_auto] rounded-md w-3/4 shadow-xl drop-shadow-lg border-2 my-5 bg-white max-lg:grid-cols-1 max-lg:grid-rows-[auto_auto_auto_auto_auto_auto]">
        <MainInfo gridPos={'col-start-1 col-end-2 row-start-1 row-end-2'} />
        <SideInfo
          gridPos={
            'col-start-2 col-end-3 row-start-1 row-end-6 max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-4 max-lg:row-end-5'
          }
        />
        <Stack gridPos={'col-start-1 col-end-2 row-start-2 row-end-3'} />
        <WorkExperience
          gridPos={'col-start-1 col-end-2 row-start-3 row-end-4'}
        />
        <Projects
          gridPos={
            'col-start-1 col-end-2 row-start-4 row-end-5 max-lg:row-start-5 max-lg:row-end-6'
          }
        />
      </div>
    </div>
  )
}

export default App
