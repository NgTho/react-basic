import React from 'react';
class Addcomponent extends React.Component{
    state = {
        job:'',
        salary:''
    }
    changeJobName = (e) => {
        this.setState({
            job: e.target.value
        })
    }
    changeSalary = (e) => {
        this.setState({
            salary: e.target.value
        })
    }
    submit = (e) => {
        e.preventDefault();
        if (!this.state.job || !this.state.salary) {
            alert('Missing');
            return;
        }
        alert(`Check data job name: ${this.state.job}, salary: ${this.state.salary}`);
        this.props.addNewjob({
                job: this.state.job,
                salary: this.state.salary
        });
        this.setState({
            job: '',
            salary: ''
        });
    }
    render() {
        return (
            <form action="/action_page.php">
                <label htmlFor="fname">Job name:</label><br/>
                <input type="text" value={this.state.job} onChange={this.changeJobName} /><br/>
                <label htmlFor="lname">Salary:</label><br/>
                <input type="text" value={this.state.salary} onChange={this.changeSalary} /><br/><br/>
                <input type="submit" value="Submit" onClick={this.submit}/>
            </form> 
        )
    }
}
export default Addcomponent;