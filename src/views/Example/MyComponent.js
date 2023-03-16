import React from 'react';
import ChildComponent from './ChildComponents';


class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500' },
            { id: 'abcJob2', title: 'Coders', salary: '600' },
            { id: 'abcJob3', title: 'Testers', salary: '300' }
        ]

    }
    handleFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault() // Ngăn tải lại trang bởi submit
        console.log('Input is: ', this.state)
    }

    render() {
        console.log('check render', this.state)

        return (
            <>
                <div>
                    <form>
                        <label htmlFor='fname'>First name:</label><br />
                        <input type="text" value={this.state.firstName}
                            onChange={(event) => this.handleFirstName(event)} /><br />
                        <label htmlFor='lname'>Last name:</label><br />
                        <input type="text" value={this.state.lastName}
                            onChange={(event) => this.handleLastName(event)} /><br /><br />
                        <input type="submit" value="Submit"
                            onClick={(event) => this.handleSubmit(event)} />
                    </form>

                </div>
                <ChildComponent
                    name={this.state.firstName}
                    age={'20'}
                    address={'HaNoi'}
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;