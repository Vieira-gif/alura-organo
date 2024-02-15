import './time.css'
import Colaborador from "../Colaborador";

const Time = (props) => {

    return (
        (props.colaboradores.length > 0) && <section className={"time"} style={{ backgroundColor: props.corSecundaria}}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.children}</h3>
            <div className={"colaboradores"}>
                {props.colaboradores.map((colaborador, index) => <Colaborador key={index} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}></Colaborador>)}
            </div>
        </section>
    )
}

export default Time