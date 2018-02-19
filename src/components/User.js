import React from 'react'
import PropTypes from 'prop-types'

import Avatar from './Avatar'

const User = ({name}) => {
  return(
    <li>
      <div className='user'>
        <Avatar icon={name[0].toUpperCase()} />
        <span>{name}</span>
      </div>
    </li>
  )
}

User.propTypes = {
  name: PropTypes.string.isRequired
}

export default User
