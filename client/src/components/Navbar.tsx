import React, {FC, Fragment} from 'react'

export const Navbar: FC = ()=> {
    return (
        <Fragment>
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <h5 className="my-0 mr-md-auto font-weight-normal">Kalah Game</h5>
            <nav className="my-2 my-md-0 mr-md-3">
            <a className="p-2 text-dark" href="#">More</a>
            <a className="p-2 text-dark" href="#">Cyleon</a>
            </nav>
            <a className="btn btn-outline-primary" href="#">About</a>
            </div>
            
        </Fragment>
    )
}
