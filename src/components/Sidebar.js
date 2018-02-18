import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  users: state.users.usersList
})

const Sidebar = ({users}) => {
    return(
      <aside className="sidebar">
        <ul>
          {users ? users.map(user =>
              <li key={user.id}> {user.name} </li>
          ) : 'Empty room'}
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
