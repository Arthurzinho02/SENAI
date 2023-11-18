const App = () => {
    return(
        <div>
            <nav className="cabecalho navbar navbar-expand-lg">
                <div className="container m-3">
                    <a className="navbar-brand " href="../index/index.html"><img className="img-fluid w-25 " src="../img/Logo.png"></img></a>
                </div>
            </nav>
                
            <div>
                <h1 className="d-flex justify-content-center" >O que você deseja realizar?</h1>
                
                
                <div className="pastas d-flex justify-content-center flex-column p-0 container">
                    <a className="nav-link" href="../checklist/check.html">💼 Checklist</a>
                    <a className="nav-link" href="../Relatar/index.html">💼 Canal de incidentes</a>
                    <a className="nav-link" href="">💼 Informações técnicas</a>
                    <a className="nav-link" href="">💼 Central de ajuda</a>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
    )