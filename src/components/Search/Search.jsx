import { useState } from 'react'

export function Search() {
  const { input, SetInput } = useState('')

  return (
    <form>
      <div className=" input-group input-group-lg">
        <input className="form-control" type="text" placeholder="Search..." value={input} onChange={(e) => SetInput(e.target.value)} />

      </div>

    </form>

  )
}
