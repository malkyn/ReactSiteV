import image from '../assets/images/eshowslogo.png'

function Card(){

    return(
        <div className="card">
            <img className='card-image' src={image} alt="EshowsLogo" />
            <h4>QUI, 23 DE MAI</h4>
            <h1 className='card-title'>Eshows</h1>
            <p className='card-text'>A maior plataforma de música ao vivo do Brasil!</p>
        </div>
    );
}

export default Card