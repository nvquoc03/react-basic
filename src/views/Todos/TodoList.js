import React from 'react';
import AddTodoList from './AddTodoList';
import './TodoList.scss'

import { toast } from 'react-toastify';

class TodoList extends React.Component {

    state = {
        todoLists: [
            { id: 'todo1', title: 'Studying code' },
            { id: 'todo2', title: 'Reading book' },
            { id: 'todo3', title: 'Running' }
        ]
    }

    addNewTodo = (todo) => {
        console.log('check job from parent: ', todo)
        this.setState({
            todoLists: [...this.state.todoLists, todo]
        })

        toast.success('Wow so easy!')

    }



    render() {

        let { todoLists } = this.state

        return (


            <div className='todo-list-container'>
                <AddTodoList
                    addNewTodo={this.addNewTodo}
                />
                <div className='todo-content'>
                    {todoLists && todoLists.length > 0 &&
                        todoLists.map((item, index) => {
                            return (
                                <div className='todo-child' key={item.id}>
                                    <span> {index + 1} - {item.title} </span>
                                    <button className='edit-btn'>Edit</button>
                                    <button className='delete-btn'>Delete</button>
                                </div>
                            )

                        })
                    }


                </div>
            </div>

        )
    }
}

export default TodoList;