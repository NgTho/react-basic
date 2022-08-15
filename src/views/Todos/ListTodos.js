import React from 'react';
import AddTodos from './AddTodos';
import { toast } from 'react-toastify';
//import Color from '../HOC/Color.js';
class ListTodos extends React.Component{
    state = {
        listTodos: [
            { id: 'todo1', title: 'Homework' },
            { id: 'todo2', title: 'Learn' },
            { id: 'todo3', title: 'Sleep' }
        ],
        editTodos: {}
    }
    addNewTodos = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo],
            editTodos:''         
            
        });
    }
    deleteTodos = (item,index) => {
        let newTodos = this.state.listTodos;
        newTodos.splice(index,1);
        this.setState({
            listTodos: newTodos
        });
        toast.info(`Delete ${item} success`);
    }
    editTodos = (todo) => {
        //save
        let { listTodos, editTodos } = this.state;
        let isEmty = Object.keys(editTodos).length === 0;  
        if (isEmty === false && todo.id === editTodos.id) {
            let copy = [...listTodos];
            let index = copy.findIndex(item => item.id === todo.id);
            copy[index].title = editTodos.title;
            this.setState({
                listTodos: copy,
                editTodos: ''
            });
            toast.success(`Edit ${todo.title} success`);
            return;
        }
        /////////////////////////////////
        //edit
        this.setState({
            editTodos:todo
        })
    }
    changeTodos = (e) => {
        let copy = { ...this.state.editTodos };
        copy.title = e.target.value;
        this.setState({
            editTodos:copy
        })
    }
    render() {
        let { listTodos, editTodos } = this.state;
        let isEmty = Object.keys(editTodos).length === 0;
        console.log(isEmty);
        return (
            <>
                <p>Todos App</p>
                <AddTodos addNewTodos={this.addNewTodos} />
                <div>
                    {
                        listTodos && listTodos.length > 0 && listTodos.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {
                                        isEmty === false && item.id===editTodos.id ? 
                                            <span>{index + 1} - <input type="text" value={editTodos.title} onChange={this.changeTodos} /></span>
                                    :
                                            <span>{index + 1} - {item.title}</span>
                                    }
                                    <button onClick={() => this.editTodos(item)}>
                                        {
                                            isEmty === false && item.id === editTodos.id ? 'Save':'Edit'
                                        }
                                    </button>
                                    <button onClick={() => this.deleteTodos(item.title, index)} >Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}
//export default Color(ListTodos);
export default ListTodos;