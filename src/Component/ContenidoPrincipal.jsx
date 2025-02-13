import './ContenidoPrincipal.css';
import Imagen from "./Imagen.jsx";
import {useState} from "react";

const ContenidoPrincipal = () => {
    const [mostrarParrafo, setmostrarParrafo] = useState(true);

    const manejarClick = () => {
        setmostrarParrafo(!mostrarParrafo);
    }
    return (
        <>
        <section>
            {mostrarParrafo ? (
                <section>
                    <Imagen rutaImagen={'../../public/foto1.jpg'} texto={"Ahora puedes disfrutar de todo el sabor y propiedades de la mejor Ceveza Artesanal comprando\n" +
                        "                            desde tu Casa"} />
                    <Imagen rutaImagen={'../../public/cerveza_gredos_intro1.jpg'} texto={"Ahora puedes disfrutar de todo el sabor y propiedades de la mejor Ceveza Artesanal comprando\n" +
                        "                            desde tu Casa"} />
                    <Imagen rutaImagen={'../../public/nuestra_fabrica1.jpg'} texto={"Ahora puedes disfrutar de todo el sabor y propiedades de la mejor Ceveza Artesanal comprando\n" +
                        "                            desde tu Casa"} />
                </section>
            ) : (
                <img src="../../public/botijo.jpg" alt="botijo" className="nosotros"/>
            )}
        </section>
    <button type="button" onClick={manejarClick}>Acción</button>
    </>
    )
}

export default ContenidoPrincipal;