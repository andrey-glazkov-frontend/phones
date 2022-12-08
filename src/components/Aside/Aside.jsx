/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import { SearchBar } from '../SearchBar/SearchBar'
import { UsersList } from '../UserList/UsersList'
import stylesAside from './styles.module.scss'

export function Aside() {
  return (
    <aside className={stylesAside.Aside}>
      <SearchBar />
      <hr />
      <UsersList />
    </aside>
  )
}
