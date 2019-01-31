import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions/Todo'


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="What needs to be done?"
                       value={this.state.title}
                       onChange={(event) => this.setState({title: event.target.value})}/>
            </form>
        )
    }
}

const mapDispatchToProps = {
    addTodo
};

export default connect(null, mapDispatchToProps)(Header);