import React from 'react';
import { withRouter } from 'react-router-dom';
import Color from '../HOC/Color';

class Home extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo')
    //     }, 3000)
    // }

    render() {
        return (
            <div>Hello World From Home</div>
        )
    }
}
// export default withRouter(Home); // HOC: Higher Order Component
export default Color(Home); 