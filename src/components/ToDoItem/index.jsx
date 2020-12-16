import React from 'react';

import {Tag, Button, Popconfirm, Switch, Tooltip} from 'antd';
import {CloseOutlined, CheckOutlined} from '@ant-design/icons';
import { List } from 'antd';
import {tagStyle} from './style'
import './style.css'

export const TodoItem = ({
    // arg
    todo,
    onTodoRemove,
    onTodoToggle: onTodoToggle
}) => {


    return (<List.Item        
        actions = {[
            <Tooltip title={todo.completed ? 'Completed' : 'Uncompleted'}>
          
                <Switch 
                    checkedChildren = {<CheckOutlined/>}
                    unCheckedChildren ={<CloseOutlined/>}
                    defaultChecked = {todo.completed}
                    onChange = {()=> onTodoToggle(todo)}
                    />
                
            </Tooltip>,
            <Popconfirm 
                title = "u realy want delete task?"
                onConfirm = {()=>onTodoRemove(todo)}
                okText = "yes"
                cancelText = "no"
            >
                    <Button type='primary' danger><CloseOutlined/></Button>
            </Popconfirm>
       ]}
        key = {todo.id}
        >
            <div>
                <Tag className={ (todo.name.length > 10 ) && 'orangeText'} color={todo.completed ? 'cyan':'red'} style ={tagStyle.tag}>
                   {todo.name}
                </Tag>
            </div>

        </List.Item>
    )
}
