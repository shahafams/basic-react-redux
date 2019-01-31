import React from 'react';
import { connect } from 'react-redux'
import { toggle } from '../actions/Todo'
import PropTypes from "prop-types";

class Todo extends React.Component {

    render() {
        return (
            <li>
                <input type="checkbox"
                       checked={this.props.todo.completed}
                       onChange={() => {
                           this.props.toggle(this.props.todo.id)
                       }}/>
                <label>{this.props.todo.label}</label>
            </li>
        )
    }
}

Todo.prototypes = {
    todo: PropTypes.object.isRequired
};

const mapDispatchToProps = {
    toggle
};
export default connect(null, mapDispatchToProps)(Todo);