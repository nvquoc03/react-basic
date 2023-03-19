import React from 'react';
import AddTodoList from './AddTodoList';
import './TodoList.scss';
import Color from '../HOC/Color';

import { toast } from 'react-toastify';

class TodoList extends React.Component {

    state = {
        todoLists: [
            { id: 'todo1', title: 'Studying code' },
            { id: 'todo2', title: 'Reading book' },
            { id: 'todo3', title: 'Running' }
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        console.log('check job from parent: ', todo)
        this.setState({
            todoLists: [...this.state.todoLists, todo]
        })

        toast.success('Wow so easy!')

    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.todoLists;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({
            todoLists: currentTodos
        })
        toast.info('Delete todo succeed!')
    }

    handleEditTodo = (todo) => {

        let { editTodo, todoLists } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;


        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {

            let todoListsCopy = [...todoLists];

            let objIndex = todoListsCopy.findIndex((item => item.id === todo.id));

            todoListsCopy[objIndex].title = editTodo.title;

            this.setState({
                todoLists: todoListsCopy,
                editTodo: {}
            })

            toast.info('Update succeed!')
            return;


        }

        //edit
        this.setState({
            editTodo: todo
        })
    }

    handleChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }



    render() {

        let { todoLists, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0;

        return (
            <>
                <p>Todo Apps From React with VQ</p>
                <div className='todo-list-container'>
                    <AddTodoList
                        addNewTodo={this.addNewTodo}
                    />
                    <div className='todo-content'>
                        {todoLists && todoLists.length > 0 &&
                            todoLists.map((item, index) => {
                                return (
                                    <div className='todo-child' key={item.id}

                                    >
                                        {isEmptyObj === true ?
                                            < span > {index + 1} - {item.title} </span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input value={editTodo.title}
                                                            onChange={(event) => this.handleChangeEditTodo(event)}
                                                        />
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item.title}
                                                    </span>
                                                }
                                            </>

                                        }

                                        <button className='edit-btn'
                                            onClick={() => this.handleEditTodo(item)}>
                                            {isEmptyObj === false && editTodo.id === item.id
                                                ? 'Save' : 'Edit'}

                                        </button>
                                        <button className='delete-btn'
                                            onClick={() => this.handleDeleteTodo(item)}>
                                            Delete
                                        </button>
                                    </div>
                                )

                            })
                        }

                    </div>
                </div >
            </>

        )
    }
}

export default Color(TodoList);