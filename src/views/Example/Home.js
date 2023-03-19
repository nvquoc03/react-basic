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
    handleDeleteUser = (user) => {
        console.log('check delelte: ', user);
        this.props.deleteUserRedux(user);
    }

    handleCreateUser = () => {
        this.props.addUserRedux();

    }

    render() {
        console.log(">>>Check props redux:", this.props.dataRedux)
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div>Hello World From Home</div>
                <div>
                    <img src={Logo} style={{ borderRadius: '5px', width: '300px', height: '300px' }} />
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name} &nbsp; <span onClick={() => this.handleDeleteUser(item)}>x</span>
                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleCreateUser()}>Add New</button>
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

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' }),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home)); 