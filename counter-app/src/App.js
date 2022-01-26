import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters';
import React,{Component} from 'react';
import Counter from './components/counter';
class App extends Component {

  state = { Counters:[{
    id:1,value:4,disabled:false
}
,
{
id:2,value:4,disabled:false
}
,{
id:3,value:3,disabled:false
} 
] } 

disabled =(Counter)=>{
  Counter.value<=0?Counter.disabled =true : Counter.disabled =false; 
}
onDelete =(counterId)=>{
this.setState(
    { Counters: this.state.Counters.filter(e=>e.id !=counterId)}
)
}
handleReset = ()=>{
const resetCounters = this.state.Counters.map(e=>{e.value=0;e.disabled=true;
return e;
});
this.setState({Counters:resetCounters})
}

handleIncrement = (counterId) =>{
const  Counters =[...this.state.Counters]  
const index = Counters.findIndex(e=>e.id ==counterId);
Counters[index] ={...Counters[index]}
Counters[index].value= Counters[index].value+1;
this.disabled(Counters[index])
  this.setState(
    { Counters: Counters})
}
handleDecrement = (counterId) =>{ 
const  Counters =[...this.state.Counters]  
const index = Counters.findIndex(e=>e.id ==counterId);
Counters[index] ={...Counters[index]}
Counters[index].value= Counters[index].value-1;
this.disabled(Counters[index])
this.setState(
   { Counters: Counters})

}

handleAdd=()=>{
  const  Counters =[...this.state.Counters]  
  Counters.push({id:Math.max(...Counters.map(e=>e.id))+1,value:0,disabled:true})
  this.setState({Counters});
}

  render()
  {
  return (
    
      <div>
      <Navbar totalCounter ={this.state.Counters.filter(e=>e.value>0)?.length}/>
      <main className='container'>
      <Counters onDelete ={this.onDelete} handleReset ={this.handleReset} Counters={this.state.Counters} handleIncrement={this.handleIncrement} handleDecrement ={this.handleDecrement} />
       <button className='btn btn-primary btn-sm m-2' onClick={this.handleAdd}   >Add</button>
      </main>
      </div>   
  );
  }
}

export default App;
