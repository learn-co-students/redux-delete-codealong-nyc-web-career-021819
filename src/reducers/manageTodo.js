export default function manageTodo(state = [], action) {

  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload]

    case 'DELETE_TODO':
      let updatedTodos = state.filter(todo => todo.id !== action.payload)
      return [...updatedTodos]

    default:
      return state;
  }
}
