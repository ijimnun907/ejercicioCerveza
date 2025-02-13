import './Contacto.css';
import Cabecera from "./Cabecera.jsx";
import Banner from "./Banner.jsx";
import FormularioContacto from "./FormularioContacto.jsx";
import Pie from "./Pie.jsx";

const Contacto = () => {
    return (
        <>
            <Cabecera />
            <main>
                <Banner titulo="Formulario de contacto"/>
                <FormularioContacto />
            </main>
            <Pie />
        </>
    )
}

export default Contacto;