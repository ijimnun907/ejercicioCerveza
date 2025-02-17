import "./Body.css";
import Cabecera from "./Cabecera.jsx";
import Banner from "./Banner.jsx";
import Pie from "./Pie.jsx";
import ContenidoPrincipal from "./ContenidoPrincipal.jsx";
import {useState} from "react";
import FormularioContacto from "./FormularioContacto.jsx";

const Body = () => {
    const [mostrarPagina, setmostrarPagina] = useState(0);

    const manejarPagina = (numero) => {
        setmostrarPagina(numero);
    }
    return (
        <>
            <Cabecera />
            <button type="button" onClick={() => manejarPagina(1)}>Ir a formulario</button>
            <button type="button" onClick={() => manejarPagina(0)}>Ir a principal</button>
            <main>
                <Banner titulo="La Primera cerveza Artesana y Natural de la Sierra de Gredos"/>
                {mostrarPagina === 0 ?
                    <ContenidoPrincipal />
                    :
                    mostrarPagina === 1 ?
                        <FormularioContacto />
                        :
                        <ContenidoPrincipal />
                }

            </main>
            <Pie />
        </>
    )
}

export default Body