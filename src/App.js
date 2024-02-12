import Banner from "./component/Banner";
import Formulario from "./component/Formulario";
import Time from "./component/Time";
import {useState} from "react";
function App() {

    const [colaboradores, setColaboradores] = useState([])

    const aoNovoColaboradorAdicionar = colaborador => {
        setColaboradores([...colaboradores, colaborador])
    }

    return (
        <div className="App">
            <Banner/>
            <Formulario aoColaboradoCadastrado = {aoNovoColaboradorAdicionar}/>
            <Time>Programação</Time>
            <Time>Front End</Time>
            <Time>Data Science</Time>
        </div>
    );
}

export default App;