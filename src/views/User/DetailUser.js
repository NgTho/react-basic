import React from 'react';
import { withRouter } from "react-router";
import axios from 'axios';
class DetailUser extends React.Component{
    state = {
        user:{}
    }
    async componentDidMount() {
        if (this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            console.log(res.data.data);
            this.setState({
                user: res.data.data ? res.data.data : {} 
            })
        }
        
    }
    btnBack = () => {
        this.props.history.push('/user');
    }
    render() {
        //console.log(this.props);
        let { user } = this.state;
        let isEmty = Object.keys(user).length === 0;
        return (
            <> 
                {
                    isEmty === false ?
                        <div>
                            <div>User name: {user.first_name} {user.last_name}</div>
                            <div>User email: {user.email}</div>
                            <div><img src={user.avatar} /></div>
                        </div>
                        :
                        <div>No data</div>
                    
                }
                <div><button onClick={this.btnBack}>Back</button></div>
            </>
        )
    }
}
export default withRouter(DetailUser);