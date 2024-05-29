import style from './Navbar.module.css'
import { Link } from "react-router-dom";
import image from '../../assets/images/eshowslogo.png'
function Navbar(){

    return(
        <header id={style.id}>
            <div className={style.container}>
                <div className={style.flex}>
                    <Link to="/"><img src={image} alt="" /></Link>
                    <nav>
                        <ul>
                            <li><Link to="/">JOGOS</Link></li>
                            <li><Link to="analise">NOTÍCIAS</Link></li>
                            <li><Link to="#">DESENVOLVIMENTO</Link></li>
                        </ul>
                    </nav>

                    <div className={style.btnContato}>
                        <Link to="#"><button>CONTATO</button></Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar