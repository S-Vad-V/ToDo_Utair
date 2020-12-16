import React from 'react';
import {List} from 'antd';
import {TodoItem} from '../ToDoItem'

export const TodoList = ({todos,onTodoRemove, onTodoToggle}) =>{
    
    console.log(todos);
    return(
    <List
        dataSource = {todos}
        renderItem = {todo =>(
                <TodoItem todo = {todo}  onTodoRemove = {onTodoRemove} onTodoToggle = {onTodoToggle}/>
            )
        }
        locale ={{ //если список пусть, то вывести
            emptyText:"We aren't having tasks",
        }}
        pagination = {{
            position: 'bottom',
            pageSize: 5
        }}
    />
    )
}
