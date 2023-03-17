import React from 'react';
import { toast } from 'react-toastify';




class AddTodoList extends React.Component {

    state = {
        title: ''
    }

    handleChangeTodo = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAddTodo = () => {
        if (!this.state.title) {
            toast.error('Pls again!')
            return;
        }

        console.log('Input is: ', this.state)

        let todo = {
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
        }

        this.props.addNewTodo(todo);

        this.setState({
            title: ''
        })
    }
    render() {

        let { title } = this.state

        return (
            <div className='add-todo'>
                <input type='text' value={title}
                    onChange={(event) => this.handleChangeTodo(event)} />
                <button className='add-btn' type='button'
                    onClick={() => this.handleAddTodo()}>
                    Add
                </button>
            </div>
        )
    }
}

export default AddTodoList;