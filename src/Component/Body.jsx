import "./Body.css";
import Imagen from "./Imagen.jsx";
import { useState } from "react";

const Body = () => {
    const [mostrarParrafo, setmostrarParrafo] = useState(true);

    const manejarClick = () => {
        setmostrarParrafo(!mostrarParrafo);
    }

    return (
        <>
            <header>
                <div className="enlaces1">
                    <img src="../../public/logo.jpg" className="logo_imagen"/>
                    <ul>
                        <li><a href="#">Nuestra Historia</a></li>
                        <li><a href="#">Nuestras Ceverzas</a><span
                            className="material-symbols-outlined">arrow_drop_down</span></li>
                        <li><a href="#">Galeria</a></li>
                        <li><a href="#">Tienda Virtual</a></li>
                        <li><a href="#">Visitas</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div className="enlaces_contacto">
                    <a href="tel:+34920293166"><span className="material-symbols-outlined">phone</span>
                        920 293 166</a>
                    <a href="mailto:info@cervezagredos.com"><span className="material-symbols-outlined">mail</span>info@cervezagredos.com</a>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                </div>
            </header>
            <main>
                <article>
                    <img src="../../public/banner1.jpg"/>
                    <h1>La Primera cerveza Artesana y Natural de la Sierra de Gredos</h1>
                </article>
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
            </main>
            <footer>
                <div className="imagenes">
                    <img src="../../public/sello.png"/>
                    <img src="../../public/avila-autentica.png"/>
                </div>
                <div className="Noticias_Recientes_Datos">
                    <h2>Noticias Recientes</h2>
                    <p><span className="material-symbols-outlined">calendar_month</span>JORNADA DEPORTIVA EN NATURÁVILA
                    </p>
                    <br/>
                    <p><span className="material-symbols-outlined">calendar_month</span>I CARRERA CAMPESTRE COCORUM</p>
                </div>

                <div className="datos_contacto">
                    <h2>Datos de Contacto</h2>
                    <p>Cerveza Gredos <br/> Eras Ruiz, S/N <br/> HoyoCasero(Ávila)05123España<br/>info@cervezagredos.com<br/>+34
                        920 293 166</p>
                </div>
            </footer>
        </>
    )
}

export default Body