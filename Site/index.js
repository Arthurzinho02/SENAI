const App = () => {
    return(
        <div>
            <nav className="cabecalho navbar navbar-expand-lg">
                <div className="container-fluid">
                <a className="navbar-brand" href="#"><img className="img-fluid w-25" src="../img/Logo.png"></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sobre</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Compre</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contate-nos</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        
            <div className="text-wrap text-center">A Security and Transmission Administration Resource veio para transformar o mercado industrial, melhorando a comunicação dos funcionários no detalhamento de falhas das máquinas dentro da empresa, otimizando a resolução dos problemas e criando um relatório técnico ao final de cada mes com os maiores incidentes em cada equipamento, dando abertura para uma manutenção mais objetiva, poupando gastos.</div>


            <div className="d-flex justify-content-center">
                <div className="plano1 container p-0 rounded w-25">
                    <h2 className="d-flex justify-content-center rounded shadow">Plano único</h2>
                    <ul>
                        <li>1 máquina</li>
                        <li>Relatório no final do mês</li>
                        <li>CheckList</li>
                        <li>Entre outras opções...</li>
                    </ul>
                    <div className="d-flex justify-content-center m-3">
                        <button type="button" className="btn btn-secondary rounded">R$149,99 por mês</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
  )