import React, {FC, Fragment} from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Navbar: FC = ()=> {
    return (
        <Fragment>
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <h5 className="my-0 mr-md-auto font-weight-normal"><NavLinks href="/"> Kalah Game </NavLinks> </h5>
            <nav className="my-2 my-md-0 mr-md-3">
            <a className="p-2 text-dark" href="#">Task </a>
            <a className="p-2 text-dark" href="#">Cycleon</a>
            </nav>
            <a className="btn btn-outline-primary" href="/games">ALL GAMES</a>
            </div>
            
        </Fragment>
    )
}

const NavLinks = styled.a `
color: black;
font-size: 27px;
text-decoration: none;
cursor: pointer;
`