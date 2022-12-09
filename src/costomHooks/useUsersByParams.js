import { useParams } from 'react-router-dom'
import { useUsersContext } from '../contexts/userContext/userContextProvider'

export const useUsersBuParams = () => {
  const { userId } = useParams()

  const { getUserById } = useUsersContext()

  return getUserById(userId)
}
