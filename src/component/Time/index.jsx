import './time.css'

const Time = (props) => {
    return (
        <section className={"time"}>
            <h3>{props.children}</h3>
        </section>
    )
}

export default Time