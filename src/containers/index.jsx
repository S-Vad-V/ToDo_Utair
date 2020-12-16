import React from 'react';
import _ from 'lodash'

import { Row, Col, Card, PageHeader, message} from 'antd';

import AddToDoForm from '../components/AddToDoForm/AddToDoForm';
import {addTodo, removeTodo, toogleTodo } from '../store/actions/todo.actions';
import {useDispatch, useSelector} from 'react-redux';
import { TodoList } from '../components/ToDoList';

export const TodoContainers = () => {

    const isTodoEmpty = (todo) =>{
        return !_.isEmpty (todo.name) && _.trim(todo.name).length > 0
    }

    const todos = useSelector((state)=>state.todo.todos)
    const dispatch = useDispatch();

    const handlerFormSubmit = (todo) => {

        isTodoEmpty(todo) && dispatch(addTodo(todo)); 

        isTodoEmpty(todo) ?
            message.success(`Todo added successful ${todo.name}`)
            : message.error("Todo is empty"); 


    }
    const handlerRemoveTodo = (todo) => {
        dispatch(removeTodo(todo));  
    }
    const handlerToogleTodo = (todo) => {
        dispatch(toogleTodo(todo));  
    }

    return(
      <Row
      justify='center'
      align = 'middle'>
          <Col xs ={24} xs={{span:14}}>
                <PageHeader 
                    title = "Add Todo"
                    subTitle = "Please, add what u want..."
                />
          </Col>
          <Col xs ={24} xs={{span:14}}>
                <Card>
                    <AddToDoForm onFormSubmit = {handlerFormSubmit} />
                </Card>
          </Col>
          <Col xs ={24} xs={{span:14}}>
                <TodoList 
                    todos = {todos} 
                    onTodoRemove = {handlerRemoveTodo} 
                    onTodoToggle = {handlerToogleTodo}
                />
          </Col>
      </Row>  
      
    );
}
