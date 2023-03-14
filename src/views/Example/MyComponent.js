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
    render() {

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
            </>
        )
    }
}

export default MyComponent;