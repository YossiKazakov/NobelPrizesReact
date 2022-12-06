import Laureate from "./laureate";

export default function LaureatesList({ laureates }) {
  return (
    <div className="row">
      {laureates.map(laureate => {
        return <Laureate key={laureate.name} laureate={laureate} />
      })}
    </div>
  )
}
