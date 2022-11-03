
import React from 'react'
import styles from './userCard.module.scss'
import { useDispatch } from 'react-redux';
import { openModalAC } from '../../store/modal/actionCreators';
import PropTypes from 'prop-types'
import { renderBackgroundAC } from '../../store/cardBackground/actionCreators';
import { hideBackgroundAC } from '../../store/cardBackground/actionCreators';
import Background from './background';
import { setProductsAC } from '../../store/products/actionCreator';
import { setUserIndexAC } from '../../store/userIndex/actionCreators'
import { setCommentsAC } from '../../store/comments/actionCreators';


const Card = ({ userPosts, userIndex, id, index, background, url }) => {

  const dispatch = useDispatch();

  let storeBackground = background


  return (
    <>
      <div data-id={id} onMouseEnter={() => {
        dispatch(renderBackgroundAC({ index: index, userIndex: userIndex, background: background }))

        dispatch(setProductsAC())
      }} onMouseLeave={() => {

        dispatch(hideBackgroundAC({ index: index, userIndex: userIndex, background: background }))

        dispatch(setProductsAC())
      }}
        className={styles.img_container}>

        <img className={styles.image} src={url} alt='Product ' data-id={id} />
        {storeBackground &&
          <Background handleClick={() => {
            dispatch(openModalAC())
            dispatch(setCommentsAC())
            dispatch(setUserIndexAC(userIndex))
            dispatch({ type: 'SET_VALUE_INDEX', payload: index })
          }
          } comments={userPosts[index].comments} index={index} userIndex={userIndex} />

        }

      </div>

    </>
  )
}
Card.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  url: PropTypes.string,
  art: PropTypes.number,
  id: PropTypes.number,
  fill: PropTypes.string

}
Card.defaultProps = {

  name: 'Product name',
  price: 0,
  url: '',
  art: 0,
  id: -1,
  fill: '#fff'

}
export default Card; 