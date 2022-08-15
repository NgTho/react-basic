import React from 'react';
import './Style.scss';
class Childcomponent extends React.Component{
    state = {
        show: false
    }
    changeShowHide = () => {
        this.setState({
            show : !this.state.show
        })
    }
    deleteJob = (job) => {
        this.props.deleteAjob(job);
        //console.log(job);
    }
    render() {
        //console.log('check prop:', this.props);
        let { arr } = this.props;
        let { show } = this.state;
        //console.log(show);
        return (
            <>
                {show === false ? 
                    <div><button className='btn_show' onClick={this.changeShowHide}>Show</button></div>
                :
                    <>
                        <div><button onClick={this.changeShowHide}>Hide</button></div>
                        <div>
                            {
                                arr.map((item, index) => {
                                    return (
                                        <div key={index}>Job: {item.job} - Salary: {item.salary} <span onClick={()=>this.deleteJob(index)}>x</span></div>
                                    )
                                })   
                            }
                        </div>
                    </>
                }
            </>
        )
    }
}
export default Childcomponent;