import React from 'react';
import ChildComponent from './ChildComponents';
import AddComponent from './AddComponent';
import Color from '../HOC/Color';


class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: 'Job1', title: 'Developers', salary: '500' },
            { id: 'Job2', title: 'Coders', salary: '600' },
            { id: 'Job3', title: 'Testers', salary: '300' }
        ]

    }

    addNewJobs = (job) => {
        console.log('check job from parent: ', job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log('run componentDidUpdate ', 'prev state:', prevState, 'current state: ', this.state)
    }
    componentDidMount = () => {
        console.log('run componentDidMount')
    }

    render() {
        console.log('check render', this.state)

        return (
            <>
                <AddComponent
                    addNewJobs={this.addNewJobs}

                />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
        )
    }
}

export default Color(MyComponent);