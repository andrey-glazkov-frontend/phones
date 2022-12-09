import { useEffect, useState } from 'react'

const USERS_LS_KEY = 'users_ls_key'

export function useUsers() {
  const [users, setUsers] = useState(() => {
    const usersFromLS = window.localStorage.getItem(USERS_LS_KEY)

    return usersFromLS ? JSON.parse(usersFromLS) : []
  })

  useEffect(() => {
    window.localStorage.setItem(USERS_LS_KEY, JSON.stringify(users))
  }, [users])

  const addNewUser = (newUser) => {
    setUsers((prev) => [newUser, ...prev])
  }

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id))
  }

  const favouriteUser = (id) => {
    setUsers((prev) => prev.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          favourite: !user.favourite,
        }
      }
      return user
    }))
  }

  const editUser = (id, newUserInfo) => {
    setUsers((prev) => prev.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          ...newUserInfo,
        }
      }

      return user
    }))
  }

  const getUserById = (id) => users.find((user) => user.id === id)

  console.log({ users })

  return {
    users,
    addNewUser,
    getUserById,
    deleteUser,
    editUser,
    favouriteUser,
  }
}
