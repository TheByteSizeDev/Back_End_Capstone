import React from "react"
import { Route } from "react-router-dom"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

const MainPage = () => {
    return (
        <React.Fragment>
            <h1>Dad Moves</h1>
            <Route render={props => (
                <NavBar {...props} />
            )} />
            <ApplicationViews />
        </React.Fragment>
    )
}

export default MainPage