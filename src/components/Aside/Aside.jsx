/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import { SearchBar } from '../SearchBar/SearchBar'
import stylesAside from './styles.module.scss'

export function Aside() {
  return (
    <aside className={stylesAside.Aside}>
      <SearchBar />
    </aside>
  )
}
