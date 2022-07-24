import React from "react";
import Footer from "../footer/Footer"
import Card from "../questionsCard/QuestionsCard"
import "./style.css"

export default function RecalScreen({logo}){

    const questionsReact = [
    {question:  'O que é JSX?',
    answer: 'Uma extensão de linguagem do JavaScript'},

    {question:  'O React é __',
    answer: 'uma biblioteca JavaScript para construção de interfaces'},

    {question:  'Componentes devem iniciar com __',
    answer: 'letra maiúscula'},

    {question:  'Podemos colocar __ dentro do JSX',
    answer: 'expressões'},

    {question: 'O ReactDOM nos ajuda __' ,
    answer: 'interagindo com a DOM para colocar componentes React na mesma'},

    {question:  'Usamos o npm para __',
    answer: 'gerenciar os pacotes necessários e suas dependências'},

    {question:  'Usamos props para __',
    answer: 'passar diferentes informações para componentes'},

    {question:  'Usamos estado (state) para __ ',
    answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'}
    ]

    let deckRender = [...questionsReact]
    deckRender.sort(() => Math.random() - 0.5)
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