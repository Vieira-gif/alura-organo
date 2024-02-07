import './CampoTexto.css'

const CampoTexto = (props) => {
    return (
        <div className={"campo-texto"}>
            <label>{props.children}</label>
            <input placeholder={props.placeholder} required={props.obrigatorio}/>
        </div>
    )
};

export default CampoTexto;