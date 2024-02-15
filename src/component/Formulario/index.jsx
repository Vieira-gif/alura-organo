import './Formulario.css'
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import {useState} from "react";

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('Programação')

    const aoSalvar = evento => {
        evento.preventDefault()
        props.aoColaboradoCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setImagem('')
        setCargo('')
        setTime('')
    }


    return (
        <section className={"formulario"}>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto placeholder={"Digite seu nome"} obrigatorio={true} valor={nome} aoAlterar={valor => setNome(valor)}>Nome</CampoTexto>
                <CampoTexto placeholder={"Digite seu cargo"} obrigatorio={true} valor={cargo} aoAlterar={valor => setCargo(valor)}>Cargo</CampoTexto>
                <CampoTexto placeholder={"Carregue sua imagem neste campo"} valor={imagem} aoAlterar={valor => setImagem(valor)}>Imagem</CampoTexto>
                <ListaSuspensa itens={props.time} obrigatorio={true} value={time} aoAlterar={valor => setTime(valor)}>Time</ListaSuspensa>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
};

export default Formulario;