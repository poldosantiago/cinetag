import styles from './favoritos.module.css';
import Banner from "components/banner";
import Card from "components/card";
import Titulo from "components/titulo";
import { useFavoritoContext } from 'contextos/favoritos';
// import videos from 'json/db.json'; 

function Favoritos() {
    const { favorito:favoritos } = useFavoritoContext();

    return ( 
        <>
            <Banner imagem={"favoritos"}/>
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>

            <section className={styles.container}>
                {favoritos.map(favorito => {
                    return <Card {...favorito} key={favorito.id}/>
                })}
            </section>
        </>
     );
}

export default Favoritos;