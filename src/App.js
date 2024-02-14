import Banner from "./component/Banner";
import Formulario from "./component/Formulario";
import {useState} from "react";
function App() {

    const [colaboradores, setColaboradores] = useState([])

    const aoNovoColaboradoresAdicionado = (colaborador) => {
        console.log(colaborador)
        setColaboradores([...colaboradores, colaborador])
    }

    return (
        <div className="App">
            <Banner/>
            <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradoresAdicionado(colaborador)}/>
        </div>
    );
}

export default App;