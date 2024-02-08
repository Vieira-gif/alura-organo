import './CampoTexto.css'
import {useState} from "react";

const CampoTexto = (props) => {

    const aoDigitar = (evento) => {
        props.aoAlterar(evento.target.value)
    }

    return (
        <div className={"campo-texto"}>
            <label>{props.children}</label>
            <input value={props.valor} onChange={aoDigitar} placeholder={props.placeholder} required={props.obrigatorio}/>
        </div>
    )
};

export default CampoTexto;