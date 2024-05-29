import style from './Home.module.css'
import undertalepng from '../../assets/images/sans.png'
import horizonpng from '../../assets/images/horizon.png'
import sifu from '../../assets/images/sifu.jpg'
import { Link } from "react-router-dom";


function Home(){


    return(
        <div className={style.container}>
            <div className={style.pageContent}>
                <section className={style.vspotlight}>
                    <div className={style.wrap}>
                        <article className={style.card}>
                            <Link to="undertale" className={style.thumb}>
                                <img src={undertalepng} alt="" className={style.thumb}/>
                                <h3 style={{backgroundColor: "rgb(0 41 245 / 70%)"}} className={style.caption}>Nova atualização de Undertale trás novidades incríveis</h3>
                            </Link>
                        </article>
                        <article className={style.card}>
                            <Link to="undertale" className={style.thumb}>
                                <img src={horizonpng} alt="" className={style.thumb}/>
                                <h3 style={{backgroundColor: "rgb(245 0 0 / 70%)"}} className={style.caption}>Nova atualização de Undertale trás novidades incríveis</h3>
                            </Link>
                        </article>
                        <article className={style.card}>
                            <Link to="undertale" className={style.thumb}>
                                <img src={sifu} alt="" className={style.thumb}/>
                                <h3 style={{backgroundColor: "rgb(245 158 0 / 70%)"}} className={style.caption}>Nova atualização de Undertale trás novidades incríveis</h3>
                            </Link>
                        </article>
                        <article className={style.card}>
                            <Link to="undertale" className={style.thumb}>
                                <img src={undertalepng} alt="" className={style.thumb}/>
                                <h3 style={{backgroundColor: "rgb(0 41 245 / 70%)"}} className={style.caption}>Nova atualização de Undertale trás novidades incríveis</h3>
                            </Link>
                        </article>
                    </div>
                </section>
                <section className={style.hspotlight}>
                    <div className={style.wrap}>
                    <div className={style.tituloSection}><Link to="analise"><h2>Veja mais</h2></Link></div>
                        <article className={style.card}>
                            <Link to="undertale" className={style.thumb}>
                                <img src={undertalepng} alt="" className={style.thumb}/>
                                
                            </Link>
                            <h3 className={style.caption}><Link to="">Nova atualização de Undertale trás novidades incríveis</Link></h3>
                        </article>
                        <article className={style.card}>
                        <Link to="undertale" className={style.thumb}>
                                <img src={undertalepng} alt="" className={style.thumb}/>
                                
                            </Link>
                            <h3 className={style.caption}><Link to="">Nova atualização de Undertale trás novidades incríveis</Link></h3>
                        </article>
                        <article className={style.card}>
                        <Link to="undertale" className={style.thumb}>
                                <img src={undertalepng} alt="" className={style.thumb}/>
                                
                            </Link>
                            <h3 className={style.caption}><Link to="">Nova atualização de Undertale trás novidades incríveis</Link></h3>
                        </article>
                        <article className={style.card}>
                        <Link to="undertale" className={style.thumb}>
                                <img src={undertalepng} alt="" className={style.thumb}/>
                                
                            </Link>
                            <h3 className={style.caption}><Link to="">Nova atualização de Undertale trás novidades incríveis</Link></h3>
                        </article>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home