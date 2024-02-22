import Banner from "./component/Banner";
import Formulario from "./component/Formulario";
import Time from "./component/Time";
import {useState} from "react";
import Rodape from "./component/Rodape";
function App() {

    const times = [
        {
            nome: 'Programação',
            corPrimaria: '#57c278',
            corSecundaria: '#d9f7e9'
        },
        {
            nome: 'Front-End',
            corPrimaria: '#82CFFA',
            corSecundaria: '#E8F8FF'
        },
        {
            nome: 'Data Science',
            corPrimaria: '#A6D157',
            corSecundaria: '#F0F8E2'
        },
        {
            nome: 'Devops',
            corPrimaria: '#E06D69',
            corSecundaria: '#FDE7E8'
        },
        {
            nome: 'UX & Desing',
            corPrimaria: '#DB6EBF',
            corSecundaria: '#FAE9F5'
        },
        {
            nome: 'Mobile',
            corPrimaria: '#DDBA05',
            corSecundaria: '#FFF5D9'
        },
        {
            nome: 'Inovação & Gestão',
            corPrimaria: '#FF8A29',
            corSecundaria: '#FFEEDF'
        }
    ]


    const [colaboradores, setColaboradores] = useState([])

    const aoNovoColaboradorAdicionar = colaborador => {
        setColaboradores([...colaboradores, colaborador])
    }

    const deletarColaborador = () => {
        console.log('deletando')
    }

    return (
        <div className="App">
            <Banner/>
            <Formulario time={times.map(t => t.nome)} aoColaboradoCadastrado = {aoNovoColaboradorAdicionar}/>
            {times.map((time, index) =>
                <Time key={index}
                      corPrimaria={time.corPrimaria}
                      corSecundaria={time.corSecundaria}
                      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                      aoDeletar={deletarColaborador}
                >{time.nome}</Time>)}
            <Rodape></Rodape>
        </div>
    );
}

export default App;