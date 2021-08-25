
import { Component } from 'react';
import classes from './App.module.css'
import Start from './Start';
import Stop from './Stop';
import Restart from './Restart'
class App extends Component {
  count;
state={
counter:0
}

timerStart= ()=>{
  this.count=setInterval(()=>{ 
  this.setState({counter:this.state.counter+1})
   }, 1000);

}

timerStop= ()=>{

  clearInterval(this.count);
}

timerRestart= ()=>{
  this.setState({counter:0})
  
}

render()
{
  
  return (

    <div className={classes.Watch}>
      <div className={classes.Text}>
      {this.state.counter}
      </div>

      <div className={classes.Item2} >
    <div className={classes.Btn}>
      <Start timeStart={this.timerStart}></Start>  </div>
      <div  className={classes.Btn}>
      <Stop timeStop={this.timerStop}></Stop> </div>
      <div  className={classes.Btn}>
      <Restart timeRestart={this.timerRestart}></Restart>
      </div>
      </div>

    </div>
  );
}

}
export default App

