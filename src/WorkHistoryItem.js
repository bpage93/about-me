import React, { Component } from 'react'
import './WorkHistoryItem.css'

class WorkHistoryItem extends Component {
    render() {
        return (
            <div class="wholePage">
                <section>
                    <h2>{this.props.company}</h2>
                    <p>{this.props.jobTitle}<span>{this.props.date}</span></p>
                    <ul>
                        <li>{this.props.reponsibility}</li>
                        <li>{this.props.reponsibility2}</li>
                        <li>{this.props.reponsibility3}</li>
                    </ul>
                </section>
            </div>
        )
    }
}
export default WorkHistoryItem