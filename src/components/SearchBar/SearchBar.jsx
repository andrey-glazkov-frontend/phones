import { AddUserBtn } from '../AddUserBtn/AddUserBtn'
import { Search } from '../Search/Search'

/* eslint-disable linebreak-style */
export function SearchBar() {
  return (
    <div className="d-flex justify-content-center align-items-center py-5">
      <Search />
      <AddUserBtn />
    </div>
  )
}
