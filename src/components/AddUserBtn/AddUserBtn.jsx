import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useUsersContext } from '../../contexts/userContext/userContextProvider'

export function AddUserBtn() {
  const { addNewUser } = useUsersContext()

  const navigate = useNavigate()

  const clickHandler = () => {
    const newUser = {
      id: uuidv4(),
      firstName: '',
      lastName: '',
      nickName: '',
      favourite: false,
      description: '',
      email: '',
      avatar: '',
    }

    addNewUser(newUser)

    // redirect на страницу с редактированием только что созданного пользователя
    navigate(`/users/${newUser.id}/edit`)
  }

  return (
    <div className="ms-2">
      <button onClick={clickHandler} type="button" className="btn btn-primary">Add</button>
    </div>
  )
}
