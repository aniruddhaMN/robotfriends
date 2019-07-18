import React,{Component} from 'react';
import CardList from '../components/CardList';
import Searching from '../components/searching';
import {robot} from '../robot';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundary';

class App extends Component {
   constructor(){
       super()
       this.state = {
        robot : robot,
        searchfield:''
       }
   }

    onSearchChange = (event) => {
        this.setState({searchfield:event.target.value})
    }

    render(){
        const filteredRobot = this.state.robot.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    return( 
        <div className = 'tc'>
            <h1 id = 'heading'>Robot Friends</h1>
            <h1>This is the change made</h1>
            <Searching searchChange = {this.onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robot = {filteredRobot}/>
                </ErrorBoundry>
            </Scroll>    
        </div>
         
    );
    }
}

export default App;