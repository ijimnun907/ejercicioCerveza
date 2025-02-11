import './Imagen.css'
// eslint-disable-next-line react/prop-types
const Imagen = ({rutaImagen, texto}) => {
    return (
        <div className="nosotros">
            <img src={rutaImagen}/>
            <p>
                {texto}
            </p>
        </div>
    )
}

export default Imagen