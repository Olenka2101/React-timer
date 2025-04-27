import { Component } from "react";

export class NewClock extends Component {
    constructor(props){
        super(props);
        this.state = {
            timer: new Date().toLocaleTimeString()
        }
    }

componentDidMount(){
    this.timerID = setInterval(() => this.tick(), 1000)
}

componentWillUnmount(){
    clearInterval(this.timerID)
}

    tick(){
        this.setState({timer:new Date().toLocaleTimeString()})
    }

    render(){
        return(
            <p>{this.state.timer}</p>
        )
    }
}