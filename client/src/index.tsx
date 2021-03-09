import React, {FC, Fragment} from 'react'
import ReactDOM from 'react-dom'
import {Routing} from './routes/Routing'

const App: FC = ()=>{
    return (
        <Fragment>
            <Routing/>        
        </Fragment>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));


