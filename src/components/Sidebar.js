import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import User from './User'

const mapStateToProps = state => ({
  users: state.users.usersList
})

const Sidebar = ({users}) => {
    return(
      <aside className="sidebar">
        <ul>
          {users.map(user =>
              <User key={user.id} name={user.name} />
          )}
        </ul>
      </aside>
    )
}

Sidebar.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default connect(mapStateToProps)(Sidebar)
