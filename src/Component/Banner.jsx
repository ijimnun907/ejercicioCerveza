import './Banner.css';

const Banner = ({titulo}) => {
    return (
        <article>
            <img src="../../public/banner1.jpg"/>
            <h1>{titulo}</h1>
        </article>
    )
}

export default Banner;