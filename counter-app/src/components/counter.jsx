import React, { Component } from 'react';


class Counter extends Component {

   
  
   

    render() { 
        return ( 
       <div class="row"> 
    <div className='col-1'> <span className={this.getBadgeClasses()} >{this.formatCount()}</span></div>
       <div className='col'> 
       <button onClick={() => this.props.handleIncrement(this.props.id)} className='btn btn-secondary btn-sm'>+</button>
       <button onClick={ () => this.props.handleDecrement(this.props.id)} disabled={this.props.disabled} className='m-2 btn btn-sm btn-secondary '>-</button>
        <button onClick={() => this.props.onDelete(this.props.id)} className='btn btn-danger btn-sm '>X</button>
        </div>
        </div>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.props.value == 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        const{value} =this.props
        return value==0?'Zero':value;
    }
}
 
export default Counter;