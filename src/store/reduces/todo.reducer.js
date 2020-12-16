import {TODO_CONSTANTS } from '../constants';
import {v1 as uuidV1} from 'uuid';
import { bindActionCreators } from 'redux';

const initialState = {
    todos: [

    ]
};

export const todoReducer = (state=initialState, action)=>{
    switch(action.type){
        // Добавили запись
        case TODO_CONSTANTS.ADD_TODO_SUCCESS:
            return Object.assign({},state,{
                todos: state.todos.concat({
                    ...action.payload,
                    ...{
                        id:uuidV1()
                    },
                    completed:0
                })
            })

        case TODO_CONSTANTS.REMOVE_TODO_SUCCESS:
            return {
                ...state,
                todos: state.todos.filter((todo)=> todo.id !== action.todo_id)
            }

        case TODO_CONSTANTS.TOOGGLE_TODO_SUCCESS:
            return {
                ...state,
                todos: state.todos.map((todo)=>{
                    return todo.id === action.todo_id ? {
                        ...todo, 
                        completed:!todo.completed
                    } : todo
                })
            }

        default:
            return state;
    }
}