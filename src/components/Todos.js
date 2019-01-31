import React from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class Todos extends React.Component {
    render() {
        return (
            <div>
                <ul style={{listStyle: 'none'}}>{
                    this.props.todos.Todo.todos.map(todo => <Todo key={todo.id} todo={todo}/>)
                }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    todos: state
});
export default connect(mapStateToProps, null)(Todos);