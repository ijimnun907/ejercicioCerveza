import './FormularioContacto.css';

const FormularioContacto = () => {
    return (
        <section>
            <form method='POST'>
                <label htmlFor="nombre">Nombre: </label>
                <input type="text" name="nombre"/>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email"/>
                <label htmlFor="telefono">Telefono: </label>
                <input type="text" name="telefono"/>
            </form>
        </section>
    )
}

export default FormularioContacto;