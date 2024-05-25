import image from '../../assets/images/eshowslogo.png'
import style from './Card.module.css'

function Card(){

    return(
        <div className={style.card}>
            <img className={style.cardImage} src={image} alt="EshowsLogo" />
            <h4>QUI, 23 DE MAI</h4>
            <h1 className={style.cardTitle}>Eshows</h1>
            <p className={style.cardText}>A maior plataforma de música ao vivo do Brasil!</p>
        </div>
    );
}

export default Card