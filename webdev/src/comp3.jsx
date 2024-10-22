import React, {useContext} from "react"
import {player} from './comp1.jsx'

function Comp3() {

    const myPlayer = useContext(player)

    return (
        <div className="container">
            <h1>Component 3 says : {myPlayer}</h1>
        </div>
    )
}

export default Comp3