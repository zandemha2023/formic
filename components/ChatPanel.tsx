import { useState } from 'react'

export default function ChatPanel() {
  const [open, setOpen] = useState(true)
  const width = open ? 'w-64' : 'w-10'

  return (
    <div className={`bg-gray-100 border-l h-full flex flex-col ${width}`}>
      <button className="p-2" onClick={() => setOpen(!open)}>
        {open ? '>' : '<'}
      </button>
      {open && (
        <div className="p-4 flex-1">
          <p>Ask Formic something…</p>
        </div>
      )}
    </div>
  )
}
