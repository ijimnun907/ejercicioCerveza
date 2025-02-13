import './Cabecera.css';
import ElementoMenu from "./ElementoMenu.jsx";

const Cabecera = () => {
    return (
        <header>
            <div className="enlaces1">
                <img src="../../public/logo.jpg" className="logo_imagen"/>
                <ul>
                    <ElementoMenu enlace="#" texto="Nuestra Historia" />
                    <ElementoMenu enlace="#" texto="Nuestras Cervezas" />
                    <ElementoMenu enlace="#" texto="Galeria" />
                    <ElementoMenu enlace="#" texto="Tienda virtual" />
                    <ElementoMenu enlace="#" texto="Visitas" />
                    <ElementoMenu enlace="#" texto="Contacto" />
                    <ElementoMenu enlace="#" texto="Blog" />
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
    )
}

export default Cabecera;