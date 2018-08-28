import React, { Component } from 'react'
import NavSite from './NavSite'
import './App.css'
import WorkHistoryItem from './WorkHistoryItem'

class WorkHistoryPage extends Component {
    render() {
        return (
            <div>
                <NavSite />
                <h2>
                    Brad's Work History Page
                </h2>
                <section>
                    <WorkHistoryItem company="T2 Modus" jobTitle="Appointment Setter" date="Dec, 2017-Current"
                        reponsibility="Make appointments for dealerships around the Nation"
                        reponsibility2="Helped dealerships get more serice opputunty"
                        reponsibility3="find more potential customer that may want warranty"
                    />
                    <WorkHistoryItem company="Alpine City" jobTitle="City Maintance" date="April 2015-Septemeber 2015"
                        reponsibility="Clean city parks"
                        reponsibility2="mow city parks"
                        reponsibility3="mantaine city mowers"
                    />
                    <WorkHistoryItem company="ProClean" jobTitle="Clean Commercal Windows" date="March 2017-December 2017 "
                        reponsibility="Clean city parks"
                        reponsibility2="mow city parks"
                        reponsibility3="mantaine city mowers"
                    />
                </section>
            </div>

        )
    }
}

export default WorkHistoryPage
