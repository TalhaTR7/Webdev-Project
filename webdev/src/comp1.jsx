import Comp2 from './comp2.jsx'
import React, {createContext} from 'react'

export const player = createContext()

function Comp1() {

    const name = 'Ronaldo'

    return (
        <div className="container">
            <h1>Component 1</h1>
            <player.Provider value={name}>
                <Comp2 />
            </player.Provider>
        </div>
    )
}

export default Comp1