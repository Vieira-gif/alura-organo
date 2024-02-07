import './Formulario.css'
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX & Desing',
        'Mobile',
        'Inovação & Gestão'
    ]

    return (
        <section className={"formulario"}>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto placeholder={"Digite seu nome"}>Nome</CampoTexto>
                <CampoTexto placeholder={"Digite seu cargo"}>Cargo</CampoTexto>
                <CampoTexto placeholder={"Carregue sua imagem neste campo"}>Imagem</CampoTexto>
                <ListaSuspensa itens={times}>Time</ListaSuspensa>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
};

export default Formulario;