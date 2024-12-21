import ListOfContent from './ListOfContent'

export default function SideInfo({ gridPos }) {
  return (
    <div className={'flex flex-col gap-2 p-6 ' + gridPos}>
      <div className="flex flex-col gap-16 max-lg:gap-8">
        <ListOfContent title="Location" content={LOCATION_CONTENT} />
        <ListOfContent
          title="Education"
          subtitle={
            <a href="https://bsu.by/en/" target="_blank">
              Belarusian State University
            </a>
          }
          content={EDUCATION_CONTENT}
        />
        <ListOfContent title="Languages" content={LANGUAGES_CONTENT} />
        <ListOfContent title="Contacts" content={CONTACTS_CONTENT} />
      </div>
    </div>
  )
}

const LOCATION_CONTENT = [
  <p className="flex flex-row items-center gap-2">
    <svg
      className="w-4 h-4"
      enableBackground="new 0 0 512 512"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="256" cy="256" fill="#fcfcfc" r="256" />
      <g fill="#a2001d">
        <path d="m105.739 237.449-27.826-50.483 27.826-49.691 27.826 49.691z" />
        <path d="m50.087 237.449-27.826-50.483 27.826-49.691 27.826 49.691z" />
        <path d="m105.739 374.725-27.826-50.483 27.826-49.691 27.826 49.691z" />
        <path d="m50.087 374.725-27.826-50.483 27.826-49.691 27.826 49.691z" />
        <path d="m133.565 49.692-7.878-14.068c-14.13 8.372-27.383 18.065-39.594 28.909l19.646 35.641z" />
        <path d="m105.739 411.826-19.854 35.456c12.2 10.858 25.444 20.566 39.568 28.955l8.113-14.719z" />
      </g>
      <path
        d="m155.826 322.783v168.863c30.769 13.097 64.622 20.354 100.174 20.354 110.071 0 203.906-69.472 240.077-166.957z"
        fill="#6da544"
      />
      <path
        d="m496.077 345.043c10.291-27.733 15.923-57.729 15.923-89.043 0-141.384-114.616-256-256-256-35.549 0-69.405 7.253-100.174 20.348v324.696h340.251z"
        fill="#a2001d"
      />
    </svg>
    Minsk, Belarus
  </p>,
]

const EDUCATION_CONTENT = [
  'Faculty: Mechanics and Mathematics',
  'Specialty: Mathematics and Computer Science',
  <a
    href="https://mmf.bsu.by/en/bachelors-programs/mathematics-and-computer-science-mathematical-and-software-of-mobile-devices/"
    target="_blank"
  >
    Profiling: Mathematical and software of mobile devices
  </a>,
]

const CONTACTS_CONTENT = [
  <a href="https://t.me/rotikoff812" target="_blank">
    Telegram: @rotikoff812
  </a>,
  <a href="mailto:retikovandrei@gmail.com">Email: retikovandrei@gmail.com</a>,
  <a href="https://github.com/Retikoff" target="_blank">
    GitHub: Retikoff
  </a>,
]

const LANGUAGES_CONTENT = [
  <p className="flex flex-row items-center gap-2">
    <svg
      className="w-4 h-4"
      enableBackground="new 0 0 512 512"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="256" cy="256" fill="#f0f0f0" r="256" />
      <path
        d="m496.077 345.043c10.291-27.733 15.923-57.729 15.923-89.043s-5.632-61.31-15.923-89.043h-480.154c-10.29 27.733-15.923 57.729-15.923 89.043s5.633 61.31 15.923 89.043l240.077 22.261z"
        fill="#0052b4"
      />
      <path
        d="m256 512c110.071 0 203.906-69.472 240.077-166.957h-480.154c36.171 97.485 130.006 166.957 240.077 166.957z"
        fill="#d80027"
      />
    </svg>
    Russian (Native)
  </p>,
  <p className="flex flex-row items-center gap-2">
    <svg
      className="w-4 h-4"
      enableBackground="new 0 0 512 512"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="256" cy="256" fill="#f0f0f0" r="256" />
      <g fill="#0052b4">
        <path d="m52.92 100.142c-20.109 26.163-35.272 56.318-44.101 89.077h133.178z" />
        <path d="m503.181 189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075 89.076z" />
        <path d="m8.819 322.784c8.83 32.758 23.993 62.913 44.101 89.075l89.074-89.075z" />
        <path d="m411.858 52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177z" />
        <path d="m100.142 459.079c26.163 20.109 56.318 35.272 89.076 44.102v-133.176z" />
        <path d="m189.217 8.819c-32.758 8.83-62.913 23.993-89.075 44.101l89.075 89.075z" />
        <path d="m322.783 503.181c32.758-8.83 62.913-23.993 89.075-44.101l-89.075-89.075z" />
        <path d="m370.005 322.784 89.075 89.076c20.108-26.162 35.272-56.318 44.101-89.076z" />
      </g>
      <g fill="#d80027">
        <path d="m509.833 222.609h-220.44-.001v-220.442c-10.931-1.423-22.075-2.167-33.392-2.167-11.319 0-22.461.744-33.391 2.167v220.44.001h-220.442c-1.423 10.931-2.167 22.075-2.167 33.392 0 11.319.744 22.461 2.167 33.391h220.44.001v220.442c10.931 1.423 22.073 2.167 33.392 2.167 11.317 0 22.461-.743 33.391-2.167v-220.44-.001h220.442c1.423-10.931 2.167-22.073 2.167-33.392 0-11.317-.744-22.461-2.167-33.391z" />
        <path d="m322.783 322.784 114.236 114.236c5.254-5.252 10.266-10.743 15.048-16.435l-97.802-97.802h-31.482z" />
        <path d="m189.217 322.784h-.002l-114.235 114.235c5.252 5.254 10.743 10.266 16.435 15.048l97.802-97.804z" />
        <path d="m189.217 189.219v-.002l-114.236-114.237c-5.254 5.252-10.266 10.743-15.048 16.435l97.803 97.803h31.481z" />
        <path d="m322.783 189.219 114.237-114.238c-5.252-5.254-10.743-10.266-16.435-15.047l-97.802 97.803z" />
      </g>
    </svg>
    English (B2)
  </p>,
]
