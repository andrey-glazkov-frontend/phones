import { useState } from 'react'

export function useUsers() {
  const [users, setUsers] = useState()

  const addNewUser = (newUser) => {
    setUsers((prev) => [newUser, ...prev])
  }

  return {
    users,
    addNewUser,
  }
}
