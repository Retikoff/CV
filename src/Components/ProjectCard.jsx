export default function ProjectCard({ image, heading, description, link }) {
  return (
    <div className="flex flex-row gap-3 border-2 rounded-md max-lg:flex-col max-lg:items-center max-lg:w-full">
      <img src={image} className="w-96 border-2 border-slate-600 rounded-md" />
      <div className="flex flex-col justify-between gap-1 max-lg:items-center">
        <p className="text-xl font-semibold py-1">{heading}</p>
        <p className="px-2">{description}</p>
        <a
          className="italic flex flex-row items-center gap-1 py-2"
          target="_blank"
          href={link}
        >
          {gitHubLogo} Code
        </a>
      </div>
    </div>
  )
}

const gitHubLogo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-github"
    viewBox="0 0 16 16"
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
  </svg>
)
