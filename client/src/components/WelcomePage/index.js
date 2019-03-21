import React from 'react';


function WelcomePage(props) {

    return (
        <div className="jumbotron">
            <div className="container">
                <div className="row">
                    <h1>Traffic<span className="text-danger">Mon</span>!</h1>
                    <p>Welcome to TrafficMon, the online traffic monitoring database!</p>
                    <p>Here, Users can report and view reports on heavy traffic, accidents, road work, police radar units, and
                    more!</p>
                    <p>In order to submit a report, you must first create an account and login, but anyone can search and view
                    reports, logged in or not!</p>
                    <TrafficMonMap />
                </div>
            </div>
        </div>

    )
}

export default WelcomePage;