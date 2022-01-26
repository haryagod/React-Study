import React ,{ Component } from 'react';
import Counter from './counter';
class Counters extends Component {


    render() { 
        return (<div className='container'>
            <button onClick={this.props.handleReset} className="btn-primary btn-sm m-2">Reset</button>    
            {this.props.Counters.map(e=> <Counter key={e.id} value ={e.value} disabled ={e.disabled} handleDecrement={this.props.handleDecrement} handleIncrement ={this.props.handleIncrement } onDelete = {this.props.onDelete} id ={e.id}></Counter>)}
        </div>);
    }
}
 
export default Counters;