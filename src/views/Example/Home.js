import React from 'react';
import { withRouter } from 'react-router-dom';
import Color from '../HOC/Color';
import Logo from '../../assets/images/sunset.jpg';
import { connect } from 'react-redux';

class Home extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo')
    //     }, 3000)
    // }

    render() {
        console.log(">>>Check props:", this.props)
        return (
            <>
                <div>Hello World From Home</div>
                <div>
                    <img src={Logo} style={{ borderRadius: '5px' }} />
                </div>

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

export default connect(mapStateToProps)(Color(Home)); 