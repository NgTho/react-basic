import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router";
class ListUser extends React.Component{
    state = {
        listuser: [
            
        ]
    }
    async componentDidMount(){
        let res= await axios.get('https://reqres.in/api/users?page=2')
        console.log(res.data.data);
        this.setState({
            listuser: res.data.data ? res.data.data : []
        })
    }
    viewDetail = (id) => {
        this.props.history.push(`/user/${id}`);
    }
    render() {
        let { listuser } = this.state;
        return (
            <div>
                {
                    listuser && listuser.length > 0 && listuser.map((item, index) => {
                        return (
                            <div key={item.id} onClick={()=>this.viewDetail(item.id)}>{item.id} - {item.first_name} {item.last_name}</div>
                        )
                    })
                }
            </div>
        )
    }
}
export default withRouter(ListUser);