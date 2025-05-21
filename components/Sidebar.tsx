export default function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-60 p-4 h-full">
      <h2 className="text-lg font-semibold mb-4">Campaigns</h2>
      <ul className="space-y-2">
        <li className="hover:underline cursor-pointer">Campaign A</li>
        <li className="hover:underline cursor-pointer">Campaign B</li>
      </ul>
    </aside>
  )
}
