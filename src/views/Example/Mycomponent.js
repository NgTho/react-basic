import React from 'react';
import Childcomponent from './Childcomponent';
import Addcomponent from './Addcomponent';
class Mycomponent extends React.Component{
    state = {
        arr: [
            {job:'Dev',salary:'500'},
            {job:'Tester',salary:'400'},
            {job:'Leader',salary:'1000'}
        ]
    }
    addJob = (job) => {
        //let newArr = this.state.arr;
        //newArr.push(job);
        this.setState({
            arr: [...this.state.arr,job]
            //arr: newArr
        })
    }
    deleteAjob = (job) => {
        let newArr = this.state.arr;
        //newArr = newArr.filter((item) => { return item.job !== job.job });
        newArr.splice(job,1);
        this.setState({
            arr: newArr
        })
    }
    componentDidMount() {
        console.log('Mount');
    }
    componentDidUpdate(prevProps,prevState) {
        console.log('prevState: ',prevState,'currentState: ',this.state);
    }
    render() {
        console.log('rendering!');
        return (
            <>
                <Addcomponent addNewjob={this.addJob} />
                <Childcomponent arr={this.state.arr} deleteAjob={this.deleteAjob}/>
            </>
        )
    }
}
export default Mycomponent;