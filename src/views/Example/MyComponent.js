import React from 'react';
import ChildComponent from './ChildComponents';
import AddComponent from './AddComponent';


class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500' },
            { id: 'abcJob2', title: 'Coders', salary: '600' },
            { id: 'abcJob3', title: 'Testers', salary: '300' }
        ]

    }

    addNewJobs = (job) => {
        console.log('check job from parent: ', job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
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
                />
            </>
        )
    }
}

export default MyComponent;