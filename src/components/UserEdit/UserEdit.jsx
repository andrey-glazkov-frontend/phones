import * as Yup from 'yup'
import {
  Form, Formik, Field, ErrorMessage,
} from 'formik'
import { Navigate, useNavigate } from 'react-router-dom'
import { useUsersBuParams } from '../../costomHooks/useUsersByParams'
import editUsersStyles from './userEdit.module.scss'
import { REQUIRED_ERROR_MESSAGE } from './constants'
import { useUsersContext } from '../../contexts/userContext/userContextProvider'

export function UserEdit() {
  // const { userId } = useParams()

  // const { getUserById } = useUsersContext()
  const navigate = useNavigate()

  // const currentUser = getUserById(userId)

  // if (!currentUser) return <Navigate to="/" />

  // // useEffect(() => {
  // //   if (!currentUser) {
  // //     navigate('/')
  // //   }
  // // }, [currentUser])
  const currentUser = useUsersBuParams()
  const { editUser } = useUsersContext()
  if (!currentUser) return <Navigate to="/" />
  const { id, ...initialValues } = currentUser

  return (
    <div>
      <h2>Редактирование</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object(
          {
            firstName: Yup.string()
              .min(2, 'Укажите минимум два символа')
              .max(20, 'Не более 20 символов')
              .required(REQUIRED_ERROR_MESSAGE),
            lastName: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required(REQUIRED_ERROR_MESSAGE),
            email: Yup.string().email('Invalid email address').required(REQUIRED_ERROR_MESSAGE),
          },
        )}
        onSubmit={(values) => {
          editUser(id, values)
          navigate(`/users/${id}`)
        }}
      >
        <Form className={editUsersStyles.editForm}>
          <Field name="firstName" placeholder="Имя" type="text" />
          <ErrorMessage component="span" className={editUsersStyles.error} name="firstName" />

          <Field name="lastName" placeholder="Фамилия" type="text" />
          <ErrorMessage component="span" className={editUsersStyles.error} name="lastName" />

          <Field name="nickName" placeholder="Nick" type="text" />

          <Field name="description" placeholder="Описание" type="text" />

          <Field name="email" placeholder="Email" type="email" />
          <ErrorMessage component="span" className={editUsersStyles.error} name="email" />

          <Field name="avatar" placeholder="Url" type="text" />
          <ErrorMessage component="span" className={editUsersStyles.error} name="avatar" />

          <button type="submit" className="btn btn-primary">Update</button>
        </Form>
      </Formik>
    </div>
  )
}
