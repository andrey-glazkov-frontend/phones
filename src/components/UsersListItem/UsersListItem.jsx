import { Link } from 'react-router-dom'

export function UsersListItem({ firstName, lastName, id }) {
  return (
    <li>
      <Link to={`/users/${id}`}>
        {firstName || 'Ivan'}
        {' '}
        {lastName || 'Ivanov'}
      </Link>
    </li>
  )
}
