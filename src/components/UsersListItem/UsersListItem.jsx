import { NavLink } from 'react-router-dom'

// export function UsersListItem({ firstName, lastName, id }) {
//   return (
//     <li>
//       <Link to={`/users/${id}`}>
//         {firstName || 'Ivan'}
//         {' '}
//         {lastName || 'Ivanov'}
//       </Link>
//     </li>
//   )
// }

export function UsersListItem({ firstName, lastName, id }) {
  return (
    <NavLink
      to={`/users/${id}`}
    >
      {({ isActive }) => (
        <li className={`list-group-item ${isActive && 'active'}`}>
          {firstName || 'Ivan'}
          {' '}
          {lastName || 'Ivanov'}
        </li>
      )}
    </NavLink>
  )
}
