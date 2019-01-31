import * as consts from './actions-types'

export const addTodo = (label) => ({
        type: consts.ADD_TODO,
        label
})

export const toggle = (id) => ({
    type: consts.TOGGLE,
    id
})

