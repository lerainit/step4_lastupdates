import React from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from 'yup'
import { addCommentsAC, setCommentsAC } from "../../store/comments/actionCreators";
import { setCards } from "../../store/cards/actions";
import styles from './commentsForm.module.scss'
import { setComments } from "../../store/comments/actions";



const CommentsForm = (props) => {
  const dispatch = useDispatch()

  const comments = useSelector(store => store.comments.value)
  const users = useSelector(store => store.users.value)
  const authIndex = users.findIndex(({ isAuth }) => isAuth === true)

  let initialValues = {
    comment: '',

  }
  const validationSchema = yup.object().shape({
    comment: yup.string()
      .min(3, 'Min 3 symbols')
      .max(12, 'Max 30 symbols')
      .required('Text is required'),

  })
  return (

    <Formik
      initialValues={initialValues}

      validationSchema={validationSchema}
      onSubmit={async (values, FormikProps) => {
    
        fetch(`${process.env.REACT_APP_API_URL_POSTS}/comments/${props.index}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ comment: { userIndex: authIndex, text: values.comment, isVisible: false }, userIndex: props.userIndex, userId: props.userId })
        }).then(res => res.json())

        await dispatch(setCommentsAC())
        dispatch(addCommentsAC({ comment: { userIndex: authIndex, text: values.comment, isVisible: false }, userIndex: props.userIndex, index: props.index, comments: comments }))
        dispatch({ type: setComments, payload: comments })

        dispatch({ type: setCards })

      }}

    >
      {({ dirty, isValid }) => {

        return (
          <Form >

            <Field className={styles.form}
              type='text'
              name='comment'
              placeholder='Add comment'

            />
            <ErrorMessage name="comment">{msg => <span className='error'>{msg}</span>}</ErrorMessage>

            <button className={styles.form_button} disabled={!dirty || !isValid} type="submit">Post</button>

          </Form>

        )
      }
      }
    </Formik>
  )
}
export default CommentsForm
