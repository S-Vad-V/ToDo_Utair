import { TODO_CONSTANTS} from '../constants'

export function addTodo(todo){
    return{
        type:TODO_CONSTANTS.ADD_TODO_SUCCESS,
        payload:todo
    }
}

export function removeTodo(todo){
    return {
        type: TODO_CONSTANTS.REMOVE_TODO_SUCCESS,
        todo_id:todo.id
    }
}

export function toogleTodo(todo){
    return {
        type: TODO_CONSTANTS.TOOGGLE_TODO_SUCCESS,
        todo_id:todo.id
    }
}