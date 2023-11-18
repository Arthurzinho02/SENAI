const App = () => {
    return(
        <div>
            <nav className="cabecalho navbar navbar-expand-lg">
                <div className="container m-3">
                    <a className="navbar-brand " href="./index/index.html"><img className="img-fluid w-25 " src="../img/Logo.png"></img></a>
                </div>
            </nav>

            <h3 className="ms-5">Relatar problema</h3>
            <form className="ms-5">
            <div className="mb-5">
            <label className="form-label"  for="exampleFormControlTextarea1" >O que aconteceu?</label>
            <input class="formulario form-control" id="exampleFormControlTextarea1" aria-describedby="emailHelp"></input>
            </div>
            <div className="mb-3">
            <label className="form-label"  for="exampleFormControlTextarea1" >Como o problema foi resolvido?</label>
            <div id="emailHelp" className="form-text">Caso não tenha sido solucionado ainda, informe e justifique.</div>
            <input className="formulario form-control" id="exampleFormControlTextarea1" aria-describedby="emailHelp"></input>
            </div>
            </form>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
    )