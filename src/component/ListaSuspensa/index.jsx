import './ListaSuspensa.css'
const ListaSuspensa = (props) => {
    return (
        <div className={"lista-suspensa"}>
            <label>{props.children}</label>
            <select required={props.obrigatorio}>
                { props.itens.map(item => <option key={item}>{item}</option>) }
            </select>
        </div>
    )
}

export default ListaSuspensa