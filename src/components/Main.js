import React from 'react';
import ReactDom from 'react-dom';
import TodoHeaderContainer from '../containers/TodoHeaderContainer';
import TodoListContainer from '../containers/TodoListContainer';
const Main=()=>(
    <div>
       <TodoHeaderContainer />
       <TodoListContainer />
    </div>
	);
export default Main;