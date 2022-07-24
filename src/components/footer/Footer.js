export default function Footer({check, deck, dontRemember}){
    
    function Icons(){
        return(
            <>
                {check.map((item, key) => <li key={key}> <ion-icon name={item}></ion-icon></li>)} 
            </>
        )
    }

    function FooterMensage(){
        return(
            <div className="status-mensage" >
                {
                    dontRemember === false ?
                        <>
                            <span><b>🥳</b> <strong>Parabéns!</strong></span>
                            <p>Você não esqueceu de<br/>nenhum flashcard!</p>
                        </>
                        :
                        <>
                            <span><b>😥</b> <strong>Putz...</strong></span>
                            <p>Ainda faltam alguns...<br/>Mas não desanime!</p>
                        </>
                }
            </div>
        )
    }

    return(
        <div className="recall-status">
            {check.length === deck.length && <FooterMensage />}
            <p>{`${check.length}/${deck.length} CONCLUIDOS`}</p>
            <ul className="icon">
                <Icons />
            </ul>
        </div>
    )
}