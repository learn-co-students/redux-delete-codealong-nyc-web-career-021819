import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo({id: uuid(), text: this.state.text})
    this.setState({text: ''})
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
    	    <label>add todo</label>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text}/>
          <input type="submit" />
       </form>
     </div>
   );
  }
};

const mapDispatchToProps = dispatch => ({
  addTodo: newTodo => dispatch({ type: 'ADD_TODO', payload: newTodo })
})

export default connect(null, mapDispatchToProps)(CreateTodo);
