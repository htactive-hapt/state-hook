import React, { Component } from 'react'

class Timer extends Component {
    interval
    constructor(props) {
        super(props)
        this.state = {
            timer: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({ timer: prevState.timer + 1 }))
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                {this.state.timer} - Timer
                <button onClick={() => clearInterval(this.interval)}>Stop Timmer</button>
            </div>
        )
    }
}

export default Timer
