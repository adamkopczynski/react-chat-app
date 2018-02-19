import React from 'react';
import PropTypes from 'prop-types'

const Avatar = ({icon}) => {
  return(
    <div className='avatar'>{icon}</div>
  )
}

Avatar.propTypes = {
  icon: PropTypes.string.isRequired
}

export default Avatar
