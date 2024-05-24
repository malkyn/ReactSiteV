
import style from './Undertale.module.css'

function UndertalePage(){
    return(
        <div className={`${style.wrapper} ${style.articleBody}`} >
        <div className={style.pageContent}>
            <div className={style.articleHeadline}>
            <h1 className={style.strong}>Undertale</h1>
            </div>
            <div className={style.articleSubHeadline}>
            <h3 id={style.idDeck}>Do Under ao Tale</h3>
            </div>

            <section className={`${style.sideBySide} ${style.articleContent}`}>
                <article className={`${style.articleSection} ${style.articlePage}`}>

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <h3>Emoção e grandes escolhas</h3>
                <p>Maecenas consequat massa non diam laoreet varius. Sed velit mi, ullamcorper eget dictum a, interdum ac tellus. Nunc laoreet quam nec velit pulvinar, quis dapibus urna aliquam. Vestibulum sagittis nunc non condimentum porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum et dolor ante. In porta sem ut felis luctus, vel semper libero lobortis. Etiam porttitor placerat mauris, at luctus orci rutrum quis. In fringilla nulla nec leo elementum, at sagittis ex tristique. Maecenas sollicitudin erat sit amet risus congue, sit amet volutpat libero efficitur. Ut a metus euismod, maximus metus eu, tempus lorem. Morbi vehicula vel urna at semper. Phasellus semper mauris vitae nisl rutrum, sed placerat ipsum bibendum. Ut ut tempus sapien, et gravida erat. Cras scelerisque enim eros, a maximus lorem faucibus et. Mauris porttitor porta nibh sit amet vestibulum.</p>

                <p>Nullam non nibh vel nisl consectetur facilisis malesuada a augue. Nulla posuere diam ac felis aliquet euismod. Proin ante lacus, sagittis in dictum non, vestibulum sit amet ipsum. Vestibulum sapien lorem, efficitur eu libero ut, vulputate accumsan felis. Sed dapibus feugiat dictum. Morbi nec augue dui. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur ac ante ex. Praesent venenatis elit nibh, eget hendrerit mauris vestibulum ut. Curabitur sed ipsum finibus, gravida nibh in, pharetra neque. Mauris id fermentum lacus. Etiam non lacus nec purus scelerisque aliquam. Sed fermentum lacus eu sem vestibulum maximus. Donec consectetur vulputate turpis vitae semper.</p>
                </article>

            </section>

        </div>
</div>

    );
}

export default UndertalePage