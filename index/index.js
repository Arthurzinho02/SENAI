const App = () => {
    return(
        <div>
            <nav className="cabecalho navbar navbar-expand-lg">
                <div className="container m-3">
                    <a className="navbar-brand" href="index.html"><img className="img-fluid w-25" src="../img/Logo.png"></img></a>
                    <h3>Olá, Beatriz</h3>
                </div>
            </nav>

            <div className="container">
                <div className="star d-flex justify-content-center container">
                    <a href="../Desejo/desejo.html" className="star4 nav-link">S.T.A.R.</a>T✩
                </div>
            </div>            
        </div>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
    )