import React from 'react';

class ChildComponent extends React.Component {



    render() {
        console.log('check props: ', this.props)
        // let name = this.props.name;
        // let age = this.props.age;

        let { name, age, address, arrJobs } = this.props;
        return (
            <>
                <div className='job-lists'>
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}> {item.title} - {item.salary} </div>
                            )
                        })
                    }
                </div>

                <div>
                    Child Component: {name} and {age} years old in {address}
                </div>
            </>
        )
    }
}

export default ChildComponent;