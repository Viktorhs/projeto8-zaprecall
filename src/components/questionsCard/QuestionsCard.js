import React from "react"
import play from "../../assets/images/Vector.svg"
import turn from "../../assets/images/seta.svg"

export default function Card({id, question, answer, setCheck, setDontRemember, check}){
    const[cardStatus, setCardStatus] = React.useState('closed')
    const[color, setColor] = React.useState('')
    const[icon, setIcon] = React.useState('')
    function buttonAnswer(option){
        setCheck([...check, option])
        setIcon(option)
        if(option === "close-circle-sharp"){
            setColor('color-red')
            setDontRemember(true)
        }else if(option === 'help-circle-sharp'){
            setColor('color-yellow')
        }else if(option === 'checkmark-circle-sharp'){
            setColor('color-green')
        }
        setCardStatus('answered ')
    }
    
    return(
        <li className={cardStatus + color}>
            {cardStatus === 'closed' &&
            <>
                <p>Pergunta {id + 1}</p>
                <img src = {play} alt="play" onClick={() => setCardStatus('question')}/>
            </>
            }
            
            {cardStatus === 'question' &&
            <>
                <p>{question}</p>
                <img src = {turn} alt="play" onClick={() => setCardStatus('answer')}/>
            </>}

            {cardStatus === 'answer' &&
                <>
                    <p>{answer}</p>
                    <div className = "status">
                        <span onClick={() => buttonAnswer('close-circle-sharp')}>Não lembrei</span>
                        <span onClick={() => buttonAnswer("help-circle-sharp")}>Quase não lembrei</span>
                        <span onClick={() => buttonAnswer("checkmark-circle-sharp")}>Zap!</span>
                    </div>
                </>
            }

            {cardStatus === 'answered ' &&
                <>
                    <p>Pergunta {id + 1}</p>
                    <ion-icon name={icon}></ion-icon>
                </>
            }
        </li>

    )
}