export default function TopBar() {
  const filters = ['Campaign', 'Channel', 'Timeframe', 'Outcome']
  return (
    <header className="flex space-x-4 p-4 border-b bg-white">
      {filters.map((f) => (
        <select key={f} className="border rounded p-2">
          <option>{f}</option>
        </select>
      ))}
    </header>
  )
}
