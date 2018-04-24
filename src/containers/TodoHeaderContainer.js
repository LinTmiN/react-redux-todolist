import { connect } from 'react-redux';
import TodoHeader from '../components/todoheader';

import { changeText , createTodo} from '../actions';
export default connect(
	(state)=>({
		todo:state.getIn(['tododata','todo'])
	}),
	(dispatch)=>({
		onChangeText:(event)=>(
		    dispatch(changeText({text:event.target.value}))
		),
		onCreateTodo:()=>{
			dispatch(createTodo());
			dispatch(changeText({text:''}));
		}
	})
)(TodoHeader);