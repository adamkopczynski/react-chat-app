import React from 'react'
import PropTypes from 'prop-types'
import Avatar from './Avatar'

const Message = ({message, author}) => {
  return(
    <div className='message my-message'>
        <div className='message__content-container'>
          <i className='message__username'>{author}:</i>
          <span className='message__content'>
            {message}
          </span>
        </div>
        <Avatar icon={author[0]} />
    </div>
  )
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Message
