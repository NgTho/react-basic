import React from 'react';
import { toast } from 'react-toastify';
class AddTodos extends React.Component{
    state = {
        todo:''
    }
    changeTodos = (e) => {
        this.setState({
            todo: e.target.value
        })
    }
    addTodos = () => {
        if (!this.state.todo) {
            toast.error("Missing");
            return;
        }
        this.props.addNewTodos({
            id: Math.floor(Math.random() * 10000),
            title: this.state.todo
        });
        this.setState({
            todo: ''
        });
        toast.success("Done!");
    }
    render() {
        return(
            <div>
                <input type="text" value={this.state.todo} onChange={this.changeTodos} />
                <button type='button' onClick={this.addTodos}>Add</button>
            </div>
        )
    }
}
export default AddTodos;