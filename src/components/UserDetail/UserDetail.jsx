import { Link, useParams } from 'react-router-dom'
import { useUsersContext } from '../../contexts/userContext/userContextProvider'

export function UserDetail() {
  const { userId } = useParams()

  const { getUserById } = useUsersContext()

  const currentUser = getUserById(userId)

  return (
    <div>
      UserDetail

      {
          JSON.stringify(currentUser)
        }
      <Link to="edit">Edit</Link>
    </div>
  )
}
