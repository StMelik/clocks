import './SelectZone.css'

function SelectZone({ timeZones, ...props }) {
  return (
    <select className="select__zone" name="zone" {...props}>
      {timeZones.map(({ name, timezone }, i) => (
        <option key={i} value={timezone}>
          {name}
        </option>
      ))}
    </select>
  )
}

export default SelectZone
