import React from 'react';

class AddComponent extends React.Component {

    state = {
        titleJob: '',
        salaryJob: ''
    }

    handleChangeTitleJob = (event) => {
        this.setState({
            titleJob: event.target.value
        })
    }

    handleChangeSalaryJob = (event) => {
        this.setState({
            salaryJob: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault() // Ngăn tải lại trang bởi submit
        console.log('Input is: ', this.state)
    }
    render() {
        return (
            <div>
                <form>
                    <label htmlFor='fname'>Job's title:</label><br />
                    <input type="text" value={this.state.titleJob}
                        onChange={(event) => this.handleChangeTitleJob(event)} /><br />
                    <label htmlFor='lname'>Salary:</label><br />
                    <input type="text" value={this.state.salaryJob}
                        onChange={(event) => this.handleChangeSalaryJob(event)} /><br /><br />
                    <input type="submit" value="Submit"
                        onClick={(event) => this.handleSubmit(event)} />
                </form>

            </div>
        )
    }
}

export default AddComponent;