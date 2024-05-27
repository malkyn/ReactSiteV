import style from './Home.module.css'
import undertalepng from '../../assets/images/sans.png'


function Home(){
    return(
        <div className={style.container}>
            <div className={style.pageContent}>
                <section className={style.vspotlight}>
                    <div className={style.wrap}>
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
                    <div className={style.tituloSection}><a href=""><h2>Veja mais</h2></a></div>
                        <article className={style.card}>
                            <a href="undertale" className={style.thumb}>
                                <img src={undertalepng} alt="" className={style.thumb}/>
                                
                            </a>
                            <h3 className={style.caption}><a href="">Nova atualização de Undertale trás novidades incríveis</a></h3>
                        </article>
                        <article className={style.card}>
                        <a href="undertale" className={style.thumb}>
                                <img src={undertalepng} alt="" className={style.thumb}/>
                                
                            </a>
                            <h3 className={style.caption}><a href="">Nova atualização de Undertale trás novidades incríveis</a></h3>
                        </article>
                        <article className={style.card}>
                        <a href="undertale" className={style.thumb}>
                                <img src={undertalepng} alt="" className={style.thumb}/>
                                
                            </a>
                            <h3 className={style.caption}><a href="">Nova atualização de Undertale trás novidades incríveis</a></h3>
                        </article>
                        <article className={style.card}>
                        <a href="undertale" className={style.thumb}>
                                <img src={undertalepng} alt="" className={style.thumb}/>
                                
                            </a>
                            <h3 className={style.caption}><a href="">Nova atualização de Undertale trás novidades incríveis</a></h3>
                        </article>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home