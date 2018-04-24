import { connect } from 'react-redux';
import TodoList from '../components/todolist'

import { deleteTodo } from '../actions'

export default connect(
     (state)=>({
		todos:state.getIn(['tododata','todos'])
	}),
  (dispatch)=>({
  	onDeleteTodo:({index})=>()=> (
  		dispatch(deleteTodo({index}))
  	)
  })
)(TodoList)