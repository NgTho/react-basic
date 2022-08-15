import React from 'react';
//import { withRouter } from "react-router";
import { connect } from "react-redux";
//import Color from '../HOC/Color.js';
import img from '../../assets/images/beta10.jpg';
class Home extends React.Component{
    //Hàm componentDidMount gọi sau khi render
    /* componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/todos');
        }, 3000);
    } */
    deleteUser = (user) => {
        this.props.deleteUserRedux(user);
    }
    addUser = () => {
        this.props.addUserRedux();
    }
    render() {
        //console.log(this.props);
        console.log(this.props.dataRedux);
        let dataRedux = this.props.dataRedux;
        return (
            <div>
                <div>Home!</div>
                <img src={img} width="300px" />
                {
                    dataRedux && dataRedux.length > 0 &&
                    dataRedux.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {index + 1} - {item.name} <span onClick={()=>this.deleteUser(item)}>X</span>
                            </div>
                        )
                    })
                }
                <div><button onClick={this.addUser}>Add new user</button></div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dataRedux: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux : (userDelete) => dispatch({type:"DELETE_USER",payload:userDelete}),
        addUserRedux : () => dispatch({type:"ADD_USER"}),
    }
}
//export default withRouter(Home);
//export default Color(Home);
//export default Home;
export default connect(mapStateToProps,mapDispatchToProps)(Home);