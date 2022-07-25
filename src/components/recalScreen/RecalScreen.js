import React from "react";
import Footer from "../footer/Footer"
import Card from "../questionsCard/QuestionsCard"
import "./style.css"

export default function RecalScreen({logo, questions}){

    let deckRender = questions
    let [check, setCheck] = React.useState([])
    let [dontRemember, setDontRemember] = React.useState(false)

    return(
        <>  
            <div className="recall">
                <img src={logo} alt = "logo recall"/>
                <h1>ZapRecall</h1>
            </div>
            <ul className="cards-recall">
                {deckRender.map((item, key) => <Card key={key} id={key} question = {item.question} answer={item.answer} setCheck = {setCheck} setDontRemember={setDontRemember} check = {check}/>)}
            </ul>
                <Footer deck = {deckRender} check = {check} dontRemember={dontRemember} />
        </>
    )
}