import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message'
import MyMessage from './MyMessage'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  messages: state.messages.messagesList
})

class MessagesList extends React.Component{
    componentWillReceiveProps(){
      let msg = document.querySelector('.messages')
      msg.scrollTop = msg.scrollHeight
    }
    render(){
      return(
        <div className="messages">
          {this.props.messages.map(msg =>
            msg.author === 'Me'?
            <MyMessage
              key = {msg.id}
              message = {msg.message}
              author = {msg.author}
            /> :
            <Message
              key = {msg.id}
              message = {msg.message}
              author = {msg.author}
            />
          )}
        </div>
      )
    }
}

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default connect(mapStateToProps, {})(MessagesList)
