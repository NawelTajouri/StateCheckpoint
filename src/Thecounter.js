import React, { Component } from 'react'

export class Thecounter extends Component {
    constructor(props) {
        super (props)
        this.state={
            count: 0,
        }
    }
    componentDidMount() {
          console.log('componentDidMount()')
          this.id = setInterval(() => {
            this.setState({count: this.state.count + 1})
          }, 1000);
          
        }
    componentWillUnmount() {
        clearInterval(this.id);
    }
    render() {
        return (
            <div>
                <h5>Number of seconds is {this.state.count}</h5>
                {this.props.counter}
                
            </div>
        )
    }
}

export default Thecounter
