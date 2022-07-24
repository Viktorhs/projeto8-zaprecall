import Initial from "./initialScreen/Initial"
import Recall from "./recalScreen/RecalScreen"
import React from "react"

import "./CSS/reset.css"
import "./CSS/style.css"

import logo from "../assets/images/raio.svg"

export default function App() {

    let [component, setComponent] = React.useState(true)

    function render() {
        setComponent(component = false)
    }
        

    return (
        <>
            {(component === true) ? <Initial logo={logo} render={render}/> : <Recall logo={logo}/>}
        </>
    )
}