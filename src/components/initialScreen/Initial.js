export default function Initial({logo, render}) {
    return(
        <div className="initial">
            <img src={logo} alt=""/>
            <h1>ZapRecall</h1>
            <div className = "initialRecall" onClick = {render}>Iniciar Recall!</div>
        </div>
    )
}