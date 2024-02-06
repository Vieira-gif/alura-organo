import './formulario.css'
import CampoTexto from "../CampoTexto";

const Formulario = () => {
    return (
        <section>
            <form className={"formulario"}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label={"Nome"} placeholder={"Digite seu nome"}/>
                <CampoTexto label={"Cargo"} placeholder={"Digite seu cargo"}/>
                <CampoTexto label={"Imagem"} placeholder={"Carregue sua imagem neste campo"}/>
            </form>
        </section>
    )
};

export default Formulario;