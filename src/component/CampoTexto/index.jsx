import './CampoTexto.css'

const CampoTexto = (props) => {
    return (
        <div className={"campo-texto"}>
            <label>{props.children}</label>
            <input placeholder={props.placeholder}/>
        </div>
    )
};

export default CampoTexto;