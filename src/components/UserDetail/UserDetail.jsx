import { useMemo } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useUsersContext } from '../../contexts/userContext/userContextProvider'
import { useUsersBuParams } from '../../costomHooks/useUsersByParams'
import noAvatar from './assets/no_avatar.png'
import userDetailStyles from './userDetail.module.scss'

export function UserDetail() {
  const currentUser = useUsersBuParams()

  const { deleteUser, favouriteUser } = useUsersContext()

  const navigate = useNavigate()

  if (!currentUser) return <Navigate to="/" />

  const displayName = currentUser.firstName && currentUser.lastName ? `${currentUser.firstName} ${currentUser.lastName}` : 'Имя пользователя не задано'

  const deleteHandler = () => {
    deleteUser(currentUser.id)
    navigate('/')
  }

  const favouriteHandler = () => {
    favouriteUser(currentUser.id)
  }

  const isFav = currentUser.favourite

  const showUserFields = useMemo(() => {
    const {
      id, avatar, firstName, lastName, favourite, ...keysForShow
    } = currentUser

    return Object.keys(keysForShow)
      .filter((key) => !!currentUser[key])
      .map((key) => (
        <p key={key}>
          <b>
            {key}
            :
          </b>

          {' '}
          {currentUser[key]}
        </p>
      ))
  }, [currentUser])

  return (
    <div className="d-flex ">

      <div className="d-flex flex-column me-3">
        <img alt="avatar" className={`${userDetailStyles.avatar} mb-2`} src={noAvatar} />
        <button onClick={favouriteHandler} type="button" className={`btn btn-${isFav ? 'danger' : 'success'}`}>
          {isFav ? '!Favourite' : 'Favourite' }
        </button>
      </div>

      <div className={userDetailStyles.infoBlock}>
        <h2>{displayName}</h2>
        {showUserFields}

        <div>
          <Link className="btn btn-primary mx-2" to="edit">Edit</Link>
          <button onClick={deleteHandler} type="button" className="btn btn-danger mx-2">Delete</button>
        </div>

      </div>
    </div>
  )
}
