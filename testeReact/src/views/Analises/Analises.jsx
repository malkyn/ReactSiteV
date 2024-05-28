import style from './Analises.module.css'

function Analises(){
    return(
        <div className={style.pageContent}>
            <section className={`${style.broll} ${style.wrap}`}>
                <div className={style.sideAdTrail}>
                    <h2></h2>
                </div>
                <div className={style.tbl}>
                    <article className={style.article}>
                        <div className={style.t}>
                            <a href="" className={`${style.thumb} ${style.scoreWrapper}`}>
                                <img src="" alt="" className={style.thumb}/>
                            </a>
                        </div>
                        <div className={style.m}>
                             <div className={style.info}>
                                <time dateTime="2024-05-27T16:30:02-03:00">1 minuto</time>
                                <a href="" className={`${style.comments} ${style.commentscount}`}></a>
                             </div>
                             <h3>
                                <a href="">Criador de Undertale lança a demonstração Deltarune</a>
                             </h3>
                             <p>Toby diz: O meu é melhor</p>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    )
}


export default Analises
