import './time.css'

const Time = (props) => {

    return (
        <section className={"time"} style={{ backgroundColor: props.corSecundaria}}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.children}</h3>
        </section>
    )
}

export default Time