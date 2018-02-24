import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addMessage } from '../actions/chatActions'

const mapDispatchToProps = dispatch => ({
  addMsg: (message, author) => {
    dispatch(addMessage(message, author))
  }
})

const NewMessage = (props) => {
  let input
    return(
      <section className="new-message">
        <input
          type='text'
          placeholder='New message...'
          onKeyPress = {
            (e) => {
              if(e.key === 'Enter'){
                e.preventDefault()
                props.addMsg(input.value, 'Me')
                input.value = ''
              }
            }
          }
          ref = {node => {
            input = node
          }}
        />
      </section>
    );
}

NewMessage.propTypes = {
  addMsg: PropTypes.func.isRequired
}

export default connect(() => ({}),mapDispatchToProps)(NewMessage);
