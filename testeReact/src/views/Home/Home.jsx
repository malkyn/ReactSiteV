import style from './Home.module.css'
import undertalepng from '../../assets/images/sans.png'


function Home(){
    return(
        <div className={style.container}>
            <div className={style.pageContent}>
                <section className={style.vspotlight}>
                    <div className={style.wrap}>
                        <div className={style.tituloSection}><a href=""><h2>Notícias</h2></a></div>
                        <article className={style.card}>
                            <a href="undertale" className={style.thumb}>
                                <img src={undertalepng} alt="" className={style.thumb}/>
                                <h3 className={style.caption}>Nova atualização de Undertale trás novidades incríveis</h3>
                            </a>
                        </article>
                        <article className={style.card}>
                            <a href="undertale" className={style.thumb}>
                                <img src={undertalepng} alt="" className={style.thumb}/>
                                <h3 className={style.caption}>Nova atualização de Undertale trás novidades incríveis</h3>
                            </a>
                        </article>
                        <article className={style.card}>
                            <a href="undertale" className={style.thumb}>
                                <img src={undertalepng} alt="" className={style.thumb}/>
                                <h3 className={style.caption}>Nova atualização de Undertale trás novidades incríveis</h3>
                            </a>
                        </article>
                        <article className={style.card}>
                            <a href="undertale" className={style.thumb}>
                                <img src={undertalepng} alt="" className={style.thumb}/>
                                <h3 className={style.caption}>Nova atualização de Undertale trás novidades incríveis</h3>
                            </a>
                        </article>
                    </div>
                </section>
                <section className={style.hspotlight}>
                    <div className={style.wrap}>
                        <div className={style.tituloSection}><h2>Notícias</h2></div>
                        <article className={style.card}>
                            <a href="undertale" className={style.thumb}>
                                <img src={undertalepng} alt="" className={style.thumb}/>
                                <h3 className={style.caption}>Nova atualização de Undertale trás novidades incríveis</h3>
                            </a>
                        </article>
                        <article className={style.card}>
                            <a href="undertale" className={style.thumb}>
                                <img src={undertalepng} alt="" className={style.thumb}/>
                                <h3 className={style.caption}>Nova atualização de Undertale trás novidades incríveis</h3>
                            </a>
                        </article>
                        <article className={style.card}>
                            <a href="undertale" className={style.thumb}>
                                <img src={undertalepng} alt="" className={style.thumb}/>
                                <h3 className={style.caption}>Nova atualização de Undertale trás novidades incríveis</h3>
                            </a>
                        </article>
                        <article className={style.card}>
                            <a href="undertale" className={style.thumb}>
                                <img src={undertalepng} alt="" className={style.thumb}/>
                                <h3 className={style.caption}>Nova atualização de Undertale trás novidades incríveis</h3>
                            </a>
                        </article>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home