import style from './Navbar.module.css'
import image from '../../assets/images/eshowslogo.png'
function Navbar(){

    return(
        <header id={style.id}>
            <div className={style.container}>
                <div className={style.flex}>
                    <a href="/"><img src={image} alt="" /></a>
                    <nav>
                        <ul>
                            <li><a href="#">JOGOS</a></li>
                            <li><a href="undertale">NOTÍCIAS</a></li>
                            <li><a href="#">DESENVOLVIMENTO</a></li>
                        </ul>
                    </nav>

                    <div className={style.btnContato}>
                        <a href="#"><button>CONTATO</button></a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar