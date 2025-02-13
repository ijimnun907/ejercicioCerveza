import './Pie.css';

const Pie = () => {
    return (
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
    )
}

export default Pie;