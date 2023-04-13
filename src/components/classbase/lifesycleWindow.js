import React, { Component } from 'react'

export default class LifesycleWindow extends Component {
    state = {
        windowWidth: window.innerWidth,
        show: true,
    }

    componentDidMount() {
        window.addEventListener("resize", this.watchWidth)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.watchWidth)
    }

    toggle = () => {
        this.setState(prevState => {
            return {
                ...prevState,
                show: !prevState.show
            }
        })
    }

    watchWidth = () => {
        this.setState({ windowWidth: window.innerWidth })
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.toggle}>
                        Toggle WindowTracker
                    </button>
                    {this.state.show && this.state.windowWidth}
                </div>
            </div >
        )
    }
}
