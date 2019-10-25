import React from "react"
import { Link } from "react-router-dom"
import "semantic-ui-css/semantic.min.css"
import { Menu } from "semantic-ui-react"
import useSimpleAuth from "../../Auth/useSimpleAuth"

const NavBar = props => {
    const { isAuthenticated, logout } = useSimpleAuth()
   
    return (
        <Menu size="large">
            <Menu.Item name="Home" as={Link} to="/" header>
                DM
            </Menu.Item>
        
            <Menu.Item name="Add Move" as={Link} to="/addform" position="right">
                Add Move
            </Menu.Item>

            {isAuthenticated() ? (
                <Menu.Item
                    className="nav-link fakeLink"
                    onClick={() => {
                        logout()
                        props.history.push({
                            pathname: "/"
                        })
                    }}
                >
                    Logout
                </Menu.Item>
            ) : (
                <>
                    <Menu.Item as={Link} to="/login">
                        Login
                    </Menu.Item>
                </>
            )}
        </Menu>
    )
}

export default NavBar
