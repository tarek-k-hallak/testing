import React, { Component } from 'react'

export default class Lifesycle extends Component {
    state = JSON.parse(localStorage.getItem(count)) || {
        count: 0,
    }

    componentDidMount() {
        console.log("Mounted")
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count != this.state.count) {
            console.log("Updated")
        }
    }

    add = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    subtract = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        console.log("Rendered")
        return (
            <div>
                <div>
                    <button onClick={this.subtract}>–</button>
                    <h1>{this.state.count}</h1>
                    <button onClick={this.add}>+</button>
                </div>
            </div >
        )
    }
}
