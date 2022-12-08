import { useState } from 'react'

export function useUsers() {
  const [users, setUsers] = useState([])

  const addNewUser = (newUser) => {
    setUsers((prev) => [newUser, ...prev])
  }

  const getUserById = (id) => users.find((user) => user.id === id)

  console.log({ users })

  return {
    users,
    addNewUser,
    getUserById,
  }
}
