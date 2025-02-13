import './elementoMenu.css';

const ElementoMenu = ({enlace, texto}) => {
    return (
        <li><a href={enlace}>{texto}</a></li>
    )
}

export default ElementoMenu