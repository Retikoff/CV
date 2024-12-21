export default function ListOfContent({ title, subtitle, content }) {
  return (
    <div>
      <p className="text-2xl font-semibold text-violet-500">{title}</p>
      <p className="text-lg font-semibold">{subtitle ?? subtitle}</p>
      <ul>
        {content.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
    </div>
  )
}
