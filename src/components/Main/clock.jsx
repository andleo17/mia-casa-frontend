import React, { Component } from 'react';

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
        () => this.tick(),
        1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
        date: new Date()
        });
    }
    render() {
        return (
            <h1>{this.state.date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}</h1>
        );
    }

}

export default Clock;