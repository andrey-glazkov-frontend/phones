import { useState } from 'react'

export function Search() {
  const { input, SetInput } = useState('')

  return (
    <form>
      <div className="mb-3">
        <input type="text" placeholder="Search" value={input} onChange={(e) => SetInput(e.target.value)} />

      </div>

    </form>

  )
}
