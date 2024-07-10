import styles from './rodape.module.css';

function Rodape() {
    return ( 
        <footer className={styles.rodape}>
            <p className={styles.paragrafo} >Desenvolvido por Alura.</p>
        </footer>
     );
}

export default Rodape;