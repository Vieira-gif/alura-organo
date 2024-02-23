import './time.css'
import Colaborador from "../Colaborador";

const Time = (props) => {

    return (
        (props.colaboradores.length > 0) && <section className={"time"} style={{ backgroundColor: props.corSecundaria}}>
            <input onChange={event => props.mudarCor(event.target.value, props.nome)} value={props.corSecundaria} type="color" className={'input-cor'}/>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.children}</h3>
            <div className={"colaboradores"}>
                {props.colaboradores.map((colaborador, index) => {
                    return <Colaborador key={index} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} aoDeletar={props.aoDeletar}/>
                })
                }
            </div>
        </section>
    )
}

export default Time