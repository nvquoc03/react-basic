import React from 'react';

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: ''
    }

    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalaryJob = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {

        event.preventDefault() // Ngăn tải lại trang bởi submit
        if (!this.state.title || !this.state.salary) {
            alert('Missing required params')
            return;
        }
        console.log('Input is: ', this.state)

        this.props.addNewJobs({
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })
    }
    render() {
        return (
            <div>
                <form>
                    <label htmlFor='fname'>Job's title:</label><br />
                    <input type="text" value={this.state.title}
                        onChange={(event) => this.handleChangeTitleJob(event)} /><br />
                    <label htmlFor='lname'>Salary:</label><br />
                    <input type="text" value={this.state.salary}
                        onChange={(event) => this.handleChangeSalaryJob(event)} /><br /><br />
                    <input type="submit" value="Submit"
                        onClick={(event) => this.handleSubmit(event)} />
                </form>

            </div>
        )
    }
}

export default AddComponent;