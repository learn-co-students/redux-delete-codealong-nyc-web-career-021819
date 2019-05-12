import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  renderTodos = () => this.props.todos.map(todo => <Todo delete={this.props.delete} key={todo.id} todo={todo} />)

  render() {
    return(
      <div>
        {this.props.todos.length > 0 ? this.renderTodos() : null}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    todos: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delete: todoID => dispatch({type: 'DELETE_TODO', payload: todoID })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
