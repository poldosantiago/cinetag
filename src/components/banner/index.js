import styles from './banner.module.css';

function Banner({imagem}) {
    return ( 
        <div 
            className={styles.capa}
            style={{ backgroundImage: `url('/images/banner-${imagem}.png')`}}
            >
        </div>
     );
}

export default Banner;