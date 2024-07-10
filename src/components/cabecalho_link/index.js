import { Link } from 'react-router-dom';
import styles from './cabecalho_link.module.css';

function CabecalhoLink({url, children}) {
    return ( 
        <Link to={url} className={styles.link}>
            {children}
        </Link>
     );
}

export default CabecalhoLink;