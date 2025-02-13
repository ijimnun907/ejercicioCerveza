import "./Body.css";
import Cabecera from "./Cabecera.jsx";
import Banner from "./Banner.jsx";
import Pie from "./Pie.jsx";
import ContenidoPrincipal from "./ContenidoPrincipal.jsx";

const Body = () => {
    return (
        <>
            <Cabecera />
            <main>
                <Banner titulo="La Primera cerveza Artesana y Natural de la Sierra de Gredos"/>
                <ContenidoPrincipal />
            </main>
            <Pie />
        </>
    )
}

export default Body