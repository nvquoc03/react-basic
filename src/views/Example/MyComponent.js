import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'VQ',
        age: '20'

    }

    handleOnChangeName = (event) => {

        this.setState({
            name: event.target.value
        })
    }

    handleOnClick = () => {
        alert('Clicked!')
    }

    render() {
        console.log('call render: ', this.state)

        return (
            <>
                <div className='first'>
                    <input value={this.state.name} type='text'
                        onChange={(event) => this.handleOnChangeName(event)} />
                    My name is {this.state.name}
                </div>
                <div className='second'>
                    and I am {this.state['age']} years old
                </div>
                <div className='third'>
                    <button onClick={() => this.handleOnClick()}>Click me</button>
                </div>
            </>
        )
    }
}

export default MyComponent;