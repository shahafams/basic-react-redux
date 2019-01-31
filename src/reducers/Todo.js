import * as consts from '../actions/actions-types'

const initialState = {
    todos: [
        { id: 1, completed: true, label: 'Convert to JSX' },
        { id: 2, completed: true, label: 'Divide into Components' },
        { id: 3, completed: false, label: 'Make list dynamic' },
        { id: 4, completed: false, label: 'Add interactions' }
    ],
    idKey: 4
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case consts.ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat({ id: state.idKey + 1, completed: false, label: action.label }),
                idKey: state.idKey + 1
            }
        case consts.TOGGLE:
            return {
                ...state,
                todos: state.todos.map((todo) => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo)
            }
        default:
            return state
    }
}

export default reducer