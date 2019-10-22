import React from "react"
import { Link } from "react-router-dom"
import "semantic-ui-css/semantic.min.css"
import { Menu, Dropdown } from "semantic-ui-react"
// import useSimpleAuth from "../../hooks/ui/useSimpleAuth"

//SN- Simple navigation bar, please add your routes as you create new pages.

const NavBar = props => {
    // const { isAuthenticated, logout } = useSimpleAuth()
   
    return (
        <Menu size="large">
            <Menu.Item as={Link} to="/">
            </Menu.Item>
            <Menu.Item as={Link} to="/" header>
            </Menu.Item>
            <Menu.Item as={Link} to="/" position="right">
            </Menu.Item>
            <Menu.Item as={Link} to="/">
                Log Out
            </Menu.Item>
        </Menu>
    )
}

export default NavBar
