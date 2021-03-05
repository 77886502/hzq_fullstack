import React,{Component} from 'react';

class App extends Component {
    render(){
        return(
            <ul>
                <li>{false?'React':'react'}</li>
                <li>Reacr-DOM</li>
                <li>JSX</li>
            </ul>
        )
    }
}
export default App;