import './ListaSuspensa.css'
const ListaSuspensa = (props) => {
    return (
        <div className={"lista-suspensa"}>
            <label>{props.children}</label>
            <select required={props.obrigatorio} onChange={evento => props.aoAlterar(evento.target.value)} value={props.valor}>
                { props.itens.map(item => <option key={item}>{item}</option>) }
            </select>
        </div>
    )
}

export default ListaSuspensa