import { useUsersContext } from '../../contexts/userContext/userContextProvider'
import { UsersListItem } from '../UsersListItem/UsersListItem'

export function UsersList() {
  const { users } = useUsersContext()

  if (!users.length) return <div>User list is empty</div>

  return (
    <ul className="list-group list-group-flush">
      {users.map((user) => (
        <UsersListItem
          firstName={user.firstName}
          lastName={user.lastName}
          key={user.id}
          id={user.id}
        />
      ))}
    </ul>
  )
}
